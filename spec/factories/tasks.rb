FactoryBot.define do
  factory :task do
    title { Faker::Commerce.brand }
    content { Faker::Quote.matz }
    association :project
  end
end
