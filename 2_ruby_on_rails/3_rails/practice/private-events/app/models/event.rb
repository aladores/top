class Event < ApplicationRecord
  belongs_to :creator, class_name: "User", foreign_key: "user_id"

  has_many :event_attendees, foreign_key: "event_id"
  has_many :attendees, through: :event_attendees, source: :event

  scope :past, -> { where(event_date: (..Time.current)) }
  scope :future, -> { where(event_date: (Time.current..)) }
end
