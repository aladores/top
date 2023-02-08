require 'csv'
require 'google/apis/civicinfo_v2'
require 'erb'
require 'date'


def clean_zipcode(zipcode)
  zipcode.to_s.rjust(5, '0')[0..4]
end 

def clean_phone(phone)
  phone.gsub!(/[^\d]/,'')

  #less than 10 digits, assume that it is a bad number
  #more than 11 digits, assume that it is a bad number
  #is 11 digits and the first number is not 1, then it is a bad number
  if phone.length < 10 || phone.length > 11 || (phone.length == 11 && phone[0] != '1')
    "Incorrect format"
  #is 11 digits and the first number is 1, trim the 1 and use the remaining 10 digits
  elsif phone.length == 11 && phone[0] == '1'
    phone[1..10]
  #If the phone number is 10 digits, assume that it is good
  else
    phone
  end
end

def get_date(regdate,hours,weekdays)
  date = DateTime.strptime(regdate,"%m/%d/%y %H:%M")
  hours.push(date.hour)
  weekdays.push(date.wday)
  date
end

def most_common_hour(hours_array)
  common_hour = hours_array.max_by{|i| hours_array.count(i)}
end

def most_common_weekday(weekdays_array)
  common_weekday = weekdays_array.max_by{|i| weekdays_array.count(i)}
end

def convert_weekday(weekday)
  case weekday
  when 0
    "Sunday"
  when 1
    "Monday"
  when 2
    "Tuesday"
  when 3
    "Wednesday"
  when 4
    "Thursday"
  when 5
    "Friday"
  else 
    "Saturday"
  end
end

def legislators_by_zipcode(zip)
  civic_info = Google::Apis::CivicinfoV2::CivicInfoService.new
  civic_info.key = 'AIzaSyClRzDqDh5MsXwnCWi0kOiiBivP6JsSyBw'

  begin
    legislators = civic_info.representative_info_by_address(
      address: zip,
      levels: 'country',
      roles: ['legislatorUpperBody', 'legislatorLowerBody']
    ).officials
  rescue
    'You can find your representatives by visiting www.commoncause.org/take-action/find-elected-officials'
  end
end

def save_thank_you_letter(id,form_letter)
  Dir.mkdir('output') unless Dir.exist?('output')

  filename = "output/thanks_#{id}.html"

  File.open(filename, 'w') do |file|
    file.puts form_letter
  end
end 


puts 'Event Manager Initialized!'

contents = CSV.open(
  'event_attendees.csv', 
  headers: true,
  header_converters: :symbol
)

template_letter = File.read('form_letter.erb')
erb_template = ERB.new template_letter
hours = Array.new
weekdays = Array.new

contents.each do |row|
  id = row[0]
  name = row[:first_name]
  zipcode = clean_zipcode(row[:zipcode])
  legislators = legislators_by_zipcode(zipcode)
  phone = clean_phone(row[:homephone])
  regdate = get_date(row[:regdate],hours,weekdays)
  form_letter = erb_template.result(binding)

  save_thank_you_letter(id,form_letter)
end

common_hour = most_common_hour(hours)
common_weekday = convert_weekday(most_common_weekday(weekdays))

puts "The most common hour of registration is #{common_hour}."
puts "The most common weekday of registration is #{common_weekday}."