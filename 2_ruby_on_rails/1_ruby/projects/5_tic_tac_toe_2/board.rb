class Board
  attr_reader :board
  WINNING_COMBOS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]

  def initialize
    @board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  end

  def display
    puts <<~HEREDOC

    #{board[0]} | #{board[1]} | #{board[2]}
    _   _   _

    #{board[3]} | #{board[4]} | #{board[5]}
    _   _   _

    #{board[6]} | #{board[7]} | #{board[8]}

    HEREDOC
  end

  def board_full?
    board.all?{|cells| cells =~ /[A-Z]/}
  end

  def check_location?(location)
    board[location.to_i-1] =~ /[A-Z]/ ? false : true
  end

  def update_board(location,player)
    player == "p1" ?  board[location.to_i-1] = "O" : board[location.to_i-1] = "X"
  end

  def check_result?
    WINNING_COMBOS.any? do | combo |
      [board[combo[0]], board[combo[1]], board[combo[2]]].uniq.length == 1
    end
  end

  def check_winning_row
    WINNING_COMBOS.each do |combo|
      if [board[combo[0]], board[combo[1]], board[combo[2]]].uniq.length == 1
        return board[combo[0]]
      end
    end
    nil
  end


  def empty_cells
    board.select {| cells | cells !~ /[A-Z]/ }
  end


end