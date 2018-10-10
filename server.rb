require 'sinatra'

require 'newrelic_rpm'

require 'sinatra/contrib'
configure { set :server, :puma }


# SITE GLOBAL CONSTANTS/////////////
$my_email = "drumgod101@gmail.com"
$my_github = "https://github.com/arssonist/"
$my_twitter = "https://twitter.com/The_Seperator"
$my_phone = "306-519-0138"
$my_blog = "https://chrisdelwebdev.wordpress.com/"
$my_city = "Toronto, ON"
$my_linkedin = "https://ca.linkedin.com/in/chrisdel1"

get '/' do
  erb :work
end

get '/work' do
  erb :work
end

get '/contact' do
  erb :contact
end
