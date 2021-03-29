import app from './index';

const PORT: string | number = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
