import { IPerson } from "./person.interface";

export class Person implements IPerson {
    constructor(
        public id: number,
        public userName: string,
        public userPassword: string,
        public userMail: string


    ){}
}