class CreateFlights < ActiveRecord::Migration[7.0]
  def change
    create_table :flights do |t|
      t.datetime :flight_date
      t.float :flight_duration
      t.integer :departure_airport, null: false, foreign_key: true, index: true
      t.integer :arrival_airport, null: false, foreign_key: true, index: true

      t.timestamps
    end
  end
end
