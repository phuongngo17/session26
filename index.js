// console.log("hello world");
// tạo ra 1 danh sách các học sinh ở trong lớp
// let student1 = "Khánh Huyền";
// let student2 = "Minh";
// let student3 = "Trang";
// let studentN = "Toàn bộ";
// đây là 1 cách khai báo
// let studentList = new Array(student1, student2, student3, studentN);
// let numberList = [10, 21, 15, 18, 15];
// console.log(studentList);
// console.log(numberList);

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// index      0, 1, 2, 3, 4, 5, 6, 7, 8, 9  (length/size -1)

// thuoc tinh length
// console.log("Độ dài của length của mảng number: ", number.length);
// console.log(number[number.length -1]);
// console.log(number[2]);
// console.log(number[0]);


// for (let i = 0; i < number.length ; i++){
//     // i ----> 0->10
//     // number[i] ---> 1 ->10
//     console.log(`number[${i}]`, number[i]);
    
// }


// for (let numbers of number) {
//     console.log("Từng phần tử",numbers);
// }


// for (let index in number) {
//     //  index --- 0--- length -1
//     console.log(`number[${index}] `,number[index]);
// }


let student = [
    "Khánh Huyền",
    "Khắc Hưng",
    "Dũng Lớp Phó",
    "Trang",
    "Hoàng Béo",
    "Dương",
];
console.log(student);

//create-thêm vào đầu (unshift)
// student.unshift("Nam Sơn");
// console.log(student);
//create -thêm vào cuối(push)
// student.push("Duy anh");
// console.log(student);
// //create - thêm vào vị trí bất kỳ(splice)
// vị trí,xóa, thêm
// student.splice(2,0,"Bảo");
// console.log(student);

// update
// student[2] = "Dũng lao công";
// student.splice(2, 1, "Dũng lao công");
// console.log("Danh sách student sau khi cập nhật:", student);


console.log("Danh sách student trước khi bị xóa phần tử:", student);

// xóa đầu(shift)
student.shift();
console.log(student);

//xóa cuối(pop)
student.pop();
console.log(student);
// xóa tại vị trí cuối cùng(splice)

student.splice(1, 1);
console.log(student);


let text = "hello world";
text.toLowerCase();
console.log(text);