const request = require('supertest');
const app = require('../index');

describe('GET /concursos', () => {
  it('deve retornar 200 e um array', async () => {
    const res = await request(app).get('/concursos?capacidades=marceneiro');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
