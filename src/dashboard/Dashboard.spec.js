import React from 'react';
import { 
    // render, 
    // fireEvent, 
    cleanup 
} from 'react-testing-library';
import renderer from 'react-test-renderer'; // install this
import 'react-testing-library/cleanup-after-each'; //add this line to all your tests

import Dashboard from './Dashboard';

afterEach(() => {
  cleanup();
  // console.log(document.body.outerHTML);
});

describe('<Dashboard />', () => {
  it.skip('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // idea for another test
});
