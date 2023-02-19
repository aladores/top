Rails.application.routes.draw do
  root "users#index"

  get "/sessions/new", to: "sessions#new", as: "login"
  get "/users/index", to: "sessions#destroy", as: "logout"
  post "/sessions/new", to: "sessions#create"

  get "/posts/new", to: "posts#new"
  get "/posts/:id", to: "posts#show"

  resources :posts, :users
end
