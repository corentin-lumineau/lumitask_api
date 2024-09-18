require 'rails_helper'

RSpec.describe Project, type: :model do

  before(:each) do
    project_1 = create(:project)
  end

  it "should persist a Project" do
    expect(Project.count).to eq(1)
  end

  describe 'validations' do
    it { should validate_presence_of(:title) }
  end


end