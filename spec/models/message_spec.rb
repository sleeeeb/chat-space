require 'rails_helper'
describe Message do
  describe '#create' do
    it "valid all good message" do
     message = build(:message)
     message.valid?
     expect(user).to be_valid
    end
  end

end
