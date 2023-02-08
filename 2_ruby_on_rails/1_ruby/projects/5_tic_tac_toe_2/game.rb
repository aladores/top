
class Game
  attr_reader :board
  def initialize
    @board = Board.new
    @player = Player.new('p1')
  end
  
  def start_game
    board.display

    until board.board_full? || board.check_result?
      player_turn
      cpu_turn
      board.display
    end

    if board.board_full?
      puts "Tie Game!"
    end

    if board.check_winning_row == "O"
      puts "Player won!"
    else 
      puts "CPU won!"
    end
  end

  def player_turn
    player_went = false

    until player_went
      print "Select a location: "
      location = gets
      if board.check_location?(location) && check_input?(location)
        board.update_board(location,"p1")
        player_went = true
      else 
        puts"Invalid location please try again."
      end
    end
  end

  def cpu_turn
    empty_cells = board.empty_cells
    board.update_board(empty_cells.sample,"cpu")
  end

  def check_input?(location)
    location =~ /[1-9]/  || location.length == 1 ? true : false
  end 

end