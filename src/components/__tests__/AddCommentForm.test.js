import { AddCommentForm } from '../AddCommentForm'
import { render, fireEvent, getByLabelText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


describe('<AddCommentForm />', () => {
  test('should allow you to submit a comment with a username', () => {
    //arrange
    const onSubmitForm = jest.fn()
    //act
    const helpers = render(<AddCommentForm onSubmitForm={ onSubmitForm } />)
    helpers.debug()
    //write pseudo code to mimick the amount of actions/steps
    //fill out the user field with a username
    //fire a change event
    const $user = helpers.getByLabelText('User')
    fireEvent.change($user, {target: { value: '@benjaminj' }})
    //fill out the content field with content
    //fire a change event
    const $content = helpers.getByLabelText('Content')
    fireEvent.change($content, { target: { value: 'This is content' } })
    //click the "Submit" button
    const $button = helpers.getByText('Submit')
    fireEvent.click($button)
    //assert
    expect(onSubmitForm).toHaveBeenCalledWith({
      user: '@benjaminj',
      content: 'This is content' })
  })
})
