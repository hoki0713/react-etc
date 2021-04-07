import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Spinner from '../../components/UI/Spinner/Spinner'
import Order from '../../components/Order/Order'
import { Orders } from './Orders'

configure({adapter: new Adapter()})

describe('<Orders />', () => {
  let wrapper

  let props = {
    loading: true,
    orders: [],
    onFetchOrders: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<Orders {...props}/>)
  })

  it('should render <Spinner /> before orders is fetched', () => {
    expect(wrapper.find(Spinner)).toHaveLength(1)
    expect(props.onFetchOrders).toBeCalled()
  })

  it('should render <Order /> when orders is fetched', () => {
    wrapper.setProps({loading: false, orders: [{id: 'some-id', ingredients: 'some-ings', price: 'some-price'}]})
  
    expect(wrapper.find(Order)).toHaveLength(1)
  })
})