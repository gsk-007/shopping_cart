import winston from "winston";
import path from "path";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    }),
  ),
  transports: [
    // write all logs error to error.log
    new winston.transports.File({
      filename: path.join("backend", "logs", "error.log"),
      level: "error",
      maxsize: 1048576,
      maxFiles: 5,
    }),
    // Write all logs info to combined.log
    new winston.transports.File({
      filename: path.join("backend", "logs", "combined.log"),
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
  );
}

// Error Handling
logger.on("error", (error) => {
  console.error("Error in logger:", error);
});

export default logger;
