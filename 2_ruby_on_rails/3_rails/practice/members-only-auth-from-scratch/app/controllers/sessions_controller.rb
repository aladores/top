class SessionsController < ApplicationController
  skip_before_action :require_login

  def new
  end

  def create
    user = User.find_by(username: params[:session][:username])
    if user && user.authenticate(params[:session][:password])
      #set session and redirect on sucess
      log_in user
      redirect_to root_path
    else
      #error message on fail
      flash[:danger] = "Invalid email/password combination"
      redirect_to login_path, status: :unprocessable_entity
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end
end
