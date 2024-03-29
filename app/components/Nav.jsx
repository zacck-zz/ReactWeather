var React = require('react');
//creates var called link equal Router.Link
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    {/*Wire up search to the weather component*/}
    var location = this.refs.searchCityElement.value;
    {/*Validate Search term*/}
    if(location && location.length > 0) {
      var urlEncLocation = encodeURIComponent(location);
      this.refs.searchCityElement.value = '';
      window.location.hash = '#/?location='+ urlEncLocation;

    }
  },
  render: function(){
    return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            ZEE WEATHER
          </li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          </li>
          <li>
            <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          </li>
          <li>
            <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <form onSubmit={this.onSearch}>
        <ul className="menu">
          <li>
            <input type="search" placeholder="Search Weather by City" ref="searchCityElement"/>
          </li>
          <li>
            <input type="submit" className="button" value="Get Weather"/>
          </li>
        </ul>
        </form>
      </div>
    </div>
    );
  }
});
module.exports = Nav;
