class CreateMappings < ActiveRecord::Migration[5.1]
  def change
    create_table :mappings do |t|
      t.string :name, index: true, unique: true, null: false

      t.timestamps
    end
  end
end
