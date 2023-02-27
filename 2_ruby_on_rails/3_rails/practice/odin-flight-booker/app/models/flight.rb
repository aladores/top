class Flight < ApplicationRecord
  belongs_to :departure_airport, class_name: "Airport", foreign_key: "departure_id"
  belongs_to :arrival_airport, class_name: "Airport", foreign_key: "arrival_id"

  has_many :passengers, through: :bookings
  has_many :bookings

  def flight_details
    details = "From #{departure_airport.code} To #{arrival_airport.code}, 
    On #{start.strftime("%Y/%m/%d")}, #{start.strftime("%H:%M")} UTC, 
    Flight Duration =#{flight_duration}"
  end
end
