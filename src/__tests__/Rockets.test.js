import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better DOM assertions
import RocketsList from '../components/Rockets';

// Mocking useDispatch and useSelector
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: (selectorFn) => selectorFn(
    { rockets: { rockets: [] } },
  ),
}));

test('renders the Empty Rockets component correctly', () => {
  const { container } = render(<RocketsList />);
  expect(container).toMatchSnapshot();
});
