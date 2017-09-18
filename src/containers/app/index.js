import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => {
	const rightSideAlign = { textAlign: 'right' }
	const verticalAlign = { verticalAlign: 'middle' }

	return (
		<div>
			<div className="mui-appbar">
				<div className="mui--appbar-height">
					<a href="#">Stellar Client</a>
					<div style={rightSideAlign}>
						<a href="/">Home</a>
						<a href="/about-us">About</a>
					</div>
				</div>
			</div>	
			<main>
				<Route exact path="/" component={Home} />
				<Route exact path="/about-us" component={About} />
			</main>
		</div>
	)
}

export default App