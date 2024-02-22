import React from 'react';
import { render } from '@testing-library/react-native';
import { Overlay } from '../../src/hoc/withLoader';

describe('Overlay Component', () => {
  test('renders correctly when isVisible is true', () => {
    const { getByTestId } = render(<Overlay isVisible={true} />);
    const overlay = getByTestId('overlay');
    expect(overlay).toBeTruthy();
  });

  test('does not render when isVisible is false', () => {
    const { queryByTestId } = render(<Overlay isVisible={false} />);
    const overlay = queryByTestId('overlay');
    expect(overlay).toBeNull();
  });
});

// const mockNavigation: any = {
//     replace: jest.fn(),
//   };
// describe('withLoader HOC', () => {
//   const WrappedComponent = () => <PopularMoviesScreen navigation={mockNavigation} showLoader={()=>true}/>;
//   const ComponentWithLoader = withLoader(WrappedComponent);

//   test('shows loader when showLoader is called with true', () => {
//     const {getByTestId} = renderWithProviders(<ComponentWithLoader />);
    
//     const overlay = getByTestId('overlay');
  
//     // fireEvent(ComponentWithLoader, 'showLoader', true);

//     // // const overlay = getByTestId('overlay');
//     expect(overlay).toBeTruthy();
//   });

// //   test('hides loader when showLoader is called with false', () => {
// //     const { getByTestId, queryByTestId } = render(<ComponentWithLoader />);
// //     fireEvent(ComponentWithLoader, 'showLoader', true);
// //     fireEvent(ComponentWithLoader, 'showLoader', false);

// //     const overlay = queryByTestId('overlay');
// //     expect(overlay).toBeNull();
// //   });
// });
