class BookingsController < ApplicationController
  def new
    @booking = Booking.new
    @flight = Flight.find(params[:flight_id])
    @flight_id = params[:flight_id]
    @passenger_count = params[:passenger_count]

    convert_passenger_count.times { @booking.passengers.build }
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id
    puts "*************************"
    puts @booking.inspect
    puts "*************************"
    if @booking.save
      redirect_to booking_path(@booking)
    else
      redirect_to new_booking_path
    end
  end

  def show
    @booking = Booking.find(params[:id])
  end

  private

  def booking_params
    params.require(:booking).permit(:flight_id, :passenger_count, passengers_attributes: [:name, :email])
  end

  def convert_passenger_count
    @passenger_count.to_i
  end
end
