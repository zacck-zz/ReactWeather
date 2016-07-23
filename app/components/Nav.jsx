var React = require('react');
//creates var called link equal Router.Link
var {Link, IndexLink} = require('react-router');


var Nav = (props) => {
  return(
    <div>
      {/*Add link to base Main page to specifies path according to routes in app.jsx*/}
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
}

module.exports = Nav;
