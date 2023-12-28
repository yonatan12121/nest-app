import { Module } from '@nestjs/common';
import { AppController,LoginController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    BookModule
  ],
  controllers: [AppController,LoginController],
  providers: [AppService],
})
export class AppModule {}
