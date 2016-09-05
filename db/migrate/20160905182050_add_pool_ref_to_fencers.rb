class AddPoolRefToFencers < ActiveRecord::Migration
  def change
    add_reference :fencers, :pool, index: true, foreign_key: true
  end
end
