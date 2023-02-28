class Flight < ApplicationRecord
  belongs_to :departure_airport, class_name: "Airport"
  belongs_to :arrival_airport, class_name: "Airport"

  has_many :bookings
  has_many :passengers, through: :bookings

  def flight_details
    details = "From #{departure_airport.code} To #{arrival_airport.code}, 
    On #{flight_date.strftime("%m/%d/%Y")}, #{flight_date.strftime("%H:%M")} UTC, 
    Flight Duration: #{flight_duration} hours"
  end
end
