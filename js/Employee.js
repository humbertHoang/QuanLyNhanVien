export default class Employee {
  constructor({
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    giolam,
  }) {
    this.tknv = tknv;
    this.name = name;
    this.email = email;
    this.password = password;
    this.datepicker = datepicker;
    this.luongCB = luongCB;
    this.chucvu = chucvu;
    this.giolam = giolam;
    this.tongluong = 0;
    this.xeploai = 0;
  }

  tinhLuong() {
    this.tongluong =
      this.chucvu === "Sếp"
        ? this.luongCB * 3
        : this.chucvu === "Trưởng phòng"
        ? this.luongCB * 2
        : this.luongCB;
  }
  tinhXepLoai() {
    this.xeploai =
      this.giolam >= 192
        ? "Xuất sắc"
        : this.giolam >= 176
        ? "Giỏi"
        : this.giolam >= 160
        ? "Khá"
        : "Trung bình";
  }
}
