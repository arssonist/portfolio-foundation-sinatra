require 'sinatra'
require 'sinatra/contrib'


# SITE GLOBAL CONSTANTS/////////////
$my_email = "drumgod101@gmail.com"
$my_github = "https://github.com/arssonist/"
$my_twitter = "https://twitter.com/The_Seperator"
$my_phone = "306-519-0138"
$my_blog = "https://chrisdelwebdev.wordpress.com/"
$my_city = "Toronto, ON"

get '/' do
  erb :index
end

get '/index' do
  'hello world'
end

get '/contact' do
  erb :contact
end

get '/about' do
  erb :about
end

get '/work' do
  erb :work
end

get '/blog' do
  erb :blog
end

get '/blog2' do
  erb :blog2
end
