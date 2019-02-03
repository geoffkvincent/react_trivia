class Api::GamesController < ApplicationController
  before_action :set_game, only: [:show, :update, :destroy] 

  def index
    render json: Games.all
  end

  def show
    render json: @game
  end

  def create
    game = Game.new(game_params)

    if game.save
      render json: game
    else
      render json: game.errors, status: 422
    end
  end

  def update
  end

  def destroy
    @game.destroy
  end

  private

  def set_game
    @game = Game.find(params[:id])
  end

  def game_params
    params.require(:game).permit(:name)
  end
end
