require 'rails_helper'

describe BankAccountsController, type: :controller do
  describe 'GET #index' do
    # login_user
    let(:bank_accounts) { create!(:bank_account) }

    it 'sets the array of bank accounts' do
      get :index
      expect(subject.instance_variable_get(:@bank_accounts)).to eq('foo')
    end
  end

  # describe 'GET #show' do
  #   let(:bank_account) { create(:bank_account) }
  #   # login_user
  #
  #   before(:each) { get :show, params: { id: bank_account.id } }
  #
  #   it 'returns the bank_account json' do
  #     expect(json).to include('data')
  #     expect(json['data']).to include('attributes')
  #     expect(json['data']).to include('type')
  #     expect(json['data']['type']).to eq('bank_account')
  #   end
  # end
  #
  # describe 'PATCH #update' do
  #   def patch_update(attrs)
  #     patch :update, params: { id: bank_account.id, bank_account: attrs }
  #   end
  #
  #   # login_user
  #
  #   let(:old_diagnosis_title) { 'Broken Leg' }
  #   let(:new_diagnosis_title) { 'Hip Surgery' }
  #   let(:bank_account_attributes) { attributes_for(:bank_account, diagnosis_title: old_diagnosis_title) }
  #   let(:bank_account) { create(:bank_account, bank_account_attributes) }
  #
  #   let(:new_bank_account_attributes) do
  #     bank_account_attributes.merge(diagnosis_title: new_diagnosis_title)
  #   end
  #
  #   let(:bank_account_params) { new_bank_account_attributes }
  #
  #   context 'with valid attributes' do
  #     let(:valid_bank_account_params) { bank_account_params }
  #
  #     it 'should update the bank_account' do
  #       patch_update(valid_bank_account_params)
  #       bank_account.reload
  #       expect(bank_account.diagnosis_title).to eq(new_diagnosis_title)
  #     end
  #
  #     it 'returns the bank_account json' do
  #       patch_update(valid_bank_account_params)
  #       expect(json).to include('data')
  #       expect(json['data']).to include('attributes')
  #       expect(json['data']).to include('type')
  #       expect(json['data']['type']).to eq('bank_account')
  #     end
  #   end
  # end
  #
  # describe 'POST #create' do
  #   def post_create(attrs)
  #     post :create, params: { bank_account: attrs }
  #   end
  #
  #   # login_user
  #
  #   let(:bank_account_params) { attributes_for(:bank_account) }
  #
  #   context 'with valid attributes' do
  #     let(:valid_bank_account_params) { bank_account_params }
  #
  #     it { expect { post_create(valid_bank_account_params) }.to change(Episode, :count).by(1) }
  #
  #     it 'returns the bank_account json' do
  #       post_create(valid_bank_account_params)
  #       expect(json).to include('data')
  #       expect(json['data']).to include('attributes')
  #       expect(json['data']).to include('type')
  #       expect(json['data']['type']).to eq('bank_account')
  #     end
  #   end
  #
  #   describe 'POST #destroy' do
  #     def post_create(attrs)
  #       post :create, params: { bank_account: attrs }
  #     end
  #
  #     # login_user
  #
  #     let(:bank_account_params) { attributes_for(:bank_account) }
  #
  #     context 'with valid attributes' do
  #       let(:valid_bank_account_params) { bank_account_params }
  #
  #       it { expect { post_create(valid_bank_account_params) }.to change(Episode, :count).by(1) }
  #
  #       it 'returns the bank_account json' do
  #         post_create(valid_bank_account_params)
  #         expect(json).to include('data')
  #         expect(json['data']).to include('attributes')
  #         expect(json['data']).to include('type')
  #         expect(json['data']['type']).to eq('bank_account')
  #       end
  #     end
  #   end
  # end
end
