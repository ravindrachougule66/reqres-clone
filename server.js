const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;  // Use Azure's dynamic port
app.get('/api/users', (req, res) => {
    res.json({ users: [{ id: 1, name: "John Doe", email: "john@example.com" }] });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


