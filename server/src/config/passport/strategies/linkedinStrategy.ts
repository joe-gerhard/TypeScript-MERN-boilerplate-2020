import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import keys from '../../keys';
import findOrCreateUser from '../../../services/user/userServices';

export default new LinkedInStrategy(
    {
        clientID: keys.linkedIn.clientId,
        clientSecret: keys.linkedIn.clientSecret,
        callbackURL: keys.linkedIn.callbackURL,
        scope: ['r_emailaddress', 'r_liteprofile'],
        state: true,
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
