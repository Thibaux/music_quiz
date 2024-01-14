import jwt from 'jsonwebtoken';
import Result from '../../Quiz/Result/Result';

type JwtPayload = {
    user: any;
};

const privateKey = 'music_quiz_very_secret';
const jwtConfig = {
    expiresIn: '1h',
};

const Auth = {
    setToken: (user: any): string => jwt.sign({ user: user }, privateKey, jwtConfig),

    verifyToken: async (token: string): Promise<Result> => {
        if (!token) {
            return new Result().asFailed('No token provided');
        }

        try {
            jwt.verify(token, privateKey) as JwtPayload;

            return new Result().asPassed();
        } catch (err) {
            return new Result().asFailed(err.message);
        }
    },

    decodeToken: async (token: string) => {
        const { user } = jwt.verify(token, privateKey) as JwtPayload;
        return user;
    },
};

export default Auth;
