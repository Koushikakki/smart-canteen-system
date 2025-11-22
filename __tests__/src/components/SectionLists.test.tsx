import { render } from "@testing-library/react-native";
import SectionLists from "../../../src/components/SectionLists";

const mockSections = [
  {
    id : 's1',
    title: "Main Course",
    data: [
      { id: "1", title: "Pizza", price: 10, image: require("/Users/admin/Desktop/react-native/canteen-management-system/assets/images/snacks/pizza.jpeg") }
    ],
  },
];

describe("SectionList component",()=>{
    test("sections are rendered or not",()=>{
        const {getByText} = render(<SectionLists sections={mockSections}/>);
        expect(getByText("Main Course")).toBeOnTheScreen();
        expect(getByText("Pizza")).toBeOnTheScreen();
        
    });

    test("image is rendering or not",()=>{
      const {getByTestId} = render(<SectionLists sections={mockSections}/>);
      const image = getByTestId("item-image");
      expect(image.props.source).toBe(mockSections[0].data[0].image);
    })
})
