class Api::V1::TasksController < ApplicationController
  def index
    tasks = Task.all

    render json: tasks
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy

    render json: { id: task.id }
  end
end