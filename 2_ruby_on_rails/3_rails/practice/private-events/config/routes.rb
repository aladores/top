Rails.application.routes.draw do
  devise_for :users
  #roots
  root "events#index"

  post "/event_attendees/:id", to: "event_attendees#create", as: "attend"
  resources :events, :event_attendees
end
