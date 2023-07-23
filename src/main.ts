import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async() => {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3030;
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);    
  }
}
start();