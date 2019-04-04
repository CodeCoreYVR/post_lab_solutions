visited_cities = [];
user_info = Hash.new;
puts "What is your first name?"
user_info["First Name"] = gets.chomp;

puts "What is your last name?"
user_info["Last Name"] = gets.chomp;

puts "How old are you?"
user_info["age"] = gets.chomp;

puts "What cities have you visited? (enter 'done' when finished)"
while city = gets.chomp
    break if city == "done"
    user_info["Visited Cities"] = visited_cities.push(city).join(', ');
end

user_info.each do |key,value|
    puts "Your #{key} is #{value}"
end
