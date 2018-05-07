const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const keys = require('./config/keys');

require('./models/User'); // Right place
require('./services/passport');

// Error require('./models/User');
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
 

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server is starting at - ", PORT)); 