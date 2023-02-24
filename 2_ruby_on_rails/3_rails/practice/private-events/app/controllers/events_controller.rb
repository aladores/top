class EventsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create]

  def index
    @events = Event.all

    @date = Date.current
    @current_events = event_time_phase(@events, @date, "current")
    @past_events = event_time_phase(@events, @date, "past")

    if user_signed_in?
      all_attend_events = all_attend
      @attending_events = attend_events(@current_events, all_attend_events)
      @attended_events = attend_events(@past_events, all_attend_events)
    end
  end

  def new
    @event = Event.new
  end

  def create
    @event = current_user.owner_events.build(event_params)

    if @event.save
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @event = Event.find(params[:id])
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :event_date, :owner_id)
  end

  def all_attend
    all_attend = EventAttendee.where(attendee_id: current_user.id)
  end

  def attend_events(events, all_attend_events)
    if all_attend_events.exists?(attendee_id: current_user.id)
      events_attends = []
      #get only the attendees part of the event
      attends_events = all_attend_events.where(event_id: events.ids).all
      #events.each do |e|
      #  event_attends.push(all_attend_events.find_by(event_id: e.id))
      #end

      #get the events the user attendees
      attends_events.each do |e|
        events_attends.push(events.find(e.event_id))
      end
      #event_attends = events.where(id: attends_events1.event_ids).all
    end
    events_attends
  end

  def event_time_phase(events, date, condition)
    if (condition == "past")
      @past_events = events.where("event_date <?", date)
    else
      @current_events = events.where("event_date >=?", date)
    end
  end
end
