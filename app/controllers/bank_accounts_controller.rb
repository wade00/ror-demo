class BankAccountsController < ApplicationController
  def index
    @bank_accounts = jsonify(BankAccount.all)
  end
end
