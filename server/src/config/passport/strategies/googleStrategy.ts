import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import keys from '../../keys';
import findOrCreateUser from '../../../services/user/userServices';

export default new GoogleStrategy(
    {
        clientID: keys.google.clientId,
        clientSecret: keys.google.clientSecret,
        callbackURL: keys.google.callbackURL,
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
