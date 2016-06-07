class Api::RecipeController < ApplicationController
  def index
    render json: Recipe.all
  end

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end

  def create
    Recipe.create(create_params)
  end

  private

  def create_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params, only: [:name, :ingredients, :directions])
  end
end
