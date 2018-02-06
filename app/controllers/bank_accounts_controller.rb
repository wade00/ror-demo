class BankAccountsController < ApplicationController
  def index
    @bank_accounts = jsonify(BankAccount.all)
  end

  def show
    @bank_account = jsonify(set_bank_account)
  end

  def edit
    @bank_account = jsonify(set_bank_account)
  end

  def update
    account = set_bank_account
    if account.update(bank_account_params)
      redirect_to bank_account_path(account)
    else
      puts "ERRORRRRRR"
    end
  end

  private

  def set_bank_account
    BankAccount.find(params[:id])
  end

  def bank_account_params
    params.require(:bank_account).permit(:name)
  end
end
