class EventAttendeesController < ApplicationController
  def create
    @event_attendee = EventAttendee.new(:event_id => params[:event_id])
    @event_attendee.attendee_id = current_user.id
    @event = @event_attendee.event_id

    puts "*************"
    puts @event_attendee.event_id
    puts "*************"
    if @event_attendee.save
      flash[:notice] = "You are now attending this event!"
      redirect_to event_path(@event_attendee.event_id)
    else
      redirect_to root_path, status: :unprocessable_entity
    end
  end

  def destroy
    if EventAttendee.exists?(:event_id => params[:event_id].to_i, :attendee_id => current_user.id)
      @attended = EventAttendee.find_by(:event_id => params[:event_id].to_i, :attendee_id => current_user.id)
      @event = @attended.event_id
      @attended.destroy

      flash[:notice] = "You unattended this event!"
      redirect_to event_path
    end
  end
end
