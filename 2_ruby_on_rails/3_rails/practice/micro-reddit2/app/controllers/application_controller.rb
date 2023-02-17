class ApplicationController < ActionController::Base
  def log_in(user)
    session[:user_id] = user.id
  end

  def current_user
    User.where(id: session[:user_id]).first
  end

  def logged_in?
    !current_user.nil?
  end

  helper_method :current_user
  helper_method :log_in
  helper_method :logged_in?
end
