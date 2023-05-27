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
exports.LiteraryWorkSchema = exports.LiteraryWork = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const literary_category_entity_1 = require("../../literary-category/entities/literary-category.entity");
let LiteraryWork = class LiteraryWork {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], LiteraryWork.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: literary_category_entity_1.LiteraryCategory }),
    __metadata("design:type", literary_category_entity_1.LiteraryCategory)
], LiteraryWork.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], LiteraryWork.prototype, "authors", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], LiteraryWork.prototype, "keywords", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], LiteraryWork.prototype, "publishingCompany", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], LiteraryWork.prototype, "status", void 0);
LiteraryWork = __decorate([
    (0, mongoose_1.Schema)()
], LiteraryWork);
exports.LiteraryWork = LiteraryWork;
exports.LiteraryWorkSchema = mongoose_1.SchemaFactory.createForClass(LiteraryWork);
//# sourceMappingURL=literary-work.entity.js.map