require 'pathname'
require 'casa/outlet/app/apps'
require 'casa/outlet/app/lti'
require 'casa/outlet/app/local'

ENABLE_LTI = true
ENABLE_LOCAL = true

BASE_PATH = Pathname.new(__FILE__).parent

routes = { }

CASA::Outlet::App::Apps.set :public_folder, BASE_PATH + 'www'
routes['/apps'] = CASA::Outlet::App::Apps

if ENABLE_LTI
  CASA::Outlet::App::Lti.set :static, true
  CASA::Outlet::App::Lti.set :views, BASE_PATH + 'module/lti/views'
  routes['/lti'] = CASA::Outlet::App::Lti
end

if ENABLE_LOCAL
  CASA::Outlet::App::Local.set :static, true
  CASA::Outlet::App::Local.set :views, BASE_PATH + 'module/local/views'
  CASA::Outlet::App::Local.set :public_folder, BASE_PATH + 'module/local/www'
  routes['/local'] = CASA::Outlet::App::Local
end

run Rack::URLMap.new(routes)