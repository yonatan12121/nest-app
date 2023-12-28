import { Body, Controller, Get, HttpCode, Param, Post, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';
import { find } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
@Controller('login')
export class LoginController {
  @Get("users")
  @HttpCode(201)
  findAllusers(): string {
    return 'This action returns all users';
  }
  @Get("Products")
  findAllProdcus(): string {
    return 'This action returns all Products';
  }
  @Get("items")
  @Redirect('https://nestjs.com', 301)
  findAllItems(): string {
    return 'This action returns all Items';
  }
  @Get(":id")
  findOne(@Param() params: any): string {
    console.log(params.id);

    return `This action returns a #${params.id} cat`;
  }

}
