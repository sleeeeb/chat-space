class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :content
      t.string :image
      t.references :group, foreign_key: true,null: false
      t.references :user, foreign_key: true,null: false
      t.timestamps
    end
  end
end
