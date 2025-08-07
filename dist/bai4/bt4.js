"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleUnionType(a) {
    if (typeof a == "string") {
        console.log(`${a.length} kí tự`);
    }
    else if (typeof a == "number") {
        if (a % 2 == 0) {
            console.log("Đây là số chẵn");
        }
        else {
            console.log("Đây là số lẻ");
        }
    }
}
handleUnionType(9);
//# sourceMappingURL=bt4.js.map