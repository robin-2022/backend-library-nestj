"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteraryWorksModule = void 0;
const common_1 = require("@nestjs/common");
const literary_works_service_1 = require("./literary-works.service");
const literary_works_controller_1 = require("./literary-works.controller");
const mongoose_1 = require("@nestjs/mongoose");
const literary_work_entity_1 = require("./entities/literary-work.entity");
const literary_works_repository_1 = require("./literary-works.repository");
const literary_category_module_1 = require("../literary-category/literary-category.module");
let LiteraryWorksModule = class LiteraryWorksModule {
};
LiteraryWorksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            literary_category_module_1.LiteraryCategoryModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'Literary_works', schema: literary_work_entity_1.LiteraryWorkSchema },
            ]),
        ],
        controllers: [literary_works_controller_1.LiteraryWorksController],
        providers: [literary_works_repository_1.LiteraryWorksRepository, literary_works_service_1.LiteraryWorksService],
    })
], LiteraryWorksModule);
exports.LiteraryWorksModule = LiteraryWorksModule;
//# sourceMappingURL=literary-works.module.js.map