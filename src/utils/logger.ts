/* eslint-disable no-console */

class Logger {
  static logException(
    error: Error,
    context: Record<string, unknown> = null
  ): void {
    if (context) console.error(JSON.stringify(context));
    console.error(error);
  }

  static logErrorMessage(message: string): void {
    Logger.logException(new Error(message));
  }
}

export default Logger;
