# CASA Outlet

The [Community App Sharing Architecture (CASA)](http://imsglobal.github.io/casa) provides a mechanism for
discovering and sharing metadata about web resources such as websites, mobile
apps and LTI tools. It models real-world decision-making through extensible
attributes, filter and transform operations, flexible peering relationships,
etc.

This Javascript application is part of the CASA reference implementation. It
is an outlet that implements the CASA Local Module interface. Out of the box,
it supports the LTI ContentItemSelectionRequest as an integration method when
run with rack, but its adapter-based architecture also allows for other
integrations.

## Setup

This application may be cloned or downloaded from GitHub:

```
git clone https://github.com/IMSGlobal/casa-outlet.git
```

### Deployment Environment

This application requires:

* Ruby 1.9 or above
* RubyGems
* Bundler

Before deploying,

1. install dependencies by calling `bundle install`;
2. if using LTI, edit `oauth_creds` in `lib/outlet/ap/lti.rb`; and
3. find `Engine.Config` in `www/blocks/blocks.js` and `www/blocks/blocks.min.js` and replace `http://localhost:9292` with the path to the CASA engine.

Once this is done, launch the engine via [Rack](http://rack.github.io/):

```
bundle exec rack
```

To define a port besides `9292`, use the `-p` argument:

```
bundle exec rack -p 80
```

### Development Environment

While one can change `Engine.Config` by hand in `www/blocks/blocks.js` and `www/blocks/blocks.min.js`, more invasive Javascript and CSS changes are most easily applied by editing the source files in `src` and then rebuilding the Javascript assets.

For modularity, the CASA outlet uses WebBlocks 2 for its build. See http://github.com/WebBlocks/WebBlocks for more details.

When using the build tools, edit `src/config/engine.js` and `src/config/app.js` to reflect those changes after the build.

## Usage

### LTI Launch

To launch via LTI, send a `ContentItemSelectionRequest` to the route `/lti/launch`. Once the user navigates through the storefront and presses the "Add App" button, the user will be returned to the LTI consumer.

### App Dashboard

The path `/local` exposes a dashboard of apps that have been added to the device's local storage from the storefront.

## License

This software is **open-source** and licensed under the Apache 2 license.
The full text of the license may be found in the `LICENSE` file.