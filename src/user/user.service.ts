import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { createUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    ) {}
    
    async createUser(createUserDto: createUserDto): Promise<UserEntity> {
        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDto.password, saltOrRounds);
        return this.userRepository.save({
            ...createUserDto,  
            password:passwordHashed,
        });
    }

    async getAllUser(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }
}
