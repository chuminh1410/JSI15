// Task 1 

class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        super(name, name)
        this.name = name;
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit");
alert(rabbit.name)

// --> Phải gọi lệnh super trước khi dùng this.
// Phải cung cấp tất cả tham số mà class parent yêu cầu, nếu dùng super thì mới gọi hàm tạo của parent class.


