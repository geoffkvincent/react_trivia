class Category < ApplicationRecord
  has_many :cards, dependent: :destroy
  belongs_to :game
end
