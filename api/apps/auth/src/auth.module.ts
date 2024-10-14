import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from 'apps/shared/database.module';
import { User } from 'apps/shared/schemas/user';

@Module({
  imports: [DatabaseModule.forRoot([User])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
