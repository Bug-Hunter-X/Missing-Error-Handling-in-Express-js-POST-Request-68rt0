const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Validate user data
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing required user data' });
  }
  // Add more validation rules as needed...
  console.log(user);
  res.status(201).send();
});
app.listen(3000, () => console.log('Server listening on port 3000'));