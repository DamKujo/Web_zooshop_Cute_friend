const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


let items = [
    {
        "name": "Щенок Корги",
        "price": 599,
        "imageUrl": "./../images/items/dogs/korgi.avif"
    },
    {
        "name": "Котенок Сфинкс",
        "price": 499,
        "imageUrl": "./../images/items/cats/sfinks.jpg"
    },
    {
        "name": "Кролик Вислоухий",
        "price": 399,
        "imageUrl": "./../images/items/rabbits/rabbit.jpg"
    },
    {
        "name": "Щенок Овчарка",
        "price": 599,
        "imageUrl": "./../images/items/dogs/ovcharka.jpg"
    },
    {
        "name": "Хомяк",
        "price": 99,
        "imageUrl": "./../images/items/hamster/hamster.jpg"
    },
    {
        "name": "Марштышка",
        "price": 899,
        "imageUrl": "./../images/items/monkey/monkey.jpg"
    },
    {
        "name": "Котенок Мейн-кун",
        "price": 699,
        "imageUrl": "./../images/items/cats/mejnkun.jpg"
    },
    {
        "name": "Котенок Бурма",
        "price": 799,
        "imageUrl": "./../images/items/cats/burma.jpg"
    },
    {
        "name": "Щенок Хаски",
        "price": 599,
        "imageUrl": "./../images/items/dogs/haski.jpg"
    },
    {
        "name": "Щенок Американский стаф",
        "price": 699,
        "imageUrl": "./../images/items/dogs/americ.jpg"
    }
];

let cartItems = [];
let favoriteItems = [];

items = items.map((item, index) => ({ ...item, id: index + 1 }));

app.get('/items', (req, res) => {
    res.json(items);
});

app.get('/cart', (req, res) => {
    res.json(cartItems);
});

app.get('/favorite', (req, res) => {
    res.json(favoriteItems);
});

app.post('/cart', (req, res) => {
    const newItem = { ...req.body, id: cartItems.length + 1 };
    cartItems.push(newItem);
    res.json(newItem);
});

app.post('/favorite', (req, res) => {
    const newFavoriteItem = { ...req.body, id: favoriteItems.length + 1 };
    favoriteItems.push(newFavoriteItem);
    res.json(newFavoriteItem);
});

app.delete('/cart/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    cartItems = cartItems.filter(item => item.id !== itemId);
    res.json({ success: true });
});

app.delete('/favorite/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    favoriteItems = favoriteItems.filter(item => item.id !== itemId);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
