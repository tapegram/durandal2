class TournamentsController < ApplicationController
  def index
    respond_with Tournament.all
  end

  def create
    respond_with Tournament.create(post_params)
  end

  def show
    respond_with Tournament.find(params[:id])
  end

  private
  def post_params
    params.require(:tournament).permit(:name, :weapon)
  end
end
