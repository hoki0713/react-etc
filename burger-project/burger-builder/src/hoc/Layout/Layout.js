import React, { useState } from 'react'
import { connect } from 'react-redux'

import Aux from '../Au_/Au_'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Layout = props => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)

	const sideDrawerClosedHandler = () => {
		setSideDrawerIsVisible(false)
	}

	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible((prevState) => {
			return !prevState.showSideDrawer
		})
	}

		return (
			<Aux>
				<Toolbar 
					drawerToggleClicked={sideDrawerToggleHandler} 
					isAuth={props.isAuthenticated}
				/>
				<SideDrawer 
					open={sideDrawerIsVisible} 
					closed={sideDrawerClosedHandler}
					isAuth={props.isAuthenticated}
				/>
				<main className={classes.Content}>{props.children}</main>
			</Aux>
		)
	}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	}
}

export default connect(mapStateToProps)(Layout)
