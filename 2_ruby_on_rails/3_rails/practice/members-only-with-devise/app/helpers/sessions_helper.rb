module SessionsHelper
=begin
    session[:user_id] = user.id
  end

  def current_user
    User.where(id: session[:user_id]).first
  end

  def log_out
    session.delete(:user_id)
    @current_user = nil
  end

  def logged_in?
    !current_user.nil?
  end
=end
end
