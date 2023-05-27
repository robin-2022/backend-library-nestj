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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteraryCategoryController = void 0;
const common_1 = require("@nestjs/common");
const literary_category_service_1 = require("./literary-category.service");
const swagger_1 = require("@nestjs/swagger");
const literary_category_entity_1 = require("./entities/literary-category.entity");
let LiteraryCategoryController = class LiteraryCategoryController {
    constructor(literaryCategoryService) {
        this.literaryCategoryService = literaryCategoryService;
    }
    create(createLiteraryCategory) {
        return this.literaryCategoryService.create(createLiteraryCategory);
    }
    update(updateCategory) {
        return this.literaryCategoryService.update(updateCategory);
    }
    findAll() {
        return this.literaryCategoryService.findAll();
    }
    findByName(description) {
        const response = this.literaryCategoryService.findBy(description);
        return response;
    }
    remove(id) {
        return this.literaryCategoryService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [literary_category_entity_1.LiteraryCategory]),
    __metadata("design:returntype", void 0)
], LiteraryCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [literary_category_entity_1.LiteraryCategory]),
    __metadata("design:returntype", void 0)
], LiteraryCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LiteraryCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LiteraryCategoryController.prototype, "findByName", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LiteraryCategoryController.prototype, "remove", null);
LiteraryCategoryController = __decorate([
    (0, swagger_1.ApiTags)('Categoria'),
    (0, common_1.Controller)('literary-category'),
    __metadata("design:paramtypes", [literary_category_service_1.LiteraryCategoryService])
], LiteraryCategoryController);
exports.LiteraryCategoryController = LiteraryCategoryController;
//# sourceMappingURL=literary-category.controller.js.map