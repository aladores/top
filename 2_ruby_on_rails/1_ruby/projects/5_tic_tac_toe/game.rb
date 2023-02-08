class Game
  attr_reader :player_one, :board

  def initialize
    @board = Board.new
    @player_one = Player.new('p1')
  end

  def play
    board.display
    player_turn
  end

  def player_turn
    until board.board_full? || board.check_result?
      puts 'Select a location: '
      location = gets.chomp
      check_location(location) ? board.update_board(location.to_i,"player") : (puts 'Invalid input')
      cpu_turn
      board.display
    end
  end
  
  def cpu_turn
    cpu_spaces = board.available_spaces
    cpu_location = cpu_spaces.sample
    puts "CPU picked: #{cpu_location}"
    board.update_board(cpu_location,"cpu") 
  end

  def check_location(location)
    true unless location.empty? || location.length > 1 || location !~ /[1-9]/ || board.valid_location?(location)
  end
end
