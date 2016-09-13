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
    
    # set tournament as in_process.
    tournament.in_process = true
    tournament.save
     
     respond_with tournament
  end
  
  def show_pools
    # return an array of pools. Each pool is an array with fencer objects.
    
    tournament = Tournament.find(params[:tournament_id])
    pools = tournament.pools
    fencerLists = []
    
    pools.each do |p|
      fencerLists << p.fencers.to_a
    end 
    
    respond_with fencerLists
  end
  
  private
  def pool_params(my_params)
    
  end
end
