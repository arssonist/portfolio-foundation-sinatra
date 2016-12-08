
require 'sinatra'

get '/' do
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
