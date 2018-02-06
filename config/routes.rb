Rails.application.routes.draw do
  root to: 'bank_accounts#index'

  resources :banks
  resources :bank_accounts
end
