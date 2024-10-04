

const resList=[
    {
      "id": 1,
      "name": "Sunset Bistro",
      "description": "Italian, Fast Food, Pizza",
      "rating": 4.7,
      "location": "123 Ocean Drive, Mumbai, India",
      "image": "https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?t=st=1727345365~exp=1727348965~hmac=466dae918f61f9407cd35d11af723b1e1e7bfe1a7a7e071d632b3cd8993150f4&w=740",
      "priceRange": "$$",
      "deliveryTime": "30 mins",
      "isAvailable": true,
      "discount": "20% OFF on all orders above ₹500",
      "menuItems": [
        {
          "itemId": 101,
          "itemName": "Margherita Pizza",
          "price": 299,
          "image": "https://example.com/images/margherita-pizza.jpg",
          "description": "Classic Italian pizza with fresh tomatoes and basil."
        },
        {
          "itemId": 102,
          "itemName": "Garlic Bread",
          "price": 149,
          "image": "https://example.com/images/garlic-bread.jpg",
          "description": "Crispy garlic bread with a side of dipping sauce."
        }
      ],
      "orderLink": "https://example.com/order/sunset-bistro",
      "offers": "Use code PIZZA20 for additional 20% OFF"
    },
    {
        "id": 2,
        "name": "Spicy Affair",
        "description": "Indian, Curry, Vegetarian",
        "rating": 4.5,
        "location": "456 Spice Lane, New Delhi, India",
        "image": "https://b.zmtcdn.com/data/reviews_photos/6b2/ac5109c056176236ee21ed6d7a49b6b2_1540538404.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        "priceRange": "$$",
        "deliveryTime": "40 mins",
        "isAvailable": true,
        "discount": "10% OFF on your first order",
        "menuItems": [
          {
            "itemId": 201,
            "itemName": "Paneer Butter Masala",
            "price": 350,
            "image": "https://example.com/images/paneer-butter-masala.jpg",
            "description": "Rich creamy curry with soft paneer cubes."
          },
          {
            "itemId": 202,
            "itemName": "Butter Naan",
            "price": 50,
            "image": "https://example.com/images/butter-naan.jpg",
            "description": "Soft naan with a generous layer of butter."
          }
        ],
        "orderLink": "https://example.com/order/spicy-affair",
        "offers": "Use code SPICY10 for 10% OFF"
      },
      {
        "id": 3,
        "name": "Tokyo Sushi",
        "description": "Japanese, Sushi, Seafood",
        "rating": 4.9,
        "location": "789 Sushi Street, Tokyo, Japan",
        "image": "https://www.shutterstock.com/shutterstock/photos/451924627/display_1500/stock-photo-sushi-set-served-on-dark-wooden-table-451924627.jpg",
        "priceRange": "$$$",
        "deliveryTime": "50 mins",
        "isAvailable": true,
        "discount": "Free delivery on orders above ¥3000",
        "menuItems": [
          {
            "itemId": 301,
            "itemName": "Salmon Nigiri",
            "price": 500,
            "image": "https://example.com/images/salmon-nigiri.jpg",
            "description": "Fresh salmon served on sushi rice."
          },
          {
            "itemId": 302,
            "itemName": "California Roll",
            "price": 450,
            "image": "https://example.com/images/california-roll.jpg",
            "description": "Popular sushi roll with crab, avocado, and cucumber."
          }
        ],
        "orderLink": "https://example.com/order/tokyo-sushi",
        "offers": "Use code SUSHI15 for 15% OFF"
      },
      {
        "id": 4,
        "name": "BBQ Delight",
        "description": "American, BBQ, Burgers",
        "rating": 4.6,
        "location": "321 Grill Avenue, Texas, USA",
        "image": "https://www.shutterstock.com/shutterstock/photos/2139576089/display_1500/stock-photo-brazilian-bbq-grilled-dry-aged-picanha-beef-steak-with-herbs-dark-background-top-view-2139576089.jpg",
        "priceRange": "$$$",
        "deliveryTime": "35 mins",
        "isAvailable": true,
        "discount": "Buy 1 Get 1 Free on all burgers",
        "menuItems": [
          {
            "itemId": 401,
            "itemName": "BBQ Bacon Burger",
            "price": 400,
            "image": "https://example.com/images/bbq-bacon-burger.jpg",
            "description": "Juicy beef patty with BBQ sauce and crispy bacon."
          },
          {
            "itemId": 402,
            "itemName": "Fries",
            "price": 150,
            "image": "https://example.com/images/fries.jpg",
            "description": "Crispy golden fries."
          }
        ],
        "orderLink": "https://example.com/order/bbq-delight",
        "offers": "Use code BBQ50 for 50% OFF"
      },
      {
        "id": 5,
        "name": "Paris Café",
        "description": "French, Pastry, Breakfast",
        "rating": 4.8,
        "location": "123 Champs-Élysées, Paris, France",
        "image": "https://www.shutterstock.com/shutterstock/photos/2467121785/display_1500/stock-photo-gourmand-coffee-in-a-parisian-cafe-served-with-traditional-french-sweets-2467121785.jpg",
        "priceRange": "$$$",
        "deliveryTime": "25 mins",
        "isAvailable": true,
        "discount": "Free coffee with any croissant",
        "menuItems": [
          {
            "itemId": 501,
            "itemName": "Croissant",
            "price": 200,
            "image": "https://example.com/images/croissant.jpg",
            "description": "Buttery, flaky croissant baked fresh daily."
          },
          {
            "itemId": 502,
            "itemName": "Latte",
            "price": 150,
            "image": "https://example.com/images/latte.jpg",
            "description": "Creamy latte with a shot of espresso."
          }
        ],
        "orderLink": "https://example.com/order/paris-cafe",
        "offers": "Use code FRENCH15 for 15% OFF"
      },
      {
        "id": 6,
        "name": "Taco Fiesta",
        "description": "Mexican, Tacos, Fast Food",
        "rating": 3.4,
        "location": "987 Fiesta Street, Mexico City, Mexico",
        "image": "https://img.freepik.com/free-photo/close-up-delicious-tacos_23-2150831111.jpg?t=st=1727842501~exp=1727846101~hmac=01ad8131e876627b2de586a34ff5baef364eea9f39527fbb9141bc72a9843e28&w=740",
        "priceRange": "$",
        "deliveryTime": "20 mins",
        "isAvailable": true,
        "discount": "Buy 2 Get 1 Free on tacos",
        "menuItems": [
          {
            "itemId": 601,
            "itemName": "Beef Taco",
            "price": 100,
            "image": "https://example.com/images/beef-taco.jpg",
            "description": "Crispy taco shell filled with seasoned beef."
          },
          {
            "itemId": 602,
            "itemName": "Chicken Quesadilla",
            "price": 200,
            "image": "https://example.com/images/chicken-quesadilla.jpg",
            "description": "Grilled tortilla stuffed with melted cheese and chicken."
          }
        ],
        "orderLink": "https://example.com/order/taco-fiesta",
        "offers": "Use code FIESTA10 for 10% OFF"
      }
    ]
    
export default resList;