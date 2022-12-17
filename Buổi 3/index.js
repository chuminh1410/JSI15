// object, class
// properties, inherit

// Đối tượng là sự vật trong thực tế được em đưa vào code

BanNam = {
    name:'Nam',
    age: 16,
    className:'11A5'

}

// Class là một tập hợp các đối tượng có chung thuộc tính 

BanNam = {
    name:'Nam',
    age: 16,
    className:'11A5',
    JobTitle:'police',

}

BanMinh = {
    name:'Minh',
    age: 17,
    className:'12A4',

}

BanDuc = {
    name:'Tuan',
    age: 16,
    className:'11A2',

}

// 3 đối tượng này thuộc class student gồm name, age, className

class Student {
    constructor(name, age, className) {
      this.name = name;
      this.age = age;
      this.className = className;
    }
  }

// Gọi constructor
// Constructor tạo một đối tượng 
// Đối tượng này thuộc lớp student 
// Gắn các giá trị cho đối tượng
// Trả về đối tượng


// Class là khuôn đúc
// Biến truyền vào là nguyên liệu đúc
// Object là đồ được đúc ra
// Kế thừa là đúc lần nữa, hay gắn thêm

var banNam = new Student('Nam',18,'11A5')
console.log(banNam)

// Người có tên, tuổi, năm sinh, giới tính
// Giáo viên kế thừa con người và có thêm lớp dạy
// Công an kế thừa con người và có thêm chức vụ

// 1000 Giáo viên
// 1000 Công an
// Thêm giới tính