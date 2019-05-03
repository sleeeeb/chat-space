include ActionDispatch::TestProcess
FactoryBot.define do
  factory :message do
    content {"hello!"}
    image { fixture_file_upload("spec/fixtures/img/sample.jpg", 'image/jpg') }
    user
    group
    created_at { Faker::Time.between(2.days.ago, Time.now, :all) }
  end
end
