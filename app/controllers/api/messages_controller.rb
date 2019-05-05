class Api::MessagesController < ApplicationController
  def index
    # @newmessages = Message.find(153)
      # @messages = @group.messages.includes(:user)
        # @messages = Message.where(id=params[:id])
    respond_to do |format|
    format.json{ @new_messages = Message.where('group_id = ?', params[:group_id]).where('id > ?', params[:id])}
  end
end
end
