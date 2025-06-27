import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import {createServer} from 'http';
import logger from '../app/middleware/logger.middleware.js';
import { NotFoundError } from '../lib/error-definitions.js';
import errorMiddleware from '../app/middleware/error-middleware.js';
import {authRouter} from '../routes/api.js'
import cookieParser from 'cookie-parser';
import config from '../config/app.config.js';
import { getSecondsFromNow } from '../lib/util.js';
import { eventsRouter } from '../routes/events.js';


const app = express();
const server = createServer(app);

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger());
app.use(
    cookieParser({
        httpOnly: true,
        secure: config.environment === 'production',
        sameSite: "strict",
        maxAge: getSecondsFromNow(config.jwt.expiration)
    })
)

app.get('/health', (req, res) =>
{
    res.status(200).json({
        success:true,
        message: 'server is running'
    });
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/events', eventsRouter)


app.use((req, res, next) => {
    next(new NotFoundError(`the requested route ${req.originalUrl} does  not exist on this server`));
});
app.use(errorMiddleware);
export {app, server};