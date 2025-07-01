import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('📚 Welcome to Nepal CDC Books API (TS)');
});

app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
