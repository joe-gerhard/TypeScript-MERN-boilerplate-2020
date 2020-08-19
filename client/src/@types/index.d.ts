export interface IUser {
    name: string;
    email: string;
    picture: string;
}

export type AuthProvider = 'facebook' | 'google' | 'linkedin';
