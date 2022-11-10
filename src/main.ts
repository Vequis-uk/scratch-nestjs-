import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootsrap() {
  //this bootstrap function will get called when the application is started (bootstrap is common naming convention)
  const app = await NestFactory.create(AppModule);

  await app.listen(3000); //this is the port that the application will listen to / run on
}
bootsrap(); //we then need to run the bootstrap function
