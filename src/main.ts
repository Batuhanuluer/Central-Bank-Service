import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(8002);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://epbxfjdt:pheBzlvLhKKbfI2dL_SzGpmnWVbAduPs@sparrow.rmq.cloudamqp.com/epbxfjdt'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.listen();
}
bootstrap();
