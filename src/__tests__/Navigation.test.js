import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Navigation from '../components/Navigations/Navigation';
import store from '../redux/store';

describe('Navigation component', () => {
  it('should render with logo and links', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Navigation />
      </Provider>,
    );
    expect(getByText('Space Travelers Hub')).toBeInTheDocument();
    expect(getByText('Missions')).toBeInTheDocument();
    expect(getByText('Rockets')).toBeInTheDocument();
    expect(getByText('My Profile')).toBeInTheDocument();
  });

  it('should render MissionsList component when path is "/"', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Navigation />
      </Provider>,
    );
    fireEvent.click(getByText('Missions'));
    waitFor(() => {
      expect(getByText('Mission 1')).toBeInTheDocument();
    });
  });

  it('should render RocketsList component when path is "/rockets"', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Navigation />
      </Provider>,
    );
    fireEvent.click(getByText('Rockets'));
    waitFor(() => {
      expect(getByText('Rocket 1')).toBeInTheDocument();
    });
  });

  it('should render MyProfilePage component when path is "/profile"', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Navigation />
      </Provider>,
    );
    fireEvent.click(getByText('My Profile'));
    waitFor(() => {
      expect(getByText('Profile Information')).toBeInTheDocument();
    });
  });
});
