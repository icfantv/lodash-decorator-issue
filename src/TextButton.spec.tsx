import * as React from 'react'
import { create } from 'react-test-renderer'

import { TextButton } from './TextButton'

describe('the <TextButton/> component', () => {
  test('it should render the button', () => {
    const tree = create(<TextButton onClick={() => {}} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
