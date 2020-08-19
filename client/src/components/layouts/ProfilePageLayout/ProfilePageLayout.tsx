import React from 'react';
import MainBody from '../../organisms/MainBody';
import { IUser } from '../../../@types';

interface ProfilePageLayoutProps {
    user: IUser;
}

const ProfilePageLayout = ({ user }: ProfilePageLayoutProps) => {
    const { name, email, picture } = user;
    return (
        <MainBody>
            <h1>Hello, {name}</h1>
            <div>{email}</div>
            <img src={picture} alt={name} />
        </MainBody>
    );
};

export default ProfilePageLayout;
