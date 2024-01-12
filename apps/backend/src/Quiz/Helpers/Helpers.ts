export const randomNum = () => Math.floor(Math.random() * (99 - 1) + 1);

export const toArray = (object: any) => Object.values(object);

export const getRandomItemsFromArray = (array: any[], n: number) => {
    const result = new Array(n);
    let len = array.length;
    const taken = new Array(len);

    if (n > len) {
        throw new RangeError('More elements taken than available');
    }

    while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = array[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }

    return result;
};

export const serializeToken = (token?: string) => {
    if (!token || token === '') {
        return null;
    }

    if (token.includes('Bearer ')) {
        return token;
    } else {
        return `Bearer ${token}`;
    }
};
