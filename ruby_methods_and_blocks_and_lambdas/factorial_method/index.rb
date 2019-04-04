def factorial(number)
  [*1..number].reduce(1) {|total,num| num*total }
end
