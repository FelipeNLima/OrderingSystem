import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { CreateUserPort } from '../domain/ports/port-in';
import { UserModule } from './user.module';

describe('should return success in request Users', () => {
  let app: INestApplication;
  let service;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UserModule],
    })
      .overrideProvider(CreateUserPort)
      .useValue(service)
      .compile();

    app = moduleRef.createNestApplication();
    app.init();
  });

  it(`/GET userAll`, async () => {
    return await request(app.getHttpServer()).get('/user').expect(200);
  });

  it(`should create new user`, async () => {
    const user = {
      name: 'Felipe',
      email: 'felipe2@test.com.br',
      cpf: '12302300019',
    };

    return await request(app.getHttpServer())
      .post('/user')
      .send(user)
      .expect(201);
  });

  setTimeout(async () => {
    await afterAll(() => {
      app.close();
    });
  }, 5000);
});
