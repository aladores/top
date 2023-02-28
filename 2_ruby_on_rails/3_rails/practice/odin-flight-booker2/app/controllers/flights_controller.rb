class FlightsController < ApplicationController
  def index
    @airport_options = Airport.all.map { |a| [a.code, a.id] }
    @flight_start_options = Flight.all.select(:flight_date).order(:flight_date)
      .map { |f| [f.flight_date.to_date.strftime("%m/%d/%Y"), f.flight_date.to_date] }
      .uniq
    @flight_search_results = search_result unless params[:flight_date].nil?
  end

  private

  def search_params
    params.permit(:departure_airport_id, :arrival_airport_id, :flight_date, :passenger_count)
  end

  def search_result
    date_param = params[:flight_date].to_datetime.beginning_of_day

    flight_search_results = Flight.where(departure_airport_id: params[:departure_airport_id])
      .where(arrival_airport_id: params[:arrival_airport_id])
      .where(flight_date: date_param..date_param.end_of_day)
    #puts "**************************"
    #puts date_param.class
    #puts search_flight_results
    flight_search_results
  end
end
