import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity'
// crud
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {        
    async getUsers(): Promise < User > {
            return this.userRepository.find();
        }
    async getUser(params): Promise < string > {
            return 'user !' + params.id;
        }
    }