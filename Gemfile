
source 'https://rubygems.org'
ruby "2.3.1"

gem 'sinatra'
gem 'rake', '~> 10.4', '>= 10.4.2'
gem 'rerun', '~> 0.11.0'
gem 'thin', '~> 1.7'
gem 'puma'
gem 'foreman'
gem 'newrelic_rpm'
configure :production do
  require 'newrelic_rpm'
end

github 'sinatra/sinatra' do
  gem 'sinatra-contrib'
end
