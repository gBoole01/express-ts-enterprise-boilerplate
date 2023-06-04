import * as express from 'express';

class App {
    public app: express.Application;

    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;
