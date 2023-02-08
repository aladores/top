module Database

  def create_save 
    user_went = false
    until user_went 
      print "Enter save file name: "
      input_filename = gets.chomp

      if input_filename == nil || input_filename == ""
        puts "Invalid input"
      elsif save_exists?(input_filename)
        puts "Save file name already exists"
      else
        save_game(input_filename)
        user_went =true
      end
    end
  end

  def save_exists?(input_filename)
    get_save_files.include?("#{input_filename}_hg.yaml")
  end


  def select_save_file
    clear_screen
    puts "Save files"
    puts
    display_save_files
    user_went = false
      until user_went
        print "Select save file #: "
        input_file = gets.chomp
        
        if input_file =~ /[1-99]/ 
          @selected_game = get_save_files[input_file.to_i - 1] 
          load_file
          start_game
          user_went =true
        else
          puts "Invalid input"
        end
      end
  end
  
  def display_save_files  
    get_save_files.each_with_index do |name, index|
      puts "#{index+1}. #{name}"
    end
  end

  def get_save_files
    files = []
    Dir.entries('save_files').each do |name|
      files << name if name.include?('hg')
    end
    files
  end

  def save_game(input_filename)
    Dir.mkdir('save_files') unless Dir.exist?('save_files')
    filename = "save_files/#{input_filename}_hg.yaml"

    File.open(filename, 'w') do |file|
      file.write save_to_yaml if filename.include?('hg')
    end
  end

  def save_to_yaml
    YAML.dump(
      'secret_word' => @secret_word,
      'clue_word' => @clue_word, 
      'guessed_letters' => @guessed_letters, 
      'remaining_guesses' => @remaining_guesses
    )
  end

  def load_file
    file = YAML.safe_load(File.read("save_files/#{@selected_game}"))
    @secret_word = file['secret_word']
    @clue_word = file['clue_word']
    @guessed_letters  = file['guessed_letters'] 
    @remaining_guesses = file['remaining_guesses']
    @save_state = false
  rescue StandardError
    puts "Loading Error"
  end

  def clear_screen
    puts "\e[H\e[2J"
  end


end