Rails.application.routes.draw do
  resources :reviews, only: [:index, :create]
  resources :images, only: [:create, :destroy]
  resources :favorites, only: [:index, :create, :destroy]
  resources :properties
  
  get '/profile', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end