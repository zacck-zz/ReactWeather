var React = require('react');
//import the modules needed
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  //create a parent function
  handleSearch: function (location) {
    var that = this;

    //using axios to fetch data
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function (temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function (errorMessage){
      that.setState({
        isLoading: false,
      });
      alert(errorMessage);
    });

  },
  render: function () {
    var {isLoading,location,temp,errorMessage} = this.state;
    function renderMessage () {
      if(isLoading) {
        return <h3 className="text-center">Fetching Data</h3>;
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
