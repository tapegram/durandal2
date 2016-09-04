class FencersController < ApplicationController
  def create
    tournament = Tournament.find(params[:tournament_id])
    fencer = tournament.fencers.create(comment_params)
    respond_with tournament, fencer
  end

  private
  def comment_params
    params.require(:fencer).permit(:firstname, :lastname, :rating, :rating_year)
  end
end
