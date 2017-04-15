require './server'
run Sinatra::Application
require 'newrelic_rpm'
NewRelic::Agent.manual_start
