"use strict";
// ToDo: Add your code here
/**
 *  1. In ra table danh sách nhân viên
    2. Thêm nhân viên mới
    3. Tạo đối tượng nhân viên với thông tin lấy từ form người dùng nhập vào.
        Đối tượng nhân viên bao gồm các thuộc tính sau:
            +Tài khoản
            +Họ tên
            +Email
            +Mật khẩu
            +Ngày làm
            +Lương cơ bản
            +Chức vụ gồm: Giám đốc, Trưởng Phòng, Nhân Viên
            +Giờ làm trong tháng
            +Tổng lương
            +Loại nhân viên
    4. Validation
            + Tài khoản tối đa 4 - 6 ký số, không để trống
            + Tên nhân viên phải là chữ, không để trống
            + Email phải đúng định dạng, không để trống
            + mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống
            + Ngày làm không để trống, định dạng mm/dd/yyyy
            + Lương cơ bản 1 000 000 - 20 000 000, không để trống
            + Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
            + Số giờ làm trong tháng 80 - 200 giờ, không để trống
    5. Xây dựng phương thức tính tổng lương cho đối tượng nhân viên
            +nếu chức vụ là giám đốc: tổng lương = lương cơ bản * 3
            +nếu chức vụ là trưởng phòng: tổng lương = lương cơ bản * 2
            +nếu chức vụ là nhân viên: tổng lương = lương cơ bản *
    6. Xây dựng phương thức xếp loại cho đối tượng nhân viên:
            +nếu nhân viên có giờ làm trên 192h (>=192): nhân viên xuất sắc
            +nếu nhân viên có giờ làm trên 176h (>=176): nhân viên giỏi
            +nếu nhân viên có giờ làm trên 160h (>=160): nhân viên khá
            +nếu nhân viên có giờ làm dưới 160h: nhân viên trung bình
    7. Xóa nhân viên
    8. Cập nhật nhân viên (có validation)
    9. Tìm Nhân Viên theo loại (xuất săc, giỏi, khá...) và hiển thị
 */
import Employee from "./Employee.js";
import EmployeeHandle from "./EmployeeHandle.js";
let employeeHandle = new EmployeeHandle();
function displayEmployee(arrEmployee) {
  const elementTable = document.getElementById("tableDanhSach");
  let employeesTable = "";
  arrEmployee.map((employee) => {
    let trEmployee = `<tr>
        <td>${employee.tknv}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.datepicker}</td>
        <td>${employee.chucvu}</td>
        <td>${employee.tongluong}</td>
        <td>${employee.xeploai}</td>
        <td>
          <button data-toggle="modal" data-target="#myModal" class="btn btn-outline-info">Xem</button>
          <button class="btn btn-danger">Xóa</button>
        </td>
    </tr>`;
    employeesTable += trEmployee;
  });
  elementTable.innerHTML = employeesTable;
}
function setLocalStorage() {
  localStorage.setItem(
    "EmployeeList",
    JSON.stringify(employeeHandle.employees)
  );
}
function getLocalStorage() {
  const json = localStorage.getItem("EmployeeList");
  if (json) {
    employeeHandle.employees = JSON.parse(json);
    displayEmployee(employeeHandle.employees);
  }
}
function addEmployee() {
  const tknv = document.getElementById("tknv").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const datepicker = document.getElementById("datepicker").value;
  const luongCB = document.getElementById("luongCB").value;
  const chucvu = document.getElementById("chucvu").value;
  const giolam = document.getElementById("gioLam").value;
  console.log(tknv, name, email, password, datepicker, luongCB, chucvu, giolam);
  const employee = new Employee({
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    giolam,
  });
  employee.tinhLuong();
  employee.tinhXepLoai();
  console.log(employee);
  employeeHandle.addEmployee(employee);
  setLocalStorage();
  getLocalStorage();
}
window.onload = function () {
  document.getElementById("btnThemNV").onclick = addEmployee;
};
