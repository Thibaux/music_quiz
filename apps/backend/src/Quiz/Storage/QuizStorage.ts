import { CurrentUsersPath } from '../../Core/Storage/Paths';
import Storage from '../../Core/Storage/Storage';

const get = async (key: number | string, path: string) => {
    const storage = await Storage.getData(path);
    return storage[key];
};

const set = async (data: object, path: string, key?: string) => {
    await Storage.push(path, {
        [data[key]]: data,
    });
};

const QuizStorage = {
    currentUser: {
        get: async (userId: number) => get(userId, CurrentUsersPath),
        set: async (user: any) => set(user, CurrentUsersPath, user.id),
    },

    quiz_session: {
        get: async (userUuid: string) => get(userUuid, CurrentUsersPath),
        set: async (user: any) => set(user, CurrentUsersPath, user.id),
    },
};

export default QuizStorage;
