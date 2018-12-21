@cat_arr = ['React-101', 'Advanced React', 'ES 2015', 'ES6']
@correct_ans_arr = ['a', 'b', 'c', 'd']
@points_arr = ['100', '200', '300', '400', '500']

@cat_arr.each do |cat|
  c = Category.create(
    name: cat
  )
  5.times do
    c.cards.create(
      question: Faker::Hacker.say_something_smart,
      answer_a: Faker::Hacker.adjective,
      answer_b: Faker::Hacker.noun,
      answer_c: Faker::Hacker.verb,
      answer_d: Faker::Hacker.abbreviation,
      correct_answer: @correct_ans_arr.sample,
      points: @points_arr.sample  
      )
  end
end

puts 'seeded'