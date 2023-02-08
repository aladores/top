def caesar_cipher(phrase,shiftNumber)
    modifiedPhrase = Array.new

    for i in 0..phrase.length-1
        base = phrase[i].ord < 91 ? 65 : 97
        if phrase[i].ord.between?(65, 90) || phrase[i].ord.between?(97, 122)
            modifiedPhrase.push((((phrase[i].ord - base ) + shiftNumber)  % 26) + base)
        else 
            modifiedPhrase.push(phrase[i])
        end
    end
    shiftedPhrase = modifiedPhrase.map {|letter| letter.chr}
    puts shiftedPhrase.join("")
end 

caesar_cipher("What a string!", 5)