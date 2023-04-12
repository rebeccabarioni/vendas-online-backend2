import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
