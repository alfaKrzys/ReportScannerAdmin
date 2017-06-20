"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AddFile = (function () {
    function AddFile() {
        this.PdfFiles = new Array();
    }
    AddFile.prototype.onChange = function (fileInput) {
        var eventObj = fileInput;
        var target = eventObj.target;
        for (var _i = 0; _i < target.files.length; _i++) {
            if (!this.PdfFiles.some(function (p) { return p === target.files[_i]; })) {
                this.PdfFiles.push(target.files[_i]);
            }
        }
    };
    return AddFile;
}());
AddFile = __decorate([
    core_1.Component({
        selector: 'add-file',
        templateUrl: '/app/add-file/add-file.component.html'
    })
], AddFile);
exports.AddFile = AddFile;
//# sourceMappingURL=add-file.component.js.map