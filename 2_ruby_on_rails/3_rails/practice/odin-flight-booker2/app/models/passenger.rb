class Passenger < ApplicationRecord
  has_many :flights, through: :bookings
  belongs_to :booking
end
