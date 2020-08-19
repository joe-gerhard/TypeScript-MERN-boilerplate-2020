import { Profile } from 'passport';

import User from '../../models/user/User';

const findOrCreateUser = async (profile: Profile) => {
    let created: boolean = false;

    if (!(profile.emails && profile.photos)) {
        throw new Error('Email and/or photo fields missing in passport profile object');
    }

    const returningUser = await User.findOne({
        email: profile.emails[0].value,
    }).exec();

    if (!returningUser) {
        const newUser = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            picture: profile.photos[0].value,
        });

        created = true;

        return [newUser, created];
    }

    return [returningUser, created];
};

export default findOrCreateUser;
