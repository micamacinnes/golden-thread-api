import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    name: string;
    desc: string;
    email: string;
    getId(): number | undefined;
}
