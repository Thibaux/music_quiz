import winston from 'winston';

const winstonInstance = () => {
    return winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'combined.log' }),
        ],
    });
};

const Logger = {
    log: () => {
        const logger = winstonInstance();

        if (process.env.NODE_ENV !== 'production') {
            logger.add(
                new winston.transports.Console({
                    format: winston.format.simple(),
                })
            );
        }

        return logger;
    },
};

export default Logger;
