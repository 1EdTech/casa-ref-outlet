require 'sinatra/base'

module CASA
  module Outlet
    module App
      class App < Sinatra::Base

        set :protection, :except => :frame_options

      end
    end
  end
end