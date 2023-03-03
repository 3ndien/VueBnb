"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roomService_1 = require("../services/roomService");
const logger_1 = __importDefault(require("../utils/logger"));
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const room = yield (0, roomService_1.CreateRoomService)('Hotel');
            return res.send(room);
        }
        catch (error) {
            logger_1.default.error(error);
            return res.status(409).send(error.message);
        }
    });
}
exports.default = {
    createPost
};
//# sourceMappingURL=postController.js.map