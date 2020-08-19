import express from 'express';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import morgan from 'morgan';

import passport from './config/passport/passport';
import mongoose from './config/database';
import authRouter from './routes/auth/authRouter';
import userRouter from './routes/user/userRouter';

const app = express();

const MongoStore = connectMongo(session);

app.use(morgan('dev'));
app.use(
    session({
        secret: 'some secret',
        resave: false,
        saveUninitialized: false,
        name: 'mern.test',
        store: new MongoStore({
            mongooseConnection: mongoose.connection,
        }),
    }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use('/auth', authRouter);
app.use('/user', passport.session(), userRouter);

app.listen(4000, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on port 4000');
});
