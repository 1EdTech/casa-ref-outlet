require 'sinatra/base'

module CASA
  module Outlet
    module App
      class Apps < Sinatra::Base

        get '/' do
          redirect to '/index.html'
        end

      end
    end
  end
end