class Node
  attr_reader :value
  attr_accessor :next_ptr
  
  def initialize(value)
    @value = value
    @next_ptr = nil
 end

end