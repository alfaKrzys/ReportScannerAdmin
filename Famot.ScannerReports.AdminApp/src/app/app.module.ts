import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddFile } from './add-file/add-file.component';
import { SaveOrder } from './save-order/save-order.component';
import { OrderNumber } from './order-number/order-number.component';
import { FileList } from './file-list/file-list.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AddFile, SaveOrder, OrderNumber, FileList],
    bootstrap: [AppComponent]
})
export class AppModule { }