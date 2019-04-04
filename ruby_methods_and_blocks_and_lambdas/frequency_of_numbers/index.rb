array = [1, 2, 3, 4, 4, 4, 2, 3, 3, 3];

def frequency_of_numbers(arr)
    arr.each_with_object({}) {|i,a| a[i] = arr.count(i)};
end
=> {1=>1, 2=>2, 3=>4, 4=>3}
