type Type = {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
};

export const Auth = {
    tokenDTO: {} as Type,
};
