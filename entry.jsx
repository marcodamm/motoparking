var React = require("react");
var ReactDOM = require("react-dom");
var routes = require("./routes");

var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var createBrowserHistory = require("history/lib/createBrowserHistory");

var moment = require("moment");
var analytics = require("./utils/analytics");

require("normalize.css/normalize.css");
require("styles/style.css");

window.React = React; // For chrome dev tool support

moment.locale("ru");

var history = createBrowserHistory();

var flux = require("./fluxy");

function onUpdate() {
  analytics.pageView(window.location.pathname);
}

onUpdate();

function createElement(Component, props) {
  return <Component {...props} flux={flux} />;
}

ReactDOM.render(
  <Router history={ history } createElement={ createElement } onUpdate={ onUpdate }>{ routes }</Router>,
  document.getElementById('content')
);
