import React from "react";
import { render } from "@testing-library/react-native";
import ItemCard from "../../../src/components/ItemCard";



describe("ItemCard", () => {
  const mockItem = {
  id: "1",
  title: "Burger",
  price: 5
};
  it("renders item title and price", () => {
    const { getByText } = render(<ItemCard item={mockItem} />);

    expect(getByText(/Burger/i)).toBeOnTheScreen();
    expect(getByText(/5/i)).toBeTruthy();
  });
});
