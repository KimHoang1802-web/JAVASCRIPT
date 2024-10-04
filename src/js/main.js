// Bài tập 1: Tính lương nhân viên
let formLogin = document.querySelector("#myForm");
    formLogin.onsubmit = function(event){
        let nameNV = document.querySelector("#name").value;

        let luong1Ngay = document.querySelector("#luong1Ngay").value;

        let soNgayLam = document.querySelector("#soNgayLam").value;
        event.preventDefault();

        LuongNV = luong1Ngay * soNgayLam;

        document.querySelector("#result").innerHTML = "Lương của nhân viên: " + nameNV + " " + "là "+ LuongNV;
    }

// Bài tập 2: Tính điểm trung bình
let formLogin2 = document.querySelector("#myForm2");
    formLogin2.onsubmit = function(event){
        let So1 = document.querySelector("#So1").value;
        let So2 = document.querySelector("#So2").value;
        let So3 = document.querySelector("#So3").value;
        let So4 = document.querySelector("#So4").value;
        let So5 = document.querySelector("#So5").value;
        event.preventDefault();

        diemTB = (parseFloat(So1) +parseFloat(So2) + parseFloat(So3) + parseFloat(So4) + parseFloat(So5)) / 5;

        document.querySelector("#result2").innerHTML = "Trung bình của 5 số là: " + diemTB;
    }


// Bài tập 3: Tính chu vi và diện tích Hình Chữ Nhật
let formLogin3 = document.querySelector("#myForm3");
    formLogin3.onsubmit = function(event){
        let chieuDai = document.querySelector("#chieuDai").value;
        let chieuRong = document.querySelector("#chieuRong").value;
        event.preventDefault();

        chuViHCN = (parseFloat(chieuDai) + parseFloat(chieuRong))*2;
        dienTichHCN = parseFloat(chieuDai) * parseFloat(chieuRong);

        document.querySelector("#result4").innerHTML = "Chu vi Hình Chữ Nhật là: " + chuViHCN;
        document.querySelector("#result5").innerHTML = "Diện tích Hình Chữ Nhật là: " + dienTichHCN;
    }

// Bài tập 4: Quy đổi tiền tệ
let formLogin4 = document.querySelector("#myForm4");
    formLogin4.onsubmit = function(event){
        let giatriUSD = document.querySelector("#giatriUSD").value;
        let soLuong = document.querySelector("#soLuong").value;
        event.preventDefault();

        tongSoTien = parseFloat(giatriUSD) * parseFloat(soLuong);

        document.querySelector("#result6").innerHTML = "Tổng số tiền Việt nhận được là: " + " " + tongSoTien;
    }