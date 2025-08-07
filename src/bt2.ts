let students: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3]

let sum: number = 0;
let average: number = 0;

for (const element of students) {
    sum += element;
    average = (sum/students.length);
}

console.log(`Diem trung binh: ${average}`);
