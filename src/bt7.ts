function parseNumber(value:string) {
    const num = Number(value);
    if (isNaN(num)) {
        console.log("Chuỗi chứa kí tự chữ");
    }
    return num;
}

function isLetter(char:string): boolean {
    return /^[a-zA-Z]$/.test(char);
}

function processInput(input: string | number | boolean) {
    let count = 0;
    if (typeof input == "string") {
        const num = parseNumber(input);
        console.log(num);
        
        for (let char of input) {
            if (isLetter(char)) {
                count++;
            }   
        }
        console.log(`${count} kí tự chữ cái`);
    }
    if (typeof input == "number") {
        if (input < 2 || !Number.isInteger(input)) {
            console.log("Không phải số nguyên tố");
            
        }
        let flag = true;
        for (let i = 2; i < Math.sqrt(input); i++) {
            if (input % i === 0) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            console.log("Không phải số nguyên tố");
            
        }else if(flag) {
            console.log("Là số nguyên tố");
        }
    }
    if (typeof input == "boolean") {
        if (input == true) {
            console.log("Giá trị là true -> tiến hành xử lý");
            
        }else if (input == false) {
            console.log("Giá trị là false -> dừng xử lý");
            
        }
    }
}

processInput(false);