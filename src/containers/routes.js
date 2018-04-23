/**
*	Super basic route setup that lets you have separate containers for your
* application and site.
**/
import React from "react";
import {Router, Route, IndexRoute} from "react-router";

// Marketing site
import SiteContainer from "./SiteContainer";
import Homepage from '/components/Site/Homepage/Homepage';
import Docs from '/components/Site/Docs/Docs';

// Application
import AppContainer from "./AppContainer";
import MainScreen from '/components/App/MainScreen/MainScreen';
import LogIn from '/components/App/LogIn/LogIn';
import MessageList from '/components/App/MessageList/MessageList';
import SignUp from '/components/App/SignUp/SignUp';
import Settings from '/components/App/Settings/Settings';

module.exports = (
	<Router>
		{/*Marketing site*/}
		<Route path="/" component={SiteContainer}>
			<IndexRoute component={Homepage} />
			<Route path="docs" component={Docs} />
		</Route>

		{/*Application*/}
		<Route path="/app" component={AppContainer}>
			<IndexRoute component={MessageList} />
			<Route path="messages" component={MessageList} />
			<Route path="messages/:message" component={MessageList} />
			<Route path="login" component={LogIn} />
			<Route path="signup" component={SignUp} />
			<Route path="welcome" component={MessageList} />
			<Route path="settings" component={Settings} />
		</Route>
	</Router>
);
