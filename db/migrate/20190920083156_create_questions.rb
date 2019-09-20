class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string  :que_text
      t.integer :priority, default: 1, index: true
      t.string :que_type, default: 'Rating scale', index: true
      t.string :conditions, default: 'Always', index: true
      t.boolean :required, default: false
      t.string  :teaming_stages
      t.integer :appears
      t.integer :frequency
      t.integer :role_id, index: true
      t.integer :mapping_id, index: true

      t.timestamps
    end
  end
end
