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
// @Injectable()
// export class UsersService {
//         constructor(
//         @InjectRepository(User) private readonly userRepository: Repository<User>
//     ){}
//     async getUsers(): Promise<User> {
//         return this.userRepository.find()
//     }
//     async getUser(params): Promise<User>  {
//         return this.userRepository.find()
//     }
// }
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  create(userData): Promise<User> {
    console.log(userData);

    return this.usersRepository.save({ ...userData });
  }
  getUser(id: object): Promise<User> {
    return this.usersRepository.findOneBy(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async update(id, userData): Promise<User> {
    await this.usersRepository.update({ id }, { ...userData })
    return this.usersRepository.findOneBy({ id });

  }
}