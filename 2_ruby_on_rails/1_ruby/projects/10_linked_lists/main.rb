require_relative 'lib/LinkedList'
require_relative 'lib/node'

test = LinkedList.new
test.append('test1')
test.append('test2')
test.prepend('test00')
puts test.at(2)

puts test.contains?('test2')
puts test.find('test3')



test.insert_at('test_insert',1)
test.to_s
test.remove_at(1)
test.to_s
