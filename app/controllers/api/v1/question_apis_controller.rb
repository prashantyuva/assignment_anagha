class Api::V1::QuestionApisController < ApplicationController
  before_action :get_resource, except: [:create]
  
  def create
    
  end

  def show
    
  end

  def update
    @question.update(update_params)
    render json: {question: @question}
  end

  def destroy
    @question.destroy
    render json: {id: @question.id}
  end

  private
  def update_params
    params.require(:question).permit(:appears, :conditions, :frequency, :priority, :que_text, :que_type, :required, :teaming_stages)
  end

  def get_resource
    @question = Question.find(params[:id])
  end

end
