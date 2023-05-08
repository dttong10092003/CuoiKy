// $(document).ready(function() {

//

let stt = 0;

function checkMa(){
    //const maThanhVien = document.getElementById("mathanhvien");
    const maThanhVien = $("#mathanhvien").val();
    if (!maThanhVien) {
        $(".ma-mes").html("Không được bỏ trống");
        return false;
    }
    const regex = /^K17-[0-9]{9}$/;
    if (regex.test(maThanhVien)) {
        $(".ma-mes").html("*");
        return true;
    }else{
        $(".ma-mes").html("Mã thành viên có dạng K17-xxxxxxxxx");
        return false;
    }
}

function checkHoTen(){
    const hoTen = $("#hoten").val();
    if (!hoTen) {
        $(".hoten-mes").html("Không được bỏ trống");
        return false;
    }
    const regex = /^[A-Z][a-z]+( [A-Z][a-z]+)+$/;
    if (regex.test(hoTen)) {
        $(".hoten-mes").html("*");
        return true;
    }
    else{
        $(".hoten-mes").html("Họ tên có dạng Tran Anh Dung");
    }
}

function checkLop(){
    const lop = $("#lop").val();
    if (!lop) {
        $(".lop-mes").html("Không được bỏ trống");
        return false;
    }
    const regex = /^[A-Z0-9]{11}$/;
    if (regex.test(lop)) {
        $(".lop-mes").html("*");
        return true;
    }
    else{
        $(".lop-mes").html("Lớp gồm 11 kí tự có chữ và số");
        return false;
    }
}

function checkNgayThamGia(){
    const ngay = new Date($("#ngaythamgia").val());
    const currentDate = new Date();
    if (!ngay) {
        $(".ngay-mes").html("Không được bỏ trống");
        return false;
    }
    currentDate.setDate(currentDate.getDate() + 30);

    if (ngay > currentDate) {
        $(".ngay-mes").html("*");
        return true;
    }else{
        $(".ngay-mes").html("Ngày tham gia phải sau ngày hiện tại 30 ngày");
        return false;
    }
}

function checkSDT(){
    const sdt = $("#sdt").val();
    if (!sdt) {
        $(".sdt-mes").html("Không được bỏ trống");
        return false;
    }
    const regex = /^0[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
    if (regex.test(sdt)) {
        $(".sdt-mes").html("*");
        return true;
    }
    else{
        $(".sdt-mes").html("Số điện thoại có dạng 0xxx-xxx-xxx");
        return false;
    }
}

function checkEmail(){
    const email = $("#email").val();
    if (!email) {
        $(".email-mes").html("Không được bỏ trống");
        return false;
    }
    const regex = /^[a-zA-Z][a-zA-Z0-9]+@iuh\.edu\.vn$/;
    if (regex.test(email)) {
        $(".email-mes").html("*");
        return true;
    }
    else{
        $(".email-mes").html("Email có dạng xxxxx@iuh.edu.vn");
        return false;
    }
}

$("#mathanhvien").blur(checkMa);
$("#hoten").blur(checkHoTen);
$("#lop").blur(checkLop);
$("#ngaythamgia").blur(checkNgayThamGia);
$("#sdt").blur(checkSDT);
$("#email").blur(checkEmail);

$("#form").submit((e) => e.preventDefault());

function themMoi(){
    const ma = $("#mathanhvien").val();
    const hoTen = $("#hoten").val();
    const lop = $("#lop").val();
    const ngay = $("#ngaythamgia").val();
    const sdt = $("#sdt").val();
    const email = $("#email").val();


    stt++;
    const addNew = "<tr><td>" + stt
    + "</td><td>" + ma + "</td><td>"
    + hoTen + "</td><td>" + lop 
    + "</td><td>" + ngay + "</td><td>"
    + sdt + "</td><td>" + email + "</td></tr>"

    $("#tbody").append(addNew);
}

function reset(){
    $("#mathanhvien").val("");
    $("#hoten").val("");
    $("#lop").val("");
    $("#ngaythamgia").val("");
    $("#sdt").val("");
    $("#email").val("");

    $("#modal").modal("hide");
}

//Submit nút LƯU
$("#btn-submit").click(() =>{
    const ma = checkMa();
    const hoTen = checkHoTen();
    const lop = checkLop();
    const ngay = checkNgayThamGia();
    const sdt = checkSDT();
    const email = checkEmail();

    if (ma && hoTen && lop && ngay && sdt && email) {
        themMoi();
        reset();
    }
})



