import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
