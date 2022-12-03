import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello Naldi!' }));

app.listen(3350, () => console.log('Server is running!!!!'));
