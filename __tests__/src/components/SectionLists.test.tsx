import { render } from '@testing-library/react-native';
import SectionLists from '../../../src/components/SectionLists';

const mockSetSections = jest.fn();

describe('SectionList component', () => {
  const mockSections = [
    {
      id: 's1',
      title: 'Main Course',
      data: [{ id: '1', title: 'Pizza', price: 10 }],
    },
  ];
  test('sections are rendered or not', () => {
    const { getByText } = render(
      <SectionLists sections={mockSections} setSections={mockSetSections} />,
    );
    expect(getByText(/Main Course/i)).toBeTruthy();
    expect(getByText(/Pizza/i)).toBeTruthy();
  });

  
});
