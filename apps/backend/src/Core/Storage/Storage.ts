import { Config, JsonDB } from 'node-json-db';

const config = new Config('myDataBase', true, false, '/');
const Storage = new JsonDB(config);

export default Storage;
