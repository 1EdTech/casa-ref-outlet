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

## License

This software is **open-source** and licensed under the Apache 2 license.
The full text of the license may be found in the `LICENSE` file.

## Usage

### LTI Launch

To launch via LTI, send a `ContentItemSelectionRequest` to the route `/lti/launch`. Once the user navigates through the storefront and presses the "Add App" button, the user will be returned to the LTI consumer.

### App Dashboard

The path `/local` exposes a dashboard of apps that have been added to the device's local storage from the storefront.

## Setup

##### Requirements

* Ruby 2.x
* RubyGems
* Bundler

##### Clone Git Repository

This application may be cloned or downloaded from GitHub:

```
git clone https://github.com/IMSGlobal/casa-outlet.git
```

##### Install Gems

```
bundle install
```

To use a web server besides [Thin](http://code.macournoyer.com/thin/), you may use the `--without thin` flag.

##### Define OAuth Credentials for LTI (optional)

If using LTI, edit `oauth_creds` in `lib/outlet/ap/lti.rb`.

##### Configure the Engine

Open `www/blocks/blocks.js` and `www/blocks/blocks.min.js` and replace `http://localhost:9292` with the path to your CASA engine.

##### Run Web Server

A default start using SSL and port 443 and running in background mode:

```
bundle exec thin start --ssl -p 443 &
```

## Development

While one can change `Engine.Config` by hand in `www/blocks/blocks.js` and `www/blocks/blocks.min.js`, more invasive Javascript and CSS changes are most easily applied by editing the source files in `src` and then rebuilding the Javascript assets.

For modularity, the CASA outlet uses WebBlocks 2 for its build. See http://github.com/WebBlocks/WebBlocks for more details.

##### Requirements

* Ruby 2.x
* RubyGems
* Bundler
* Node.js
* NPM
* Java 1.4+

##### Install Gems

```
bundle install
```

To use a web server besides [Thin](http://code.macournoyer.com/thin/), you may use the `--without thin` flag.


##### Install Node Modules

```
npm install
```

##### Compile Javascript and CSS Assets

After making edits, such as to `src/config/engine.js` and `src/config/app.js`, you can recompile assets with:

```
bundle exec blocks build
```