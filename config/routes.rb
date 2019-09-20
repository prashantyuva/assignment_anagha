Rails.application.routes.draw do
  resource :home
  get '/index', to: 'home#index'
  match '/csv', to: 'home#process_csv', via: [:get, :post]

  root to: 'home#process_csv'

  namespace :api do
  	namespace :v1 do
  		resources :question_apis, except: [:new, :edit, :index]
  	end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
