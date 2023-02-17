Rails.application.routes.draw do
  root "users#index"

  get "/sessions/new", to: "sessions#new", as: "login"
  post "/sessions/new", to: "sessions#create"

  resources :users, only: [:new, :create]
end
