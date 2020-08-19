import { Strategy as FacebookStrategy } from 'passport-facebook';
import keys from '../../keys';
import findOrCreateUser from '../../../services/user/userServices';

export default new FacebookStrategy(
    {
        clientID: keys.facebook.clientId,
        clientSecret: keys.facebook.clientSecret,
        callbackURL: keys.facebook.callbackURL,
        profileFields: ['emails', 'displayName', 'picture.type(large)'],
    },
    async (_accessToken, _refreshToken, profile, done) => {
        try {
            const [user] = await findOrCreateUser(profile);
            done(null, user);
        } catch (error) {
            done(error);
        }
    },
);
