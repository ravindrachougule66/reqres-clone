const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" }
];

app.get('/api/users', (req, res) => {
    res.json({ users });
});

app.listen(3000, () => console.log("API running on port 3000"));

