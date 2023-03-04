Rails.application.routes.draw do
  namespace :api do
    resources :images, only: [:create, :destroy]
    resources :favorites, only: [:index, :create, :destroy]
    resources :properties
    
    # custom auth routes
    get '/profile', to: 'users#show'
    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    # custom method routes
    get 'affordable_properties', to: 'properties#affordable'
    get 'midrange_properties', to: 'properties#midrange'
    get 'luxury_properties', to: 'properties#luxury'
  end

  #root 'properties#index'
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end