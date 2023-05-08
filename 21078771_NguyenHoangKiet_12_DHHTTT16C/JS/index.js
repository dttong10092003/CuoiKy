$(document).ready(function() {
    let stt = 0;
    const checkTen = () => {
        if (!$("#ten").val()) {
            $(".ten-mes").html("Không được trống");
            return false;
        }
        const regex =
            /(^[A-Z]{1})([a-záàảãạấầẩẫậăắằẳẵéèẻẽẹíìỉĩịêếềểễệúùủũụóòỏõọốồổỗộ]+)(\s{1}[A-Z]{1}([a-záàảãạấầẩẫậăắằẳẵéèẻẽẹíìỉĩịêếềểễệúùủũụóòỏõọốồổỗộ]+)){1,}$/;
        if (regex.test($("#ten").val())) {
            $(".ten-mes").html("(*)");
            return true;
        } else {
            $(".ten-mes").html("Họ tên không hợp lệ");
            return false;
        }
    };
    const checkSdt = () => {
        if (!$("#sdt").val()) {
            $(".sdt-mes").html("Không được trống");
            return false;
        }
        const regex = /[0-9]{10}$/;
        if (regex.test($("#sdt").val())) {
            $(".sdt-mes").html("(*)");
            return true;
        } else {
            $(".sdt-mes").html("Số điện thoại không hợp lệ");
            return false;
        }
    };
    const checkDiachi = () => {
        if (!$("#diachi").val()) {
            $(".diachi-mes").html("Không được trống");
            return false;
        }
        $(".diachi-mes").html("(*)");
        return true
    };
    const checkEmail = () => {
        if (!$("#email").val()) {
            $(".email-mes").html("Không được trống");
            return false;
        }
        const regex = /(^[A-Za-z0-9]+)@[A-Za-z]{3,}.com$/;
        if (regex.test($("#email").val())) {
            $(".email-mes").html("(*)");
            return true;
        } else {
            $(".email-mes").html("Email không hợp lệ");
            return false;
        }
    };
    const checkDuhoc = () => {
        if (!$("#duhoc").val()) {
            $(".duhoc-mes").html("Không được trống");
            return false;
        }
        const regex = /[0-9]{4}$/;
        if (regex.test($("#duhoc").val())) {
            const value = parseInt($("#duhoc").val());
            if (value > 2022) {
                $(".duhoc-mes").html("(*)");
                return true;
            } else {
                $(".duhoc-mes").html("Năm du học phải lớn hơn năm 2022");
                return false;
            }
        } else {
            $(".duhoc-mes").html("Năm du học không hợp lệ");
            return false;
        }
    };
    $("#ten").blur(checkTen);
    $("#sdt").blur(checkSdt);
    $("#email").blur(checkEmail);
    $("#duhoc").blur(checkDuhoc);
    $("#form").submit((e) => e.preventDefault());
    const handleAddNew = () => {
        const ten = $("#ten").val();
        const sdt = $("#sdt").val();
        const email = $("#email").val();
        const diachi = $("#diachi").val();
        const duhoc = $("#duhoc").val();
        const tuvan = $('input[name="tuvan"]:checked').val();
        stt++;
        const addnew =
            "<tr><td>" +
            stt +
            "</td><td>" +
            ten +
            "</td><td>" +
            sdt +
            "</td><td>" +
            email +
            "</td><td>" +
            diachi +
            "</td><td>" +
            duhoc +
            "</td><td>" +
            tuvan +
            "</td></tr>";
        $("#tbody").append(addnew);
    };
    const handleReset = () => {
        $("#ten").val("Nguyễn Kiệt");
        $("#sdt").val("");
        $("#email").val("");
        $("#diachi").val("");
        $("#duhoc").val("");
        $("#modal").modal("hide");
    };
    $("#btn-submit").click(() => {
        const ten = checkTen();
        const sdt = checkSdt();
        const diachi = checkDiachi()
        const email = checkEmail();
        const duhoc = checkDuhoc();
        if (ten && sdt && email && duhoc && diachi) {
            handleAddNew();
            handleReset();
        }
    });
});