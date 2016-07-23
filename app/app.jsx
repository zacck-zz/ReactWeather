//import react
var React = require('react');
var ReactDOM = require('react-dom');

//ES6 Destructuting syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//add components
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

/*This below is object Destructuting
var obj = {
  name: 'Zacck'
}

var {name} = obj; //creates a new variable called name and sets it to obj.name
*/

//Create our Router

ReactDOM.render(    //pass two args, JSX and the app element
  <Router history={hashHistory}>
    {/*Main component will always be rendered*/}
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      {/*Render main component children*/}
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app') //where to render
);
