class BookingsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create]

  def new
    @booking = Booking.new
    @flight = Flight.find(params[:flight_id])
    @flight_id = params[:flight_id]
    @passenger_count = params[:passenger_count]

    convert_passenger_count.times { @booking.passengers.build }
  end

  def create
    @passenger_count = params[:passenger_count]
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id

    if @booking.save
      redirect_to booking_path(@booking)
    else
      redirect_to new_booking_path
    end
  end

  def show
    @booking_show = Booking.find(params[:id])
    if current_user.id == @booking_show.user_id
      @flight_show = Flight.find(@booking_show.flight_id)
      @passengers_show = Passenger.where(booking_id: @booking_show.id)
    else
      flash[:notice] = "Invalid user cannot access requested booking."
      redirect_to root_path
    end
  end

  def index
    @booking_index = Booking.where(user_id: current_user.id)
    @passengers_index = Passenger.where(booking_id: @booking_index.pluck(:id))
    @flight_index = Flight.where(id: @booking_index.pluck(:flight_id))
  end

  private

  def booking_params
    params.require(:booking).permit(:flight_id, :passenger_count, passengers_attributes: [:name, :email])
  end

  def convert_passenger_count
    @passenger_count.to_i
  end
end
