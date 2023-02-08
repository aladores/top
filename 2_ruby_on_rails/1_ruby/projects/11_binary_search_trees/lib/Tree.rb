class Tree
  attr_accessor :root, :data

  def initialize(array)
    @data = array.sort.uniq
    @root = build_tree(@data)
  end

  def build_tree(array)
    return nil if array.empty?

    middle = (array.size - 1)/2
    root_node = Node.new(array[middle]) 
  
    root_node.left = build_tree(array[0...middle])
    root_node.right = build_tree(array[(middle + 1)..-1])

    root_node
  end

  def insert(value,node = root)
    return puts "Value inserted already exist" if node == value
    
    if value < node.data
      node.left.nil? ? node.left = Node.new(value) : insert(value,node.left)
    elsif value > node.data
      node.right.nil? ? node.right = Node.new(value) : insert(value,node.right)
    end
  end

  def delete(value,node =  root)
    return node if node.nil?

    if value < node.data
      node.left = delete(value, node.left)
    elsif value > node.data
      node.right = delete(value, node.right)
    else
      return node.right if node.left.nil?
      return node.left if node.right.nil?
      
      most_left_node = find_most_left(node.right)
      node.data = most_left_node.data
      node.right = delete(most_left_node.data,node.right)
    end
    node
  end

  def find(value,curr_node = root)
    return curr_node if curr_node.nil? || curr_node.data == value
    value < curr_node.data ? find(value,curr_node.left) : find(value,curr_node.right)
  end


  def level_order
    levels = [@root]
    result = []
    until levels.empty?
      curr_node = levels.shift
      block_given? ? yield(curr_node) : result.push(curr_node.data)
      levels << curr_node.left unless  curr_node.left.nil?
      levels << curr_node.right unless curr_node.right.nil?
    end
    result unless block_given?
  end

  def inorder(curr_node = root)
    return if curr_node.nil?

    #left, root, right
    inorder(curr_node.left)
    puts "#{curr_node.data}"
    inorder(curr_node.right)

  end

  def pre_order(curr_node = root)
    return if curr_node.nil?

    #root, left, right
    puts "#{curr_node.data}"
    pre_order(curr_node.left)
    pre_order(curr_node.right)
  end

  def post_order(curr_node = root)
    return if curr_node.nil?

    #left, right, root
    inorder(curr_node.left)
    inorder(curr_node.right) 
    puts "#{curr_node.data}"
  end

  def height(curr_node = @root, count =-1)
    return count if curr_node.nil?

    count +=1
    [height(curr_node.left,count), height(curr_node.right,count)].max
  end

  def depth(node)
    return if node.nil?

    curr_node =@root
    count=0

    until curr_node.data == node.data
      count+=1
      curr_node = curr_node.left if node.data < curr_node.data
      curr_node = curr_node.right if node.data > curr_node.data
    end
    count
  end

  def balanced?
    left_height = height(@root.left)
    right_height = height(@root.right)

    (left_height-right_height).between?(-1,1)
  end

  def rebalance
    data = inorder_array
    @root = build_tree(data)
  end

  def find_most_left (node)
    node = node.left  until node.left.nil?
    node 
  end

  def inorder_array(node = root, array = [])
    unless node.nil?
      inorder_array(node.left, array)
      array << node.data
      inorder_array(node.right, array)
    end
    array
  end

  def pretty_print(node = @root, prefix = '', is_left = true)
    pretty_print(node.right, "#{prefix}#{is_left ? '│   ' : '    '}", false) if node.right
    puts "#{prefix}#{is_left ? '└── ' : '┌── '}#{node.data}"
    pretty_print(node.left, "#{prefix}#{is_left ? '    ' : '│   '}", true) if node.left
  end
  
end