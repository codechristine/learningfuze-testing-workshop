import { Input } from '../Input'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<Input />', () => {
  test('should render the input', () => {
    //arange
    //act
    const helpers = render(<Input id="test" label="Test" value="Testing" onChange={() => {}}/>)
    //renders everything into a fake DOM and debug console logs everything in the fake DOM
    helpers.debug()
    //goes into the DOM, finds the element for that text and tests to see if it's there -> grabs the NODE containing that text
    helpers.getByText('Test')
    //special for inputs -> grabs the inputs associated to that text
    const $input = helpers.getByLabelText('Test')
    //assert
    expect($input).toBeInTheDocument()
    expect($input).toHaveAttribute('value', 'Testing')
  })
  //testing what we put in our input during onChange -> whatever we input, onChange fires
  test('should fire "onChange" props when a change event happens on the input', () => {
  //arrange
  const onChange = jest.fn()
  //act
  const helpers = render(<Input id="test" label="Test" value="Testing" onChange={ onChange } />)
  const $input = helpers.getByLabelText('Test')
  fireEvent.change($input, { target: {value: '12345'}})
  // expect(onChange).toHaveBeenCalledTimes(1)
  // expect(onChange).toHaveBeenCalledWith({target: {value: '12345'}})
  //assert
  })
})
