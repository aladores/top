def substrings(phrase,dictionary)
    subStrings = Hash.new(0)
    splitPhrase = phrase.split(" ")

    for i in 0..splitPhrase.length-1
        for x in 0..dictionary.length-1
            if splitPhrase[i].downcase.include?(dictionary[x])
                subStrings[dictionary[x]]+=1
            end
        end
    end 
    return subStrings
end

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

puts(substrings("Howdy partner", dictionary))

