function checkTextField(field) {
    if (field.value === "") {
        document.getElementById("thongbao").innerText = "Chưa nhập số";
        return false;
    }
    document.getElementById("thongbao").innerText = "";
    return true;
}

function clearResult() {
    document.getElementById("ketqua").value = "";
}
function calculate() {
    if (checkTextField(document.getElementById("sothunhat")) && checkTextField(document.getElementById("sothuhai"))) 
    {
        var sothunhat = parseFloat(document.getElementById("sothunhat").value);
        var sothuhai = parseFloat(document.getElementById("sothuhai").value);
        var radios = document.getElementsByName('toantu');
        var toantu;

        for (var i = 0, length = radios.length; i < length; i++)
        {
            if (radios[i].checked)
            {
                toantu = radios[i].value;
            }
        }

        var ketqua;

        switch(toantu) {
            case "cong":
                ketqua = sothunhat + sothuhai;
                
                break;
            case "tru":
                ketqua = sothunhat - sothuhai;
                break;
            case "nhan":
                ketqua = sothunhat * sothuhai;
                break;
            case "chia":
                if (sothuhai != 0) {
                    ketqua = sothunhat / sothuhai;
                    break;
                }
                document.getElementById("thongbao").innerText = "Không chia được cho 0";
                return;
        }
        document.getElementById("ketqua").value = ketqua;
    }
}