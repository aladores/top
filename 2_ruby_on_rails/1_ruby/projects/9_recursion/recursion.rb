def fibs(number_of_times)
  i = 0
  fib_array = []
  until i == number_of_times
    if i == 0 || i == 1
      fib_array << i
    else
      fib_value = fib_array[i-1]+fib_array[i-2]
      fib_array << fib_value
    end
    i+=1
  end
  puts fib_array
end

def fibs_rec(num)
  #base case
  return [0, 1] if num <= 2

  seq = fibs_rec(num - 1)
  seq << seq[-2] + seq[-1]
  return seq
end


puts fibs_rec(8)