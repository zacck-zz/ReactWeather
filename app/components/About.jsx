var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to the about page</p>
      <p>This is just a small sample application to get the hang of react</p>
      <p>Tools Used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - This is the api used to source the weather information
        </li>
      </ul>
    </div>
  );
}
module.exports = About;
