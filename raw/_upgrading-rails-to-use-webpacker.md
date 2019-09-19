# Upgrading a Rails app to use Webpacker instead of Sprockets for JavaScript Assets

Rails 5 by default did not use Webpacker (the Rails wrapper around Webpack) as the default JavaScript module bundler. Rather, it continued to use Sprockets.

A new Rails 6 project by default now uses Webpacker however upgrading an existing app needs the following steps:
  1. Upgrade to Rails 6 by following [the guide](https://guides.rubyonrails.org/upgrading_ruby_on_rails.html).
  2. Gemfile changes: Remove uglifier and add webpacker, `gem 'webpacker', '~> 4.0'` and `bundle install`
  3. Install the yarn package manager by following https://yarnpkg.com/lang/en/docs/install/
  4. Run `bundle exec rails webpacker:install`
  5. Add `<%= javascript_pack_tag 'application' %>` to your layout file, which will import the application pack. You can keep `<%= javascript_include_tag 'application' %>` in there as well if you want to use the asset pipeline in conjunction with webpacker but if you're taking these steps you likely are aiming to move everything to webpacker. So remove that line.
  6. Add the following to your package.json in your root directory. Change to suit your project.
        ```
        {
          "name": "myproject",
          "private": true,
          "dependencies": {
            "@rails/webpacker": "^4.0.7",
            "@rails/ujs": "^6.0.0-alpha",
            "turbolinks": "^5.2.0",
            "@rails/activestorage": "^6.0.0-alpha",
            "@rails/actioncable": "^6.0.0-alpha"
          },
          "devDependencies": {
            "webpack-dev-server": "^3.8.1"
          }
        }
        ```
  7. Run `yarn install --check-files`
  8. Add the following to your application pack app/javascript/packs/application.js
        ```
        require("@rails/ujs").start()
        require("turbolinks").start()
        require("@rails/activestorage").start()
        ```
  9. Start your server and watch your logs to ensure all compilation was successful.
