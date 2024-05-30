const express = require('express');
const authRoutes = require('./routes/auth');
const verifyRoutes = require('./routes/verify');
const exeRoutes = require('./routes/exe');


const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/verify', verifyRoutes);
app.use('/exe', exeRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
