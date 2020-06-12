import { Employee } from './employee';

export class Post {
    constructor(
        public id?: number,
        public text?: string,
        public employee?: Employee,
        public employeeId?: number
    ) {}
}
