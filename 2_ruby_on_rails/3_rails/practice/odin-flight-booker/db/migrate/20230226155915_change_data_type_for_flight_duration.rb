class ChangeDataTypeForFlightDuration < ActiveRecord::Migration[7.0]
  def self.up
    change_column :flights, :flight_duration, :float
  end

  def self.down
    change_column :flights, :flight_duration, :string
  end
end
