require 'casa/outlet/app/app'

module CASA
  module Outlet
    module App
      class Local < App

        get '/' do
          redirect to '/index.html'
        end

      end
    end
  end
end