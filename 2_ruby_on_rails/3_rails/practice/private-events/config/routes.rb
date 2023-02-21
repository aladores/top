Rails.application.routes.draw do
  devise_for :users
  #roots
  root "events#index"

  resources :events
end
