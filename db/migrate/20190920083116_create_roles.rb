class CreateRoles < ActiveRecord::Migration[5.1]
  def change
    create_table :roles do |t|
      t.string :name, index: true, unique: true, null: false

      t.timestamps
    end
  end
end
