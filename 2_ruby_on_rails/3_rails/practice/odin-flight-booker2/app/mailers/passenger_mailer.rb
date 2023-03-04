class PassengerMailer < ApplicationMailer
  default from: "flight-booker2@example.com"

  def confirmation_email
    @booking_info = params[:booking]
    @flight_info = params[:flight]
    @passenger = params[:passenger]
    @url = "test"
    mail(to: @passenger.email, subject: "Booking confirmation")
  end
end
