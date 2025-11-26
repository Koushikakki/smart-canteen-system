import { fireEvent,render } from "@testing-library/react-native"; 
// import Model from "../../../src/components/Model";
import SectionLists from "../../../src/components/SectionLists";

describe('Model Component',()=>{
    const mockSections = [
    {
      id: 's1',
      title: 'Main Course',
      data: [{ id: '1', title: 'Pizza', price: 10 }],
    },
  ];
  const mockSetSections = jest.fn();

    test('click Add button opens model',()=>{
        const {getByTestId ,queryByText} = render(
          <SectionLists sections={mockSections} setSections={mockSetSections} />,
        );
        const button = getByTestId('add');
        fireEvent.press(button);

        expect(queryByText('Add Main Course')).toBeOnTheScreen();
    
        const cancelButton = getByTestId('cancel-model');

        fireEvent.press(cancelButton);
        expect(queryByText('Add Main Course')).toBeNull();

    
      });
    
})