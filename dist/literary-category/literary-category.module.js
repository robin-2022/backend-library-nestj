"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteraryCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const literary_category_service_1 = require("./literary-category.service");
const literary_category_controller_1 = require("./literary-category.controller");
const mongoose_1 = require("@nestjs/mongoose");
const literary_category_entity_1 = require("./entities/literary-category.entity");
const literary_category_repository_1 = require("./literary-category.repository");
let LiteraryCategoryModule = class LiteraryCategoryModule {
};
LiteraryCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Literary_category', schema: literary_category_entity_1.LiteraryCategorySchema },
            ]),
        ],
        controllers: [literary_category_controller_1.LiteraryCategoryController],
        providers: [literary_category_repository_1.LiteraryCategoryRepository, literary_category_service_1.LiteraryCategoryService],
        exports: [literary_category_service_1.LiteraryCategoryService],
    })
], LiteraryCategoryModule);
exports.LiteraryCategoryModule = LiteraryCategoryModule;
//# sourceMappingURL=literary-category.module.js.map