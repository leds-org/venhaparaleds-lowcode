const request = require('supertest');
const app = require('../index');

describe('Teste comportamental da rota /concursos', () => {
    it('deve retornar concursos com a capacidade "padeiro"', async () => {
        const res = await request(app).get('/concursos?capacidades=padeiro');

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);

        const contem = res.body.some(c => c.lista_de_vagas.includes('padeiro'));
        expect(contem).toBe(true);
    });

    it('deve retornar concursos com a capacidade "professor de matemática"', async () => {
        const capacidade = encodeURIComponent('professor de matemática');
        const res = await request(app).get(`/concursos?capacidades=${capacidade}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);

        const contem = res.body.some(c => c.lista_de_vagas.includes('professor de matemática'));
        expect(contem).toBe(true);
    });

    it('deve retornar array vazio quando não houver nenhuma correspondência', async () => {
        const res = await request(app).get('/concursos?capacidades=inexistente');

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(0);
    });
});
