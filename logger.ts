export class Logger {
  #config = {}
  info(msg: string): void {
    console.log(msg);
  }
  warn(msg: string): void {
    console.log(msg);
  }
  error(msg: string): void {
    console.log(msg);
  }
}

export default new Logger();
