import {TableStatus} from "../components/TableStatus";

let tablesObjectList = [
    {
        id: 1,
        chairsCount: 8,
        number: "A10",
        status: TableStatus.available
    },
    {
        id: 2,
        chairsCount: 4,
        number: "A11",
        status: TableStatus.filled
    },
    {
        id: 3,
        chairsCount: 10,
        number: "A12",
        status: TableStatus.availableSoon
    },
    {
        id: 4,
        chairsCount: 2,
        number: "A13",
        status: TableStatus.reserved
    },
    {
        id: 5,
        chairsCount: 8,
        number: "A14",
        status: TableStatus.available
    },
    {
        id: 6,
        chairsCount: 4,
        number: "B10",
        status: TableStatus.filled,
    },
    {
        id: 7,
        chairsCount: 10,
        number: "B11",
        status: TableStatus.reserved,
    },
    {
        id: 8,
        chairsCount: 2,
        number: "B12",
        status: TableStatus.filled,
    },
    {
        id: 9,
        chairsCount: 4,
        number: "B13",
        status: TableStatus.reserved,
    },
    {
        id: 10,
        chairsCount: 2,
        number: "B14",
        status: TableStatus.reserved,
    },
    {
        id: 11,
        chairsCount: 10,
        number: "C10",
        status: TableStatus.available,
    },
    {
        id: 12,
        chairsCount: 10,
        number: "C11",
        status: TableStatus.available,
    },
    {
        id: 13,
        chairsCount: 10,
        number: "C12",
        status: TableStatus.available,
    },
    {
        id: 14,
        chairsCount: 4,
        number: "D10",
        status: TableStatus.filled,
    },
    {
        id: 15,
        chairsCount: 2,
        number: "D11",
        status: TableStatus.reserved,
    },
    {
        id: 16,
        chairsCount: 8,
        number: "D12",
        status: TableStatus.available,
    },
    {
        id: 17,
        chairsCount: 2,
        number: "D13",
        status: TableStatus.reserved,
    },
    {
        id: 18,
        chairsCount: 4,
        number: "D14",
        status: TableStatus.filled,
    },
]
let categories = [
    {id: 1, title: "Coffee",},
    {id: 2, title: "Beverages",},
    {id: 3, title: "Food",},
    {id: 4, title: "Appetizer",},
    {id: 5, title: "Bakeries",}
];
let menuList = [
    /* ===================== Coffee ===================== */
    {id: 101, title: "Espresso", price: 2.5, categoryId: 1},
    {id: 102, title: "Double Espresso", price: 3.2, categoryId: 1},
    {id: 103, title: "Americano", price: 3.0, categoryId: 1},
    {id: 104, title: "Cappuccino", price: 3.5, categoryId: 1},
    {id: 105, title: "Latte", price: 3.8, categoryId: 1},
    {id: 106, title: "Mocha", price: 4.0, categoryId: 1},
    {id: 107, title: "Flat White", price: 3.9, categoryId: 1},

    /* ===================== Beverages ===================== */
    {id: 201, title: "Green Tea", price: 2.0, categoryId: 2},
    {id: 202, title: "Black Tea", price: 2.0, categoryId: 2},
    {id: 203, title: "Herbal Tea", price: 2.3, categoryId: 2},
    {id: 204, title: "Lemonade", price: 2.8, categoryId: 2},
    {id: 205, title: "Orange Juice", price: 3.2, categoryId: 2},
    {id: 206, title: "Apple Juice", price: 3.0, categoryId: 2},
    {id: 207, title: "Mineral Water", price: 1.5, categoryId: 2},

    /* ===================== Food ===================== */
    {id: 301, title: "Beef Burger", price: 6.8, categoryId: 3},
    {id: 302, title: "Chicken Burger", price: 6.2, categoryId: 3},
    {id: 303, title: "Margherita Pizza", price: 8.0, categoryId: 3},
    {id: 304, title: "Pepperoni Pizza", price: 8.5, categoryId: 3},
    {id: 305, title: "Carbonara Pasta", price: 7.5, categoryId: 3},
    {id: 306, title: "Lasagna", price: 7.8, categoryId: 3},

    /* ===================== Appetizer ===================== */
    {id: 401, title: "French Fries", price: 3.0, categoryId: 4},
    {id: 402, title: "Cheese Balls", price: 3.8, categoryId: 4},
    {id: 403, title: "Chicken Wings", price: 5.2, categoryId: 4},
    {id: 404, title: "Garlic Bread", price: 2.9, categoryId: 4},
    {id: 405, title: "Nachos", price: 4.5, categoryId: 4},

    /* ===================== Bakeries ===================== */
    {id: 501, title: "Croissant", price: 2.8, categoryId: 5},
    {id: 502, title: "Chocolate Croissant", price: 3.2, categoryId: 5},
    {id: 503, title: "Muffin", price: 2.5, categoryId: 5},
    {id: 504, title: "Bagel", price: 2.2, categoryId: 5},
    {id: 505, title: "Cinnamon Roll", price: 3.5, categoryId: 5},

    /* ===================== Desserts ===================== */
    {id: 601, title: "Cheesecake", price: 4.8, categoryId: 6},
    {id: 602, title: "Chocolate Cake", price: 4.5, categoryId: 6},
    {id: 603, title: "Tiramisu", price: 5.0, categoryId: 6},
    {id: 604, title: "Ice Cream Vanilla", price: 3.0, categoryId: 6},
    {id: 605, title: "Ice Cream Chocolate", price: 3.0, categoryId: 6},

    /* ===================== Breakfast ===================== */
    {id: 701, title: "Scrambled Eggs", price: 4.2, categoryId: 7},
    {id: 702, title: "Omelette", price: 4.5, categoryId: 7},
    {id: 703, title: "Pancakes", price: 4.8, categoryId: 7},
    {id: 704, title: "French Toast", price: 4.6, categoryId: 7},

    /* ===================== Fast Food ===================== */
    {id: 801, title: "Hot Dog", price: 3.5, categoryId: 8},
    {id: 802, title: "Cheeseburger", price: 6.0, categoryId: 8},
    {id: 803, title: "Chicken Nuggets", price: 4.2, categoryId: 8},
    {id: 804, title: "Fried Chicken", price: 6.5, categoryId: 8}
];
const cartList = [
    {
        id: "c-001",
        menuId: 101,
        title: "Espresso",
        categoryId: 1,
        categoryTitle: "Coffee",
        price: 2.5,
        quantity: 2,
        subtotal: 5.0,
        size: "Medium",
        sugarLevel: "Normal",
        notes: "Extra hot",
        tableId: "A1",
        orderType: "DINE_IN",
        discount: null,
        tax: { rate: 12, amount: 0.6 },
        total: 5.6,
        status: "PENDING",
        createdAt: "2026-01-15T09:10:00Z"
    },
    {
        id: "c-002",
        menuId: 105,
        title: "Latte",
        categoryId: 1,
        categoryTitle: "Coffee",
        price: 3.8,
        quantity: 1,
        subtotal: 3.8,
        size: "Large",
        sugarLevel: "Less",
        notes: "",
        tableId: "A1",
        orderType: "DINE_IN",
        discount: { type: "PERCENT", value: 10, amount: 0.38 },
        tax: { rate: 12, amount: 0.41 },
        total: 3.83,
        status: "PENDING",
        createdAt: "2026-01-15T09:11:00Z"
    },
    {
        id: "c-003",
        menuId: 201,
        title: "Green Tea",
        categoryId: 2,
        categoryTitle: "Beverages",
        price: 2.0,
        quantity: 3,
        subtotal: 6.0,
        size: "Medium",
        sugarLevel: "No Sugar",
        notes: "",
        tableId: "A1",
        orderType: "DINE_IN",
        discount: null,
        tax: { rate: 12, amount: 0.72 },
        total: 6.72,
        status: "PENDING",
        createdAt: "2026-01-15T09:12:00Z"
    },
    {
        id: "c-004",
        menuId: 301,
        title: "Beef Burger",
        categoryId: 3,
        categoryTitle: "Food",
        price: 6.8,
        quantity: 2,
        subtotal: 13.6,
        size: "Regular",
        notes: "No onion",
        tableId: "A1",
        orderType: "DINE_IN",
        discount: { type: "FIXED", value: 2.0, amount: 2.0 },
        tax: { rate: 12, amount: 1.39 },
        total: 12.99,
        status: "PENDING",
        createdAt: "2026-01-15T09:13:00Z"
    },
    {
        id: "c-005",
        menuId: 401,
        title: "French Fries",
        categoryId: 4,
        categoryTitle: "Appetizer",
        price: 3.0,
        quantity: 1,
        subtotal: 3.0,
        size: "Large",
        notes: "Extra crispy",
        tableId: "A1",
        orderType: "DINE_IN",
        discount: null,
        tax: { rate: 12, amount: 0.36 },
        total: 3.36,
        status: "PENDING",
        createdAt: "2026-01-15T09:14:00Z"
    },
    {
        id: "c-006",
        menuId: 503,
        title: "Muffin",
        categoryId: 5,
        categoryTitle: "Bakeries",
        price: 2.5,
        quantity: 2,
        subtotal: 5.0,
        size: "Standard",
        notes: "",
        tableId: "A1",
        orderType: "TAKEAWAY",
        discount: null,
        tax: { rate: 12, amount: 0.6 },
        total: 5.6,
        status: "PENDING",
        createdAt: "2026-01-15T09:15:00Z"
    },
    {
        id: "c-007",
        menuId: 602,
        title: "Chocolate Cake",
        categoryId: 6,
        categoryTitle: "Desserts",
        price: 4.5,
        quantity: 1,
        subtotal: 4.5,
        size: "Slice",
        notes: "Birthday plate",
        tableId: "A1",
        orderType: "DINE_IN",
        discount: null,
        tax: { rate: 12, amount: 0.54 },
        total: 5.04,
        status: "PENDING",
        createdAt: "2026-01-15T09:16:00Z"
    },
    {
        id: "c-008",
        menuId: 804,
        title: "Fried Chicken",
        categoryId: 8,
        categoryTitle: "Fast Food",
        price: 6.5,
        quantity: 2,
        subtotal: 13.0,
        size: "Regular",
        notes: "Spicy",
        tableId: "A1",
        orderType: "DINE_IN",
        discount: { type: "PERCENT", value: 5, amount: 0.65 },
        tax: { rate: 12, amount: 1.49 },
        total: 13.84,
        status: "PENDING",
        createdAt: "2026-01-15T09:17:00Z"
    }
];

export {tablesObjectList, categories, menuList, cartList}