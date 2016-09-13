class AddInProcessToTournaments < ActiveRecord::Migration
  def change
    add_column :tournaments, :in_process, :boolean
  end
end
