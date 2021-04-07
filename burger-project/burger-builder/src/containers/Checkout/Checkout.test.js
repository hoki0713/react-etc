import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Checkout } from './Checkout'

configure({adapter: new Adapter()})

describe('<Checkout />', () => {
  let wrapper

  let props = {
    match: {
      url: 'some-url'
    }
  }

  beforeEach(() => {
    wrapper = shallow(<Checkout {...props} />)
  })

  it('should return <CheckoutSummary /> when it has ings', () => {
    wrapper.setProps({ings: {salad: 0}})

    expect(wrapper.find(CheckoutSummary)).toHaveLength(1)
  })
  
})