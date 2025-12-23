const revenues = [
    {
        "id": "TXN202510240001",
        "invoiceNumber": "INV-001",
        "date": "2025-10-24T09:30:00Z",
        "cashierId": "USR001",
        "cashierName": "John Doe",
        "customerId": "CUST001",
        "customerName": "Alice Brown",
        "paymentMethod": "cash",
        "subtotal": 45.00,
        "discount": 5.00,
        "tax": 4.00,
        "total": 44.00,
        "paid": 50.00,
        "change": 6.00,
        "status": "completed",
        "createdAt": "2025-10-24T09:30:00Z",
        "updatedAt": "2025-10-24T09:30:00Z",
        "items": [
            {
                "productId": "PRD001",
                "name": "Cappuccino",
                "quantity": 2,
                "price": 5.00,
                "total": 10.00
            },
            {
                "productId": "PRD002",
                "name": "Croissant",
                "quantity": 3,
                "price": 3.00,
                "total": 9.00
            }
        ]
    },
    {
        "id": "TXN202510240002",
        "invoiceNumber": "INV-002",
        "date": "2025-10-24T11:45:00Z",
        "cashierId": "USR002",
        "cashierName": "Emma Stone",
        "customerId": null,
        "customerName": null,
        "paymentMethod": "card",
        "subtotal": 120.00,
        "discount": 10.00,
        "tax": 8.00,
        "total": 118.00,
        "paid": 118.00,
        "change": 0.00,
        "status": "completed",
        "createdAt": "2025-10-24T11:45:00Z",
        "updatedAt": "2025-10-24T11:45:00Z",
        "items": [
            {
                "productId": "PRD005",
                "name": "Pizza Margherita",
                "quantity": 2,
                "price": 25.00,
                "total": 50.00
            },
            {
                "productId": "PRD006",
                "name": "Coca Cola 0.5L",
                "quantity": 4,
                "price": 2.50,
                "total": 10.00
            },
            {
                "productId": "PRD007",
                "name": "Garlic Bread",
                "quantity": 2,
                "price": 5.00,
                "total": 10.00
            }
        ]
    },
    {
        "id": "TXN202510240003",
        "invoiceNumber": "INV-003",
        "date": "2025-10-24T14:20:00Z",
        "cashierId": "USR001",
        "cashierName": "John Doe",
        "customerId": "CUST002",
        "customerName": "Mark Smith",
        "paymentMethod": "QR",
        "subtotal": 80.00,
        "discount": 0.00,
        "tax": 6.40,
        "total": 86.40,
        "paid": 90.00,
        "change": 3.60,
        "status": "completed",
        "createdAt": "2025-10-24T14:20:00Z",
        "updatedAt": "2025-10-24T14:20:00Z",
        "items": [
            {
                "productId": "PRD010",
                "name": "Latte",
                "quantity": 4,
                "price": 4.00,
                "total": 16.00
            },
            {
                "productId": "PRD011",
                "name": "Blueberry Muffin",
                "quantity": 8,
                "price": 8.00,
                "total": 64.00
            }
        ]
    },
    {
        "id": "TXN202510240003",
        "invoiceNumber": "INV-003",
        "date": "2025-10-24T14:20:00Z",
        "cashierId": "USR001",
        "cashierName": "John Doe",
        "customerId": "CUST002",
        "customerName": "Mark Smith",
        "paymentMethod": "QR",
        "subtotal": 80.00,
        "discount": 0.00,
        "tax": 6.40,
        "total": 86.40,
        "paid": 90.00,
        "change": 3.60,
        "status": "completed",
        "createdAt": "2025-10-24T14:20:00Z",
        "updatedAt": "2025-10-24T14:20:00Z",
        "items": [
            {
                "productId": "PRD010",
                "name": "Latte",
                "quantity": 4,
                "price": 4.00,
                "total": 16.00
            },
            {
                "productId": "PRD011",
                "name": "Blueberry Muffin",
                "quantity": 8,
                "price": 8.00,
                "total": 64.00
            }
        ]
    }
]

export default revenues
