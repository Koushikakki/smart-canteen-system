import { render } from "@testing-library/react-native";
import App from "../App";
const menuData = [
  {
    id: "s1",
    title: "Snacks",
    data: [
      {
        id: "",
        title: "samosa",
        price: 30,
        image: require("/Users/admin/Desktop/react-native/canteen-management-system/assets/images/beverages/coffee.jpeg")
      }
    ]
  }
]

describe("App component",()=>{
    test("renders the app heading",()=>{
        const {getByText} = render(<App/>)
        expect(getByText("Everest Canteen")).toBeOnTheScreen();
    });

    test("renders the sections",()=>{
        const {getByText} = render(<App/>)
        expect(getByText("breakfast")).toBeOnTheScreen();
    });
    test("renders the items",()=>{
        const {getByText} = render(<App/>)
        expect(getByText("Dosa")).toBeOnTheScreen();
    });

    test("renders the image",()=>{
      const {getAllByTestId} = render(<App/>);
      const image = getAllByTestId("item-image");
      expect(image[0].props.source).toBe(menuData[0].data[0].image);
    })
})