# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

=begin
#Aiport.destroy_all
Airport.create!([{
  code: "YYZ",
},
                 {
  code: "LAX",

},
                 {
  code: "HND",
},
                 {
  code: "MEX",
},
                 {
  code: "BOM",
}])

p "Created #{Airport.count} airports"
=end

Flight.create!([{
  departure_airport_id: 1,
  arrival_airport_id: 2,
  flight_date: DateTime.parse("03/01/2023 8:00"),
  flight_duration: 5.5,
},
                {
  departure_airport_id: 1,
  arrival_airport_id: 4,
  flight_date: DateTime.parse("03/02/2023 8:20"),
  flight_duration: 5.25,

},
                {
  departure_airport_id: 1,
  arrival_airport_id: 3,
  flight_date: DateTime.parse("03/03/2023 18:50"),
  flight_duration: 29,
},
                {
  departure_airport_id: 1,
  arrival_airport_id: 5,
  flight_date: DateTime.parse("03/01/2023 20:30"),
  flight_duration: 18.5,
}])

p "Created #{Flight.count} flights"
