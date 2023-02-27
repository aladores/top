class FlightsController < ApplicationController
  def index
    @airport_options = Airport.all.map { |a| [a.code, a.id] }
    @flight_start_options = Flight.all.select(:start).order(:start)
      .map { |f| [f.start.to_date.strftime("%m/%d/%Y"), f.start.to_date] }
      .uniq

    @search_result_options = search_result unless params[:start].nil?
  end

  private

  def search_params
    params.permit(:departure_id, :arrival_id, :start, :passenger_count)
  end

  def search_result
    date_param = params[:start].to_datetime.beginning_of_day

    search_flight_results = Flight.where(departure_id: params[:departure_id])
      .where(arrival_id: params[:arrival_id])
      .where(start: date_param..date_param.end_of_day)
    #puts "**************************"
    #puts date_param.class
    #puts search_flight_results
    search_flight_results
  end
end
