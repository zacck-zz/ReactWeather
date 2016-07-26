var React = require('react');

var WeatherForm = React.createClass({
  /*New function for submitting*/
  onFormSubmit: function (submitEvent) {
    submitEvent.preventDefault();
    //call the parent function
    var location = this.refs.cityElement.value;

    //validate data
    if(location.length > 0) {
      //clear input
      this.refs.cityElement.value = '';
      //call the parent function
      this.props.onSearch(location);
    }
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="search" placeholder="Search Weather by City" ref="cityElement"/>
          </div>
          <div>
            <button className="button expanded hollow">Get Weather</button>
          </div>
      </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
