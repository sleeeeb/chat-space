FactoryBot.define do
  factory :message do
    text {"hello!"}
    image {"hoge.png"}
    user
    created_at { Faker::Time.between(2.days.ago, Time.now, :all) }
  end
end
