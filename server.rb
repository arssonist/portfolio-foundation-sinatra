
require 'sinatra'

get '/' do
  @my_email = "drumgod101@gmail.com"
  @my_github = "https://github.com/arssonist/"
  @my_twitter = "https://twitter.com/The_Seperator"
  @my_phone = "306-519-0138"
  @my_blog = "https://chrisdelwebdev.wordpress.com/"
  @my_city = "Toronto, ON"
  erb :index
end

get '/index' do
  erb :index
end

get '/contact' do
  erb :contact
end

get '/about' do
  erb :about
end

get '/project1' do
  erb :project1
end

get '/project2' do
  erb :project2
end
