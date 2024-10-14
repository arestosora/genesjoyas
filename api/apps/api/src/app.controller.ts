import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  getHello(@Body() data: any) {
    return this.appService.newUser(data);
  }
}
