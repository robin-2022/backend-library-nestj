"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReaderSchema = exports.Reader = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constants_1 = require("../../shared/constants");
const swagger_1 = require("@nestjs/swagger");
class Address {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "addressLine", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "uf", void 0);
class ContactInfo {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ContactInfo.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], ContactInfo.prototype, "email", void 0);
let Reader = class Reader {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Reader.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", Address)
], Reader.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", ContactInfo)
], Reader.prototype, "contact", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Reader.prototype, "documentNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: constants_1.READER_CATEGORY }),
    __metadata("design:type", String)
], Reader.prototype, "category", void 0);
Reader = __decorate([
    (0, mongoose_1.Schema)()
], Reader);
exports.Reader = Reader;
exports.ReaderSchema = mongoose_1.SchemaFactory.createForClass(Reader);
//# sourceMappingURL=reader.entity.js.map