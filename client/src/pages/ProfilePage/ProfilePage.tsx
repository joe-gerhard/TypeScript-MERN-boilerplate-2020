import React from 'react';
import ProfilePageLayout from '../../components/layouts/ProfilePageLayout';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/selectors';

const ProfilePage = () => {
    const user = useSelector(selectUser);

    return <ProfilePageLayout user={user} />;
};

export default ProfilePage;
