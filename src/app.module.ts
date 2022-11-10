import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

//this declares all of the controllers - each application must have one module
@Module({
    controllers: [AppController] //this creates an instance of the controllers, AppController for example
})
export class AppModule {}