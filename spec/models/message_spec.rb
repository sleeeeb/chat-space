require 'rails_helper'
  describe Message do
    describe '#create' do
      it "nothing message" do
      message = build(:message,content:"")
      message.valid?
      expect(message).to be_valid
      end

      it "nothing img" do
      message = build(:message,image:"")
      message.valid?
      expect(message).to be_valid
      end

      it "valid all good message" do
      message = build(:message)
      message.valid?
      expect(message).to be_valid
      end

      it "invalid nothing message  img" do
      message = build(:message,content: "", image: nil)
      message.valid?
      expect(message).not_to be_valid
      end

      it "invalid nothing message  img" do
      message = build(:message,group_id: nil)
      message.valid?
      expect(message).not_to be_valid
      end

      it "invalid nothing message  img" do
      message = build(:message,user_id: nil)
      message.valid?
      expect(message).not_to be_valid
      end


    end

  end
