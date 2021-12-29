class CreateItemLists < ActiveRecord::Migration[5.2]
  def change
    create_table :item_lists do |t|
      # t.user_id :integer
      # t.event_id :integer


      t.timestamps
    end
  end
end
