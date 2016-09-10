class PoolsController < ApplicationController
  def create
     tournament = Tournament.find(params[:tournament_id])
     tournament.pools.destroy_all # destroy existing pools. 
     
    params["pools"].each do |p|
      new_pool = Pool.new
      
      # pool specific info here
      
      
      # add fencers
      p.each do |f|
        new_pool.fencers << Fencer.find(f[:id])
      end
      
      # add pool to tournament
      tournament.pools << new_pool
    end
     
     respond_with tournament
  end
  
  private
  def pool_params(my_params)
    
  end
end
