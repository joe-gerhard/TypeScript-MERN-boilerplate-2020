import passport from 'passport';
import { Request, Response } from 'express';

import keys from '../../config/keys';

const facebookAuth = passport.authenticate('facebook');

const facebookCallback = passport.authenticate('facebook', {
    failureRedirect: `${keys.clientURL}/login`,
    successRedirect: `${keys.clientURL}/profile`,
});

const googleAuth = passport.authenticate('google', {
    scope: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
    ],
});

const googleCallback = passport.authenticate('google', {
    failureRedirect: `${keys.clientURL}/login`,
    successRedirect: `${keys.clientURL}/profile`,
});

const linkedInAuth = passport.authenticate('linkedin', {
    scope: ['r_emailaddress', 'r_liteprofile'],
});

const linkedInCallback = passport.authenticate('linkedin', {
    failureRedirect: `${keys.clientURL}/login`,
    successRedirect: `${keys.clientURL}/profile`,
});

const logout = (req: Request, res: Response) => {
    req.logout();
    res.send('logged out');
};

export default {
    facebookAuth,
    facebookCallback,
    googleAuth,
    googleCallback,
    linkedInAuth,
    linkedInCallback,
    logout,
};
