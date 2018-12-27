class Api::CardsController < ApplicationController
  before_action :set_category
  before_action :set_card, only: [:show, :update, :destroy]

  def index
    render json: @category.cards
  end

  def show
    render json: @category.card
  end

  def create
    card = @category.card.new(card_params)

    if card.save
      render json: card
    else
      render json: { errors: card.errors }
    end
  end

  def update
    if @card.update(card_params)
      render json: @card
    else
      render json: @card.errors
    end
  end

  def destroy
    @card.destroy
  end

  private

  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_card
    @card = Card.find(params[:id])
  end

  def card_params
    params.require(:card).permit(:question, :answer_a, :answer_b, :answer_c, :answer_d, :correct_answer, :points)
  end
end
