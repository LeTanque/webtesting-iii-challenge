import React from 'react';
import { 
    // render, 
    // fireEvent, 
    cleanup 
} from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each'; //add this line to all your tests

import Display from './Display';

afterEach(() => {
  cleanup();
  // console.log(document.body.outerHTML);
});

describe('<Display />', () => {
  it.skip('matches snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // idea for another test
});

describe('display open or close', () => {
    it('displays open', () => {
        
    })
})









// describe('mocking', () => {
//   it('is mocking me', () => {
//     const mock = jest.fn();

//     const result = mock();

//     expect(result).toBeUndefined();
//     expect(mock).toHaveBeenCalledTimes(1);
//   });

//   it('controls the mock', () => {
//     const mock = jest.fn(() => 'hello');

//     const result = mock('smile');

//     expect(result).toBe('hello');
//     expect(mock).toHaveBeenCalledTimes(1);
//     expect(mock).toHaveBeenCalledWith('smile');
//   });
// });

// describe('<Greeter />', () => {
//   it('should save when clicking Save button', () => {
//     const { getByText } = render(<App />);

//     const saveButton = getByText(/save/i);
//     fireEvent.click(saveButton);

//     getByText(/saving/i);
//   });

//   it('should save when clicking Save button', () => {
//     const saveMock = jest.fn();
//     const { getByText } = render(<Greeter save={saveMock} />);

//     const saveButton = getByText(/save/i);
//     fireEvent.click(saveButton);

//     expect(saveMock).toHaveBeenCalledTimes(1);
//   });
// });
