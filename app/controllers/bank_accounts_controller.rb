class BankAccountsController < ApplicationController
  def index
    @bank_accounts = jsonify(BankAccount.all)
  end

  def show
    @bank_account = jsonify(bank_account)
  end

  def edit
    @bank_account = jsonify(bank_account)
  end

  private

  def bank_account
    BankAccount.find(params[:id])
  end
end
