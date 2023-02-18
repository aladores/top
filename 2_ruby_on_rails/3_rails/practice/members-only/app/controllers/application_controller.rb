class ApplicationController < ActionController::Base
  before_action :require_login
  include SessionsHelper

  private

  def require_login
    unless logged_in?
      flash[:error] = "You must be logged in to access post"
      redirect_to login_path
    end
  end
end
