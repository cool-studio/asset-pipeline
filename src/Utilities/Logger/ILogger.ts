export interface ILogger {
    debug(...data: any): void,
    error(...data: any): void,
    info(...data: any): void,
}
