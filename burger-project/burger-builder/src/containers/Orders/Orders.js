import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'

export const Orders = props => {

	const { onFetchOrders, token, userId, loading, orders } = props

	useEffect(() => {
		onFetchOrders(token, userId)
	}, [onFetchOrders, token, userId])

	let orderList = <Spinner />
	if (!loading) {
		orderList = orders.map((order) => (
			<Order key={order.id} ingredients={order.ingredients} price={+order.price} />
		))
	}

	return (
			<div>
			{orderList}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		orders: state.order.orders,
		loading: state.order.loading,
		token: state.auth.token,
		userId: state.auth.userId
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))
