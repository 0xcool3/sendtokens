import pkg from "lru_map";
const { LRUMap } = pkg;
export const cache = new LRUMap(100);
