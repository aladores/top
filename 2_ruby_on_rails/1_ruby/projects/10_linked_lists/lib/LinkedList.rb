require_relative './Node'

class LinkedList
  attr_reader :head
  def initialize
     @head = nil
  end

  def append(value)
    new_node = Node.new(value)
    return @head = new_node if @head.nil?

    tail.next_ptr = new_node
  end

  def prepend(value)
    new_node = Node.new(value)
    return @head = new_node if @head.nil?

    cur_node = new_node
    cur_node.next_ptr = @head
    @head = cur_node
  end
  
  def size
    return 0 if @head.nil?

    count = 1
    cur_node = @head
    until cur_node.next_ptr.nil?
      cur_node = cur_node.next_ptr
      count +=1
    end
    count
  end

  def head
    @head
  end

  def tail
    last = @head
    until last.next_ptr.nil?
      last = last.next_ptr
    end
    last
  end

  def at(index)
    return puts "Index does not exist" if size < index

    cur_node = @head
    count = 0
    until count == index
      cur_node = cur_node.next_ptr
      count +=1
    end
    #puts "Index ##{index} value: #{cur_node.value} "
    cur_node
  end

  def pop
    return puts "List is empty" if @head.nil?

    cur_node = @head
    until cur_node.next_ptr.next_ptr.nil?
      cur_node = cur_node.next_ptr
    end
    cur_node.next_ptr = nil
  end 

  def contains?(value)
    cur_node = @head
    while (cur_node = cur_node.next_ptr)
      return true if cur_node.value == value
    end
    false
  end

  def find(value)
    return puts "List is empty" if @head.nil?
    cur_node = @head
    while (cur_node = cur_node.next_ptr)
      return cur_node.value if cur_node.value == value
    end
    false
  end

  def insert_at(value,index)
    new_node = Node.new(value)
    return prepend(value) if index == 0
    return append(value) if index == size
    return puts "Index does not exist" if index > size
    return @head = new_node if @head.nil?


    prev_node = at(index-1)
    next_node = at(index)
    prev_node.next_ptr = new_node   
    new_node.next_ptr = next_node


  end

  def remove_at(index)
    return pop if index == 0
    return puts "Index does not exist" if index > size

    remove_node = at(index)
    puts remove_node.value
    prev_node = at(index-1)
    prev_node.next_ptr = remove_node.next_ptr
    remove_node.next_ptr = nil
  end

  def to_s
    string = ""
    last = @head
    until last.nil?
      string += "( #{last.value} ) ->"
      last = last.next_ptr
    end
    string += " nil"
    puts string
  end
 
end