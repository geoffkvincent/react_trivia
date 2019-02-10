class Api::CategoriesController < ApplicationController
  before_action :set_game
  before_action :set_category, only: [:show, :update, :destroy]

  def index
    binding.pry
    render json: @game.categories.all
  end

  def show
    render json: @category
  end

  def create
    game = Game.find(params[:game_id])
    category = game.categories.new(category_params)

    if category.save
      render json: category
    else
      render json: category.errors, status: 422
    end
  end

  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors
    end
  end

  def destroy
    @category.destroy
  end

  private

  def set_game
    @game = Game.find(params[:game_id])
  end

  def set_category
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:name)
  end
end
