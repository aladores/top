class EventsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create]

  def index
    @events = Event.all
    if EventAttendee.exists?(attendee_id: current_user.id)
      @events_attending = []
      @attending = EventAttendee.where(attendee_id: current_user.id).all
      @attending.each do |e|
        @events_attending.push(Event.find(e.event_id))
      end
    end
  end

  def new
    @event = Event.new
  end

  def create
    @event = current_user.events.build(event_params)

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
    params.require(:event).permit(:title, :description, :event_date)
  end
end
