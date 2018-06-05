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
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
const rest_1 = require("@loopback/rest");
let CharityController = class CharityController {
    constructor(charityRepo) {
        this.charityRepo = charityRepo;
    }
    async findCharity() {
        return await this.charityRepo.find();
    }
    async findCharitybyName(name) {
        // Check for valid ID
        let charityExists = !!(await this.charityRepo.count({ name }));
        if (!charityExists) {
            throw new rest_1.HttpErrors.BadRequest(`charity ${name} does not exist`);
        }
        return await this.charityRepo.findName(name);
    }
};
__decorate([
    rest_1.get('/charity'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "findCharity", null);
__decorate([
    rest_1.get('/charity/{name}'),
    __param(0, rest_1.param.path.string('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharityController.prototype, "findCharitybyName", null);
CharityController = __decorate([
    __param(0, repository_1.repository(repositories_1.CharityRepository)),
    __metadata("design:paramtypes", [typeof (_a = typeof repositories_1.CharityRepository !== "undefined" && repositories_1.CharityRepository) === "function" && _a || Object])
], CharityController);
exports.CharityController = CharityController;
var _a;
//# sourceMappingURL=charity.controller.js.map