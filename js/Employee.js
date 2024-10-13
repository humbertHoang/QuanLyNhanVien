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
    this.tongluong = this.tinhLuong();
    this.xeploai = this.tinhXepLoai();
  }

  tinhLuong() {
    return this.chucvu === "Sếp"
      ? (this.tongluong = this.luongCB * 3)
      : this.chucvu === "Trưởng phòng"
      ? (this.tongluong = this.luongCB * 2)
      : (this.tongluong = this.luongCB);
  }
  tinhXepLoai() {
    return (this.xeploai =
      this.giolam >= 192
        ? "Xuất sắc"
        : this.giolam >= 176
        ? "Giỏi"
        : this.giolam >= 160
        ? "Khá"
        : "Trung bình");
  }
}
