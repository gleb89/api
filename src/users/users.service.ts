import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity'
// crud
// @Injectable()
// export class UsersService {
//     constructor(
//         @InjectRepository(User) private readonly userRepository: Repository<User>
//     ) {        
    // async getUsers(){
    //         return this.userRepository.find();
    //     }
    // async getUser(params){
    //         return 'user + params.id!' ;
    //     }
    // getHello(): string {
    //     return 'Hello World22!';
    //   }
    // getHello2(params): string {
    //     return 'gfgdfdfdfd!'+params.id;
    //   }
    // }


// crud
@Injectable()
export class UsersService {
        constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){
    async getUsers(): Promise<User> {
        return this.userRepository.find()
    }
    async getUser(params): Promise<User>  {
        return this.userRepository.find()
    }
}
}