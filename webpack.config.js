var webpack = require('webpack');

module.exports =  {
  //find this file and start from there
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    //where all this needs to happen
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    //files we want to process
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        //name of loader
        loader: 'babel-loader',
        query: { //parse the files through react
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/, //regex for .jsx extension
        exclude: /(node_modules|bower_components)/ //set up folders to be ignored
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
