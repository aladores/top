def merge_sort(array)
  #base case
  return array if array.length < 2

  middle = array.length/2
  #sort left
  left_half = merge_sort(array[0...middle])

  #sort right 
  right_half = merge_sort(array[middle..array.length])

  #merge two halves
  sorted = []
  until left_half.empty? || right_half.empty?
    if left_half.first <= right_half.first
      sorted << left_half.shift
    else
      sorted << right_half.shift
    end
  end

  sorted + left_half + right_half
end

puts merge_sort([3, 4, 2, 1, 5])