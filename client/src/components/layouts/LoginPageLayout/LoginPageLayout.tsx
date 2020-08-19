import React from 'react';
import MainBody from '../../organisms/MainBody';
import AuthButton from '../../molecules/AuthButton';

const LoginPageLayout = () => {
    return (
        <MainBody>
            <AuthButton provider="facebook" iconFontSize="24px" />
            <AuthButton provider="google" iconFontSize="23px" />
            <AuthButton provider="linkedin" iconFontSize="25px" />
        </MainBody>
    );
};

export default LoginPageLayout;
