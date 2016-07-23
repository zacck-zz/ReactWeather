var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      {/*render children here*/}
      {props.children}
    </div>
  );
}

module.exports = Main;
