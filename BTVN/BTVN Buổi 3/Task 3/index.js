// Task 3



$("#layso").submit(function (event) {
    event.preventDefault();
    const so_dau = $("#so_dau").val();
    const so_hai = $("#so_hai").val();

    const calculate = new calculate(so_dau, so_hai)
    calculate.cong()

});

class Calculate {

    constructor(so_dau, so_hai, ket_qua) {
        this.so_dau = so_dau;
        this.so_hai = so_hai;
        this.ketqua = ket_qua
    }

    cong() {
        this.ket_qua = this.so_dau + this.so_hai
        console.log(`He, I'm ${this.ket_qua}`)
    }

    tru() {
        this.ket_qua = this.so_dau - this.so_hai
        console.log(`He, I'm ${this.ket_qua}`)
    }

    nhan() {
        this.ket_qua = this.so_dau * this.so_hai
        console.log(`He, I'm ${this.ket_qua}`)
    }

    chia() {
        this.ket_qua = this.so_dau / this.so_hai
        console.log(`He, I'm ${this.ket_qua}`)
    }


}