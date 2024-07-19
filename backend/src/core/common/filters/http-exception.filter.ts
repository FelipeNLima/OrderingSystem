import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor() {}

  private readonly logger = new Logger(AllExceptionsFilter.name);

  async catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status: number;
    if (exception instanceof HttpException) {
      status = exception.getStatus();
    } else if (exception?.response?.status) {
      status = exception.response.status;
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    const message =
      exception instanceof HttpException ? exception?.getResponse() : exception;

    this.logger.error(message?.message);

    return response.status(status).json({
      statusCode: status,
      message: message?.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
