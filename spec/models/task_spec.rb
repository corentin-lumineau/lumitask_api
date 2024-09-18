require 'rails_helper'

RSpec.describe Task, type: :model do
  before(:each) do
    #task_1 = create(:task)
  end

  it "should persist a Task" do
    expect(Task.count).to eq(1)
  end

  describe 'validations' do
    it { should validate_presence_of(:title) }
  end
end
