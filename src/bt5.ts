type Person =  {
    name: string,
    age: number
};

type Employee = {
    employeeId: string,
    department: string,
};

type StaffMember = Person & Employee

const user: StaffMember = {
    name: "Huy",
    age: 19,
    employeeId: "EMP001",
    department: "Kế toán"
}

function printStaffMember(user:StaffMember): void {
    console.log(`Nhân viên ${user.name} (${user.age} tuổi), Mã nhân viên ${user.employeeId} - Phòng ${user.department}`);
    
}

printStaffMember(user);

