import { CurrentUsersPath, SessionsPath } from '../../Core/Storage/Paths';
import Storage from '../../Core/Storage/Storage';

const get = async (key: number | string, path: string) => {
    const storage = await Storage.getData(path);
    return storage[key];
};

const set = async (data: object, path: string, key?: string) => {
    await Storage.push(path + key, data);
};

const QuizStorage = {
    currentUser: {
        get: async (userId: number) => get(userId, CurrentUsersPath),
        set: async (user: any) => set(user, CurrentUsersPath, user.id),
    },

    sessions: {
        get: async (id: number) => get(id, SessionsPath),
        set: async (key: string, session: any) => set(session, SessionsPath, key),
    },
};

export default QuizStorage;
