def most_common_letter(string)
    counter = Hash.new(0)
    string.gsub(/[^0-9a-z]/i, '').split("").each { |letter| counter[letter] += 1 }
    maximum = counter.values.reduce do |current_max, count|
        if count > current_max
            count
        else
            current_max
        end
    end
    common_letters = []
    counter.each do |letter, count|
        common_letters.push(letter) if count == maximum
    end
    "The most common letter(s) is/are #{common_letters.join(", ")} with #{maximum} occurences each."
end

puts "Find the most common letter in your string:"
p most_common_letter(gets.chomp)
