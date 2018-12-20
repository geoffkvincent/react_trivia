class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :question
      t.string :answer_a
      t.string :answer_b
      t.string :answer_c
      t.string :answer_d
      t.string :correct_answer
      t.integer :points
      t.belongs_to :category, foreign_key: true

      t.timestamps
    end
  end
end
