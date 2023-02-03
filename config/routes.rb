Rails.application.routes.draw do
  resources :properties


  root 'properties#index'
end
