import jwt from 'jsonwebtoken';
import QuizStorage from '../../Quiz/Domains/Storage/QuizStorage';

type JwtPayload = {
    user: any;
};

const privateKey = 'music_quiz_very_secret';
const jwtConfig = {
    expiresIn: '1h',
};

const Auth = {
    setToken: (user: any) => jwt.sign({ user: user }, privateKey, jwtConfig),

    verifyToken: async (token: string) => {
        try {
            const decodedJwt = jwt.verify(token, privateKey) as JwtPayload;
            const currentUser = await QuizStorage.currentUser.get(decodedJwt.user.id);
        } catch (err) {
            console.log(err);
        }
    },

    decodeToken: async (token: string) => {
        const { user } = jwt.verify(token, privateKey) as JwtPayload;
        return user;
    },
};

export default Auth;
