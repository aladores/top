# frozen_string_literal: true

def bubble_sort(array)
  sorted = false
  until sorted
    sorted = true
    array.each_with_index do |_, i|
      next if i == array.size - 1

      if array[i] > array[i + 1]
        array[i], array[i + 1] = array[i + 1], array[i]
        sorted = false
      end
    end
  end
  puts array
end

bubble_sort([4, 3, 78, 2, 0, 2])
