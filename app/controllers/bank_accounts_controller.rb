class BankAccountsController < ApplicationController
  def index
    @bank_accounts = jsonify(BankAccount.all)
  end

  def new
    @banks = Bank.all
  end

  def create
    if BankAccount.create(bank_account_params)
      redirect_to bank_accounts_path
    else
      puts "ERRORRRRRR"
    end
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

  def destroy
    account = set_bank_account
    if account.destroy
      redirect_to bank_accounts_path
    else
      puts "ERRORRRRRR"
    end
  end

  private

  def set_bank_account
    BankAccount.find(params[:id])
  end

  def bank_account_params
    params.require(:bank_account).permit(:name, :routing_number, :bank_id)
  end
end
