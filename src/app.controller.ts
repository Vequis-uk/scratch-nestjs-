import { Controller, Get } from '@nestjs/common';

@Controller("/home") //decorator - tells nest what the class will do, thus AppController will be a Controller
export class AppController {
    @Get("/about") //by passing a string into here e.g. @Get("/about") this will display the below return / function when navigating to "http://localhost:3000/home"
                  //this above expression can also be passed directly to the Controller decorator as: @Controller("/home")
                  //this would apply to each of the children route handlers aka @Get("/about")
    getRootRoute() { //this is a function - this shows what to return
        return 'hello there! I am nestjs :)';
    }

    @Get('/bye')
    getByThere() {
        return 'bye there!';
    }
}
