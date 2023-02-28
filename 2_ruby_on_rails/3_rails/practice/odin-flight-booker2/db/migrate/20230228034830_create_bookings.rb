class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.integer :flight_id, null: false, foreign_key: true, index: true
      t.integer :user_id, null: false, foreign_key: true, index: true
      t.timestamps
    end
  end
end
