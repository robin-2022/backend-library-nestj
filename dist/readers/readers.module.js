"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadersModule = void 0;
const common_1 = require("@nestjs/common");
const readers_service_1 = require("./readers.service");
const readers_controller_1 = require("./readers.controller");
const mongoose_1 = require("@nestjs/mongoose");
const reader_entity_1 = require("./entities/reader.entity");
const readers_repository_1 = require("./readers.repository");
const reader_category_module_1 = require("../reader-category/reader-category.module");
let ReadersModule = class ReadersModule {
};
ReadersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            reader_category_module_1.ReaderCategoryModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Reader', schema: reader_entity_1.ReaderSchema }]),
        ],
        controllers: [readers_controller_1.ReadersController],
        providers: [readers_repository_1.ReadersRepository, readers_service_1.ReadersService],
    })
], ReadersModule);
exports.ReadersModule = ReadersModule;
//# sourceMappingURL=readers.module.js.map