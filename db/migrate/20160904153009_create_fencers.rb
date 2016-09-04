class CreateFencers < ActiveRecord::Migration
  def change
    create_table :fencers do |t|
      t.string :firstname
      t.string :lastname
      t.string :rating
      t.string :rating_year
      t.references :tournament, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
