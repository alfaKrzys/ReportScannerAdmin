import { Component } from '@angular/core';

@Component({
    selector: 'add-file',
    templateUrl: '/app/add-file/add-file.component.html'
})
export class AddFile {
    PdfFiles: Array<File> = new Array<File>();

    onChange(fileInput: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext>fileInput;
        let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
        for (var _i = 0; _i < target.files.length; _i++) {
            if (!this.PdfFiles.some(p => p === target.files[_i])) {
                this.PdfFiles.push(target.files[_i]);
            }
            //debugger;
        }
    }
}