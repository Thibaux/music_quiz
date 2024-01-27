import jwt from 'jsonwebtoken';
import { removeBearerFromToken } from '../../MusicQuiz/Helpers/Helpers';
import { Request } from 'express';

type JwtPayload = {
    user?: any;
};

const privateKey = 'music_quiz_very_secret';
const jwtConfig = {
    expiresIn: '1h',
};

const Auth = {
    setToken: (user: any): string => jwt.sign({ user: user }, privateKey, jwtConfig),

    verifyToken: async (token?: string) => {
        if (!token) {
            throw Error('Login failed: no token provided');
        }

        try {
            jwt.verify(removeBearerFromToken(token), privateKey) as JwtPayload;
        } catch (err) {
            throw Error('Login failed: ' + err.message);
        }
    },

    decodeToken: async (req: Request) => {
        const token = req.headers?.authorization;

        if (!token) {
            throw Error('Login failed: no token provided');
        }

        try {
            const data = jwt.verify(removeBearerFromToken(token), privateKey) as JwtPayload;
            return data.user;
        } catch (err) {
            throw Error('Authentication failed: ' + err.message);
        }
    },
};

export default Auth;
