import * as React from 'react'
import { create } from 'react-test-renderer'

import { TextButton } from './TextButton'

describe('the <IconButton/> component', () => {
  test('it should use the specified icon', () => {
    const tree = create(<TextButton onClick={() => {}} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
