class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(username: params[:session][:username].downcase)
    if user && user = User.find_by(password: params[:session][:password])
      #set session and redirect on sucess
      log_in user
      redirect_to root_path
    else
      #error message on fail
      flash[:danger] = "Invalid email/password combination"
      redirect_to login_path
    end
  end

  def index
  end
end
