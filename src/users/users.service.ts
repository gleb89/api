import { Injectable } from '@nestjs/common';
// crud
@Injectable()
export class UsersService {
    async getUsers(): Promise<string> {
        return 'list users!';
    }
    async getUser(params): Promise<string> {
        return 'user !' + params.id;
    }
}