import App from './app';

const port = Number(process.env.PORT) || 5000;

const app = new App(port);

app.listen();
