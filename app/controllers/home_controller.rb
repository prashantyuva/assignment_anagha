class HomeController < ApplicationController
  def index
    @questions = Question.includes(:mapping, :role).paginate(page: params[:page], per_page: 10)
  end

  def process_csv
    if request.post?
      begin
        ::CsvProcessor::Processor.new(params.require(:questions_csv)).process
      rescue => e
        flash[:alert] = "Failed: #{e.message}"
      end
    end
  end
end
