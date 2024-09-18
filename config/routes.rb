Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :projects do
        resources :tasks, shallow: true
      end

      resources :tasks, only: [:index]
    end
  end

end
