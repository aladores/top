class Board
  attr_reader :board

  WINNING_COMBOS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ].freeze

  def initialize
    @board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  end

  def display
    puts <<~HEREDOC

      #{board[0]} | #{board[1]} | #{board[2]}
      -   -   -
      #{board[3]} | #{board[4]} | #{board[5]}
      -   -   -
      #{board[6]} | #{board[7]} | #{board[8]}

    HEREDOC
  end

  def valid_location?(location)
    board[location.to_i - 1] == 'O'
  end

  def available_spaces
    spaces = board.select { |cell| cell.is_a? Numeric }
  end

  def update_board(location,user)
    if user == 'player'
      board[location - 1] = 'O'
    else 
      board[location - 1] = 'X'
    end
  end

  def board_full?
    board.all? { |cells| cells =~ /[A-Z]/ }
  end

  def check_result?
    WINNING_COMBOS.any? do |combo|
      [board[combo[0]], board[combo[1]], board[combo[2]]].uniq.length == 1
    end
  end
end
