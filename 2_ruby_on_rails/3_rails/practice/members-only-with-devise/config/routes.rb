Rails.application.routes.draw do
  devise_for :user, :controllers => { registrations: "users/registrations" }
  devise_scope :user do
    get "/user/sign_out", to: "devise/sessions#destroy"
  end
  root "users#index"
=begin
  get "/sessions/new", to: "sessions#new", as: "login"
  get "/users/index", to: "sessions#destroy", as: "logout"
  post "/sessions/new", to: "sessions#create"

  get "/posts/new", to: "posts#new"
  get "/posts/:id", to: "posts#show"
=end
  resources :posts
end
