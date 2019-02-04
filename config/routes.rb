Rails.application.routes.draw do
  namespace :api do
    resources :games do
      resources :categories
    end
    resources :categories do
      resources :cards
    end
  end
end
