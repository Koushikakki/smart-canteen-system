import { Section } from "../types/types.ts";

export const menuData: Section[] = [
    {
        id: 's1',
        title: 'beverages',
        data: [
            {
                id: 'b1', title: 'Coffee', price: 50,
                // image: require('../assets/images/beverages/coffee.jpeg')
            },
            {
                id: 'b2', title: 'Tea', price: 30,
                // image: require('../assets/images/beverages/tea.jpeg')
            },
            {
                id: 'b3', title: 'Hot Chocolate', price: 50,
                // image: require('../assets/images/beverages/hot-chocolate.jpeg')
            },
            {
                id: 'b4', title: 'Lassi', price: 30,
                // image: require('../assets/images/beverages/lassi.jpeg')
            },
            {
                id: 'b5', title: 'Butter Milk', price: 20,
                // image: require('../assets/images/beverages/buttermilk.jpeg')
            }
        ]
    },
    {
        id: 's2',
        title: 'breakfast',
        data: [
            {
                id: 'b1', title: 'Idly', price: 30,
                // image: require('../assets/images/breakfast/idly.jpeg')
            },
            {
                id: 'b2', title: 'Dosa', price: 40,
                // image: require('../assets/images/breakfast/dosa.jpeg')
            },
            {
                id: 'b3', title: 'Poori', price: 30,
                // image: require('../assets/images/breakfast/poori.jpeg')
            },
            {
                id: 'b4', title: 'Upma', price: 30,
                // image: require('../assets/images/breakfast/upma.jpeg')
            },
            {
                id: 'b5', title: 'Omelette', price: 40,
                // image: require('../assets/images/breakfast/omelette.jpeg')
            }
        ]
    },
    {
        id: 's3',
        title: 'Main Course',
        data: [
            {
                id: 'm1', title: 'Veg Thali', price: 80,
                // image: require('../assets/images/mainCourse/veg-thali.jpeg')
            },
            {
                id: 'm2', title: 'Chicken Biryani', price: 150,
                // image: require('../assets/images/mainCourse/chicken-biryani.jpeg')
            },
            {
                id: 'm3', title: 'Veg Biryani', price: 100,
                // image: require('../assets/images/mainCourse/veg-biryani.jpeg')
            },
            {
                id: 'm4', title: 'Curd Rice', price: 40,
                // image: require('../assets/images/mainCourse/curd-rice.jpeg')
            },
            {
                id: 'm5', title: 'Chicken Curry', price: 120,
                // image: require('../assets/images/mainCourse/chicken-curry.jpeg')
            }
        ]
    },
    {
        id: 's4',
        title: 'Desserts',
        data: [
            {
                id: 'd1', title: 'Vanilla IceCream', price: 30,
                // image: require('../assets/images/desserts/vanilla-icecream.jpeg')
            },
            {
                id: 'd2', title: 'Strawberry IceCream', price: 40,
                // image: require('../assets/images/desserts/strawberry-icecream.jpeg')
            },
            {
                id: 'd3', title: 'Gulab Jamun', price: 20,
                // image: require('../assets/images/desserts/gulab-jamun.jpeg')
            },
            {
                id: 'd4', title: 'Kheer', price: 30,
                // image: require('../assets/images/desserts/kheer.jpeg')
            },
            {
                id: 'd5', title: 'Rasgulla', price: 30,
                // image: require('../assets/images/desserts/rasagulla.jpeg') 
            }
        ]
    },
    {
        id: 's5',
        title: 'Snacks',
        data: [
            {
                id: 's1', title: 'Samosa', price: 30,
                // image: require('../assets/images/snacks/samosa.jpeg')
            },
            {
                id: 's2', title: 'French Fries', price: 50,
                // image: require('../assets/images/snacks/french-fries.jpeg')
            },
            {
                id: 's3', title: 'Sandwich', price: 40,
                // image: require('../assets/images/snacks/sandwich.jpeg')
            },
            {
                id: 's4', title: 'Pizza', price: 120,
                // image: require('../assets/images/snacks/pizza.jpeg')
            },
            {
                id: 's5', title: 'Burger', price: 80,
                // image: require('../assets/images/snacks/burger.jpeg')
            }
        ]
    }
];
