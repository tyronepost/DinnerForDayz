class Api::RecipeController < ApplicationController
  def index
    render json: Recipe.all
  end

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end
end
