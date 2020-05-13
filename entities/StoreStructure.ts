import {Post} from "./Post";

export default interface StoreStructure {
    posts?: Post[],
    newTitle?: string,
    newBody?: string,
}