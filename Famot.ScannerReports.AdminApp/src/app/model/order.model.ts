import { ScannerFile } from "../model/scanner-file.model";
export interface Order {
    OrderID: number,
    ScannerFiles: Array<ScannerFile>
}