#stock_picker([17,3,6,9,15,8,6,1,10])
#>[1,4]


input = [17,3,6,9,15,8,6,1,10]
#       [17,3,6,9,15,8,6,1,10]

def stock_picker(dayBuyPrices)
    daySellPrices = dayBuyPrices
    highestProfit = 0
    profit= {}
    dayBuyPrices.each_with_index do | buyPrice,buyDay|
        daySellPrices.each_with_index do | sellPrice, sellDay|
            #stock was bought first and then sold
            if buyDay < sellDay 
                profit[sellPrice - buyPrice] = "#{buyDay},#{sellDay}"
            end
        end
    end
    highestProfit = profit.max_by{|k,v|k}.last
    puts highestProfit
end

stock_picker(input)