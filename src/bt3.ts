interface Student {
    name:string;
    age:number;
    email: string;
}
let students: Student = {
    name:  "Huy",
    age: 19,
    email: "123@gmail.com"
};

console.log(`Xin chào tôi tên là ${students.name}, tôi ${students.age} tuổi, email của tôi: ${students.email}`);

