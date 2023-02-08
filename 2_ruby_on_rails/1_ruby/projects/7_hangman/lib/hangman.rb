require_relative 'database'
require 'yaml'

class Hangman
  include Database

  attr_accessor :secret_word, :clue_word, :guessed_letters, :remaining_guesses, :save_state
  def initialize
    @secret_word = generate_secret_word
    @clue_word = ""
    @secret_word.length.times {@clue_word << '_'}
    @guessed_letters = Array.new
    @remaining_guesses = @secret_word.length + 2
    @save_state = false
  end

  def main_menu
    clear_screen
    player_selected = false
    puts "Hangman"
    puts "1) Start a new game"
    puts "2) Load a game"
    
    until player_selected
      print "Select your option: "
      option = gets.chomp
      if option == "1"
        player_selected = true
        start_game
      elsif option == "2"
        player_selected = true
        select_save_file
      else
        puts "Invalid option"
      end
    end
  end

  def generate_secret_word
    words = File.readlines('google-10000-english-no-swears.txt')
    word_list = words.select{|word| word.strip.length.between?(5, 12)}
    word_list.sample.strip
  end

  def display_word
    puts "#{@clue_word}"
  end

  def display_guessed_letters
    puts "Guessed letters: #{@guessed_letters.join(',')}"
  end

  def display_remaining_guesses
    puts "Remaining guesses: #{@remaining_guesses}"
  end

  def player_turn
    player_went = false
      until player_went 
        
        print "Select a letter or type save: "
        letter = gets.chomp
        clear_screen
        if letter.length == 1 && letter =~ /[A-Za-z]/ && !@guessed_letters.include?(letter)
          player_went = true
          @guessed_letters.push(letter)
          @remaining_guesses -= 1
          return letter
        elsif letter.downcase == "save"
          @save_state = true
          player_went = true
          return letter
        elsif @guessed_letters.include?(letter)
          puts "Already guessed #{letter}!"
        else
          puts "Invalid input"
        end
      end
  end

  def check_guess(letter)
    if @secret_word.include?(letter)
      update_clue(letter)
    elsif letter == "save"
      return 
    else
      puts "No #{letter}'s!"
    end
  end

  def update_clue(letter)
    @secret_word.split('').each_with_index do |secret_letter,i|
      @clue_word[i] = letter if secret_letter == letter
    end
  end

  def word_guessed?
    if @secret_word == @clue_word
      puts "You guessed the correct word!"
      return true
    end
  end
  
  def out_of_guesses?
    if @remaining_guesses == 0
      puts "Out of guesses!"
      return true
    end
  end

  def player_saved?
    if @save_state == true
      create_save
      clear_screen
      puts "Saved"
      return true
    end
  end

  def clear_screen
    puts "\e[H\e[2J"
  end

  def start_game
    clear_screen
    puts "Selected word: #{@secret_word}"
    display_remaining_guesses
    display_word
    
    until word_guessed? || out_of_guesses? || player_saved?
      guessed_letter = player_turn
      check_guess(guessed_letter.downcase)
      display_guessed_letters
      display_remaining_guesses
      puts
      display_word
    end  
  end
end

