import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better DOM assertions
import MissionsList from '../components/Missions/MissionComp';

// Mocking useDispatch and useSelector
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: (selectorFn) => selectorFn(
    { missions: { missions: [] } },
  ),
}));

test('renders the Empty Missions component correctly', () => {
  const { container } = render(<MissionsList />);
  expect(container).toMatchSnapshot();
});
