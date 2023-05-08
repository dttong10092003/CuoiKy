
let stt = 0;

function checkMa(){
    const maDocGia = $("#madocgia").val();
    if(!maDocGia){
        $(".ma-mes").html("Không được bỏ trống");
        return false;
    }
    const regex = /^DG[0-9]{3}(11|22|33)$/;
    if (regex.test(maDocGia)) {
        $(".ma-mes").html("*");
        return true;
    }else{
        $(".ma-mes").html("Mã độc giả theo dạng DGXXXYY (X là số, YY có dạng 11,22,33)");
        return false;
    }
}

function checkDiaChi(){
    const diaChi = $("#diachi").val();
    if (!diaChi) {
        $(".diachi-mes").html("Không được bỏ trống");
        return false;
    }
    return true;
}

function checkKyHan(){
    const kyHan = $("#kyhan").val();
    if (kyHan === "3 tháng") {
        $("#dongia").val(300000);
    }else if (kyHan === "6 tháng") {
        $("#dongia").val(500000);
    }else if (kyHan === "1 năm") {
        $("#dongia").val(800000);
}
}

$("#kyhan").blur(checkKyHan);
$("#madocgia").blur(checkMa);
$("#diachi").blur(checkDiaChi);

$("#form").submit((e) => e.preventDefault());

function themMoi(){
    var loaiBao="";
    if ($("#hangngay").prop("checked")) {
        loaiBao = $("#hangngay").val();
    }
    else if ($("#chunhat").prop("checked")) {
        loaiBao = $("#chunhat").val();
    }
    else if ($("#cuoi").prop("checked")) {
        loaiBao = $("#cuoi").val();
    }
    const kyHan = $("#kyhan").val();
    const donGia = $("#dongia").val();
    const maDocGia = $("#madocgia").val();
    const diaChi = $("#diachi").val();
    var thanhToan = "";
    if ($("#chuyenkhoan").prop("checked")) {
        thanhToan = $("#chuyenkhoan").val();
    }
    else{
        thanhToan = $("#momo").val();
    }

    stt++;

    const addNew = "<tr><td>" + stt
    + "</td><td>" + loaiBao + "</td><td>"
    + kyHan + "</td><td>" + donGia
    + "</td><td>" + maDocGia + "</td><td>" 
    + diaChi + "</td><td>" + thanhToan + "</td></tr>"

    $("#tbody").append(addNew);

}

function reset(){
    $("#madocgia").val("");
    $("#diachi").val("");
    

    $("#modal").modal("hide");
}

$("#btn-submit").click(()=>{
    const ma = checkMa();
    const diaChi = checkDiaChi();

    if (ma && diaChi) {
        themMoi();
        reset();
        console.log(stt);
        $("#tong").val(stt);
    }
})
