import passport from 'passport';

import User, { IUserDocument } from '../../models/user/User';
import facebookStrategy from './strategies/facebookStrategy';
import googleStrategy from './strategies/googleStrategy';
import linkedinStrategy from './strategies/linkedinStrategy';

passport.use(facebookStrategy);
passport.use(googleStrategy);
passport.use(linkedinStrategy);

passport.serializeUser((user: IUserDocument, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
    const user = await User.findById(id).exec();

    if (!user) {
        done('user not found');
    }

    done(null, user);
});

export default passport;
