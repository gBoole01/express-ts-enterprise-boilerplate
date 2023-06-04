import * as pactum from 'pactum';
import App from '../src/app';

describe('Test app.ts', () => {
    let express: App;

    beforeAll(() => {
        express = new App(41573);
        express.listen();
        pactum.request.setBaseUrl('http://localhost:41573');
    });

    afterAll(() => {
        express.close();
    });

    test('Hello World! route', async () => {
        await pactum
            .spec()
            .get('/')
            .expectStatus(200)
            .expectBody('Hello World!');
    });
});
