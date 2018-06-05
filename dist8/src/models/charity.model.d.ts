import { Entity } from '@loopback/repository';
export declare class Charity extends Entity {
    name?: string;
    email: string;
    website: string;
    phonenumber: string;
    getName(): string | undefined;
}
