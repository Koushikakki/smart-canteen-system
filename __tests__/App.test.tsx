import { render } from '@testing-library/react-native';
import App from '../App';
import { SafeAreaProvider } from 'react-native-safe-area-context';

describe('App component', () => {
  test('renders the app heading', () => {
    const { getByText } = render(
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>,
    );
    expect(getByText(/Everest Canteen/i)).toBeOnTheScreen();
  });

  test('renders the sections', () => {
    const { getByText } = render(
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>,
    );
    expect(getByText(/breakfast/i)).toBeOnTheScreen();
  });
  test('renders the items', () => {
    const { getByText } = render(
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>,
    );
    expect(getByText(/Dosa/i)).toBeOnTheScreen();
  });
});
