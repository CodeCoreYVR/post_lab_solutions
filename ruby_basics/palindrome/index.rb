puts "Enter a test phrase/word and see if it's a palindrome"
phrase = gets.chomp
word = phrase.gsub(" ", "")

i = 0
isPalindrome = true
until i == word.length / 2
    isPalindrome = false if word[i] != word[word.length - 1 - i]
    i += 1
end

if isPalindrome
    puts "\"#{phrase}\" is a palindome"
else
    puts "\"#{phrase}\" is not a palindome"
end
