import { Component, Input } from '@angular/core';

@Component({
    selector: 'file-list',
    templateUrl: '/app/file-list/file-list.component.html'
})
export class FileList {
    @Input() PdfFiles: Array<File>;
}