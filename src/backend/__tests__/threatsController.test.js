import { threadsController } from '../threadsController'

describe('threadsController', () => {
  test('should return 200 and a list of threads on a GET request', () => {
    //arrange - mocking the exact same object/shape as the paramater of the function
    //this is faking it in the mock testing
    const req = {
      method: 'GET'
    }
    //genrates a fake function inside myMock
    //records how many times it has been called
    const myMock = jest.fn()
    const res = {
      status: () => {
        return {
          // json: () => {}
          json: myMock,
        }
      }
    }
    res.status().json()
    //act
    threadsController(req, res)
    //assert
    //json was valled 1 time
    //json was called with the list of data
    console.log(myMock.mock.calls)
    expect(myMock).toHaveBeenCalledTimes(2)
    expect(myMock).toHaveBeenCalledWith([
      {
        comments: ['5tvf1vv39', '7sack1xhe'],
        content: 'This is the content for the thread',
        id: 'n4uajfhps',
        reactions: { '👍': 20, '🔥': 30 },
        title: 'My first thread!',
      },
      {
        comments: ['n99putsfi'],
        content: "This is the content for the second thread, it's got some stuffz",
        id: '624p8jvnk',
        reactions: { '🚀': 3 },
        title: 'Another cool thread',
      },
    ])
  })
})
