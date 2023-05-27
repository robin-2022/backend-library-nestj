import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const port = process.env.PORT || 9000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('library')
    .setDescription('Gerenciamento de empréstimos de obras literárias')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('library', app, document);

  await app.listen(port, () => {
    console.log('Running on http://localhost:9000');
  });
}
bootstrap();
