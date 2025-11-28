import { fireEvent,render } from "@testing-library/react-native"; 
// import Model from "../../../src/components/Model";
import SectionLists from "../../../src/components/SectionLists";
import Model from "../../../src/components/Model";
import { Alert } from "react-native";

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

      const mockOnclose = jest.fn();
      test('Add a item on click add in modal',()=>{

        const {getByPlaceholderText,getByText}=render(<Model onclose={mockOnclose} section={mockSections[0]} sections={mockSections} setSections={mockSetSections}/>)

        fireEvent.changeText(getByPlaceholderText("Add New Item"),"Pizza");
        fireEvent.changeText(getByPlaceholderText("Enter Price"),"10");

        fireEvent.press(getByText('ADD'));

        expect(mockSetSections).toHaveBeenCalledTimes(1);

        const updatedSections  = mockSetSections.mock.calls[0][0];

        expect(updatedSections[0].data.length).toBe(2);
        expect(updatedSections[0].data[1].title).toBe("Pizza");
        expect(updatedSections[0].data[1].price).toBe(10);

      });

      test("add an empty item gives alert",()=>{

        jest.spyOn(Alert,"alert");
        const {getByText}=render(<Model onclose={mockOnclose} section={mockSections[0]} sections={mockSections} setSections={mockSetSections}/>)

        fireEvent.press(getByText("ADD"));

        expect(Alert.alert).toHaveBeenCalledWith("Please fill all the fields");

      })
    
})