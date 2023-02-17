Rails.application.routes.draw do
  root "users#index"

  get "/sessions/new", to: "sessions#new"
  post "/sessions/new", to: "sessions#create"
  get "/sessions/index", to: "sessions#index"
  resources :users, only: [:new, :create]
end
