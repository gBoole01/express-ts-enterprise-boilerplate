import * as express from 'express';
import { Server } from 'http';
class App {
    public app: express.Application;

    private server: Server | null = null;

    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        this.initializeControllers();
    }

    private initializeControllers() {
        this.app.get('/', (_req, res) => {
            res.send('Hello World!');
        });
    }

    public listen() {
        this.server = this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    public close() {
        this.server.close();
    }
}

export default App;
