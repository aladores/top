require_relative 'knight'

class Board

  def knight_moves(start,destination)
    current = make_tree(start,destination)
    history= []
    #make_history(current,history,start)
    #print_knight_moves(history,start,destination)
  end 

  def make_tree(start,destination)
    queue = [Knight.new(start)]
    current = queue.shift
    until current.position == destination
      current.next_move.each do |move|
        current.children<< knight = Knight.new(move,current)
        queue << knight
      end
 
      current = queue.shift
    end
    p current.position
    current
  end

end 