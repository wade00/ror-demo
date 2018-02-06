class BankAccountsController < ApplicationController
  def index
    binding.pry
    @bank_accounts = BankAccount.all
  end
end
