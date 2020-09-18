require 'sinatra'
require 'sinatra/contrib'

configure { set :server, :puma }

# SITE GLOBAL CONSTANTS/////////////
$my_email = 'drumgod101@gmail.com'
$my_github = 'https://github.com/arssonist/'
$my_twitter = 'https://twitter.com/The_Seperator'
$my_phone = '306-519-0138'
$my_blog = 'https://chrisdelwebdev.wordpress.com/'
$my_city = 'Toronto, ON'
$my_linkedin = 'https://ca.linkedin.com/in/chrisdel1'

get '/' do
 erb :index
end

get '/work' do
 erb :work
end

get '/contact' do
 erb :contact
end
#
# post '/contact' do
#  name = params[:name]
#  email = params[:email]
#  message = params[:message]
#  puts(ENV['MAIL_SERVER'])
#
#
#  Pony.mail({
#    :to => 'arssonist@yahoo.com',
#    :via => :smtp,
#    :via_options => {
#      :address        => 'smtp.gmail.com',
#      :port           => '587',
#      :ssl => true,
#      :user_name      => 'mote2zart@gmail.com',
#      :password       => 'udykkvxnfuwvuxoz',
#      :authentication => :plain, # :plain, :login, :cram_md5, no auth by default
#      :domain         => "localhost.localdomain" # the HELO domain provided by the client to the server
#    }
#
#  })
#  puts('after')
#
#
#  return redirect '/'
# end
