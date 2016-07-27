var React = require('react');
//import the modules needed
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(location).then(function (temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function (e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });

  },
  componentDidMount: function() {
    {/*Collect the query param name and value from the url*/}
    var location = this.props.location.query.location;

    if(location &&  location.length >0) {
      this.handleSearch(location);
      {/*Reset query String */}
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    {/*Collect the query param name and value from the url*/}
    var location = newProps.location.query.location;
    if(location &&  location.length >0) {
      this.handleSearch(location);
      {/*Reset query String */}
      window.location.hash = '#/';
    }
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

    function renderError () {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
