class BookingsController < ApplicationController
  def new
    @booking = Booking.new
    @flight_booking = Flight.find(params[:flight_id])
    @booking_passenger_count = params[:passenger_count]
    @booking_flight_id = params[:flight_id]

    convert_passenger_count.times { @booking.passengers.build }
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      redirect_to booking_path(@booking)
    else
      render :new, status: :unprocessable_entity, flight_id: @flight_booking.id
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
    @booking_passenger_count.to_i
  end
end
