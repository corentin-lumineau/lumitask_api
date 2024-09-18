FactoryBot.define do
  factory :project do
    title { Faker::Commerce.brand }
    content { Faker::Quote.matz }
  end
end