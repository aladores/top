class Passenger < ApplicationRecord
  has_many :flights, through: :booking
  belongs_to :booking
end
