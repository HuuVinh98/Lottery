//Lấy dữ liệu vé đã mua
let boughtHTML = "";
let bought = document.getElementById("bought");
let ticket = localStorage.getItem('ticket');
ticket = ticket.split(",");
for (let i = 0; i < ticket.length; i++) {
    let code = `
        <div class="ticketImg">
            <p style="color:blue;">VIP PRO</P>
            <p>${ticket[i]}</p>
        </div>`;
    boughtHTML += code;
    bought.innerHTML = boughtHTML;
}
//xin số ngẫu nhiên từ 0-9
function getRandom() {
    return Math.floor(Math.random() * (9 - 0)) + 0;
}
//giá trị khởi tạo
let prize = 9;
let times = 1;
//hàm reset bảng hiển thị
function resetTable() {
    number1.innerHTML = 0;
    number2.innerHTML = 0;
    number3.innerHTML = 0;
    number4.innerHTML = 0;
    number5.innerHTML = 0;
    number6.innerHTML = 0;
}
//khai báo biến cho màn hình kết quả
let number1 = document.getElementById("x1");
let number2 = document.getElementById("x2");
let number3 = document.getElementById("x3");
let number4 = document.getElementById("x4");
let number5 = document.getElementById("x5");
let number6 = document.getElementById("x6");
let getPrize = document.getElementById("prize");
let getTimes = document.getElementById("times");
//khai báo biến cho bảng dò kết quả xổ số
let prize0 = document.getElementById("prize0");
let prize1 = document.getElementById("prize1");
let prize2 = document.getElementById("prize2");
let prize3 = document.getElementById("prize3");
let prize4 = document.getElementById("prize4");
let prize5 = document.getElementById("prize5");
let prize6 = document.getElementById("prize6");
let prize7 = document.getElementById("prize7");
let prize8 = document.getElementById("prize8");
let result = [];
function action() {
    if (ticket[0] == "") {
        alert("Vui lòng mua vé số!");
    }
    else {
        prize -= 1;
        switch (prize) {
            case 8:
                {
                    getPrize.innerHTML = "Tám";
                    getTimes.innerHTML = "0/1";
                    let iv = setTimeout(() => {
                        getTimes.innerHTML = "1/1";
                        let x1 = getRandom();
                        let x2 = getRandom();
                        number1.innerHTML = x1;
                        number2.innerHTML = x2;
                        prize8.innerHTML = x2 + "" + x1;
                        let num = x2 + "" + x1;
                        let tempResult = {};
                        tempResult["prize"] = prize;
                        tempResult["value"] = num;
                        tempResult['time'] = 1;
                        result.push(tempResult);
                    }, 3000);

                    break;
                }
            case 7:
                {
                    resetTable();
                    getPrize.innerHTML = "Bảy";
                    getTimes.innerHTML = "0/1";
                    let iv = setTimeout(() => {
                        getTimes.innerHTML = "1/1";
                        let x1 = getRandom();
                        let x2 = getRandom();
                        let x3 = getRandom();
                        number1.innerHTML = x1;
                        number2.innerHTML = x2;
                        number3.innerHTML = x3;
                        prize7.innerHTML = x3 + "" + x2 + "" + x1;
                        let num = x3 + "" + x2 + "" + x1;
                        let tempResult = {};
                        tempResult["prize"] = prize;
                        tempResult["value"] = num;
                        tempResult['time'] = 1;
                        result.push(tempResult);
                    }, 3000);
                    break;
                }
            case 6:
                {
                    resetTable();
                    getPrize.innerHTML = "Sáu";
                    getTimes.innerHTML = "0/3";
                    prize6.innerHTML = "";
                    let count = 1;
                    let iv = setInterval(() => {
                        getTimes.innerHTML = count + "/3";
                        let x1 = getRandom();
                        let x2 = getRandom();
                        let x3 = getRandom();
                        let x4 = getRandom();
                        number1.innerHTML = x1;
                        number2.innerHTML = x2;
                        number3.innerHTML = x3;
                        number4.innerHTML = x4;
                        let temp = x4 + "" + x3 + "" + x2 + "" + x1;
                        prize6.innerHTML += temp + " ";
                        let num = x4 + "" + x3 + "" + x2 + "" + x1;
                        let tempResult = {};
                        tempResult["prize"] = prize;
                        tempResult["value"] = num;
                        tempResult['time'] = count;
                        result.push(tempResult);
                        count++;
                        if (count == 4) clearInterval(iv);
                    }, 3000);
                    break;
                }
            case 5:
                {
                    resetTable();
                    getPrize.innerHTML = "Năm";
                    getTimes.innerHTML = "0/1";
                    let iv = setTimeout(() => {
                        getTimes.innerHTML = "1/1";
                        let x1 = getRandom();
                        let x2 = getRandom();
                        let x3 = getRandom();
                        let x4 = getRandom();
                        number1.innerHTML = x1;
                        number2.innerHTML = x2;
                        number3.innerHTML = x3;
                        number4.innerHTML = x4;
                        prize5.innerHTML = x4 + "" + x3 + "" + x2 + "" + x1;
                        let num = x4 + "" + x3 + "" + x2 + "" + x1;
                        let tempResult = {};
                        tempResult["prize"] = prize;
                        tempResult["value"] = num;
                        tempResult['time'] = 1;
                        result.push(tempResult);
                    }, 3000)

                    break;
                }
            case 4:
                {
                    resetTable();
                    prize4.innerHTML = "";
                    getPrize.innerHTML = 'Tư';
                    getTimes.innerHTML = "0/7";
                    let count = 1;
                    let iv = setInterval(() => {
                        getTimes.innerHTML = count + "/7";
                        let x1 = getRandom();
                        let x2 = getRandom();
                        let x3 = getRandom();
                        let x4 = getRandom();
                        let x5 = getRandom();
                        number1.innerHTML = x1;
                        number2.innerHTML = x2;
                        number3.innerHTML = x3;
                        number4.innerHTML = x4;
                        number5.innerHTML = x5;
                        let temp = x5 + "" + x4 + "" + x3 + "" + x2 + "" + x1;
                        prize4.innerHTML += temp + " ";
                        let num = x5 + "" + x4 + "" + x3 + "" + x2 + "" + x1;
                        let tempResult = {};
                        tempResult["prize"] = prize;
                        tempResult["value"] = num;
                        tempResult['time'] = count;
                        result.push(tempResult);
                        count++;
                        if (count == 8) clearInterval(iv);
                    }, 3000);
                    break;
                }
            case 3:
                {
                    resetTable();
                    prize3.innerHTML = "";
                    getTimes.innerHTML = "0/2";
                    getPrize.innerHTML = "Ba";
                    let count = 1;
                    let iv = setInterval(() => {
                        getTimes.innerHTML = count + "/2";
                        let x1 = getRandom();
                        let x2 = getRandom();
                        let x3 = getRandom();
                        let x4 = getRandom();
                        let x5 = getRandom();
                        number1.innerHTML = x1;
                        number2.innerHTML = x2;
                        number3.innerHTML = x3;
                        number4.innerHTML = x4;
                        number5.innerHTML = x5;
                        let temp = x5 + "" + x4 + "" + x3 + "" + x2 + "" + x1;
                        prize3.innerHTML += temp + " ";
                        let num = x5 + "" + x4 + "" + x3 + "" + x2 + "" + x1;
                        let tempResult = {};
                        tempResult["prize"] = prize;
                        tempResult["value"] = num;
                        tempResult['time'] = count;
                        result.push(tempResult);
                        count++;
                        if (count == 3) clearInterval(iv);
                    }, 3000);
                    break;

                }
            case 2:
                {
                    resetTable();
                    getPrize.innerHTML = "Nhì";
                    getTimes.innerHTML = "0/1";
                    let iv = setTimeout(() => {
                        getTimes.innerHTML = "1/1";
                        let x1 = getRandom();
                        let x2 = getRandom();
                        let x3 = getRandom();
                        let x4 = getRandom();
                        let x5 = getRandom();
                        number1.innerHTML = x1;
                        number2.innerHTML = x2;
                        number3.innerHTML = x3;
                        number4.innerHTML = x4;
                        number5.innerHTML = x5;
                        prize2.innerHTML = x5 + "" + x4 + "" + x3 + "" + x2 + "" + x1;
                        let num = x5 + "" + x4 + "" + x3 + "" + x2 + "" + x1;
                        let tempResult = {};
                        tempResult["prize"] = prize;
                        tempResult["value"] = num;
                        tempResult['time'] = count;
                        result.push(tempResult);
                    }, 3000);
                    break;
                }
            case 1:
                {
                    resetTable();
                    getPrize.innerHTML = "Nhất";
                    getTimes.innerHTML = "0/1";
                    let iv = setTimeout(() => {
                        getTimes.innerHTML = "1/1";
                        let x1 = getRandom();
                        let x2 = getRandom();
                        let x3 = getRandom();
                        let x4 = getRandom();
                        let x5 = getRandom();
                        number1.innerHTML = x1;
                        number2.innerHTML = x2;
                        number3.innerHTML = x3;
                        number4.innerHTML = x4;
                        number5.innerHTML = x5;
                        prize1.innerHTML = x5 + "" + x4 + "" + x3 + "" + x2 + "" + x1;
                        let num = x5 + "" + x4 + "" + x3 + "" + x2 + "" + x1;
                        let tempResult = {};
                        tempResult["prize"] = prize;
                        tempResult["value"] = num;
                        tempResult['time'] = 1;
                        result.push(tempResult);
                    }, 3000);

                    break;
                }
            case 0:
                {
                    resetTable();
                    getPrize.innerHTML = "Độc Đắc!";
                    getTimes.innerHTML = "0/1";
                    let iv = setTimeout(() => {
                        getTimes.innerHTML = "1/1";
                        let x1 = getRandom();
                        let x2 = getRandom();
                        let x3 = getRandom();
                        let x4 = getRandom();
                        let x5 = getRandom();
                        let x6 = getRandom();
                        number1.innerHTML = x1;
                        number2.innerHTML = x2;
                        number3.innerHTML = x3;
                        number4.innerHTML = x4;
                        number5.innerHTML = x5;
                        number6.innerHTML = x6;
                        prize0.innerHTML = x6 + "" + x5 + "" + x4 + "" + x3 + "" + x2 + "" + x1;
                        let num = x6 + "" + x5 + "" + x4 + "" + x3 + "" + x2 + "" + x1;
                        let tempResult = {};
                        tempResult["prize"] = prize;
                        tempResult["value"] = num;
                        tempResult['time'] = 1;
                        result.push(tempResult);
                        bought.innerHTML = boughtHTML + `<button onclick="autoCheck()">Dò Kiểu Khuyết Tật</button>`;
                    }, 3000);

                    break;
                }
            default:
                {
                    getPrize.innerHTML = 0;
                    getTimes.innerHTML = 0;
                    let x1 = 0;
                    let x2 = 0;
                    let x3 = 0;
                    let x4 = 0;
                    let x5 = 0;
                    let x6 = 0;
                    number1.innerHTML = x1;
                    number2.innerHTML = x2;
                    number3.innerHTML = x3;
                    number4.innerHTML = x4;
                    number5.innerHTML = x5;
                    number6.innerHTML = x6;
                }

        }
    }

    localStorage.clear();
}
function autoCheck() {
    let sumPrize = [];
    let sumMoney = 0;
    for (let i of result) {
        switch (i.prize) {
            case "Tám":
                {
                    for (let j of ticket) {

                        if (j.substring(4, 6) == i.value) {
                            sumPrize.push(i.prize);
                            sumMoney += 100;
                        }
                    }
                    break;
                }
            case "Bảy":
                {
                    for (let j of ticket) {

                        if (j.substring(3, 6) == i.value) {
                            sumPrize.push(i.prize);
                            sumMoney += 200;
                        }
                    }
                    break;
                }
            case "Sáu":
                {
                    for (let j of ticket) {

                        if (j.substring(2, 6) == i.value) {
                            sumPrize.push(i.prize);
                            sumMoney += 400;
                        }
                    }
                    break;
                }
            case "Năm":
                {
                    for (let j of ticket) {

                        if (j.substring(2, 6) == i.value) {
                            sumPrize.push(i.prize);
                            sumMoney += 1000;
                        }
                    }
                    break;
                }
            case "Tư":
                {
                    for (let j of ticket) {

                        if (j.substring(1, 6) == i.value) {
                            sumPrize.push(i.prize);
                            sumMoney += 3000;
                        }
                    }
                    break;
                }
            case "Ba":
                {
                    for (let j of ticket) {

                        if (j.substring(1, 6) == i.value) {
                            sumPrize.push(i.prize);
                            sumMoney += 10000;
                        }
                    }
                    break;
                }
            case "Nhì":
                {
                    for (let j of ticket) {

                        if (j.substring(1, 6) == i.value) {
                            sumPrize.push(i.prize);
                            sumMoney += 15000;
                        }
                    }
                    break;
                }
            case "Nhất":
                {
                    for (let j of ticket) {

                        if (j.substring(1, 6) == i.value) {
                            sumPrize.push(i.prize);
                            sumMoney += 30000;
                        }
                    }
                    break;
                }
            case "Độc Đăc!":
                {
                    for (let j of ticket) {

                        if (j.substring(0, 6) == i.value) {
                            sumPrize.push(i.prize);
                            sumMoney += 2000000;
                        }
                    }
                    break;
                }
        }
    }

    if (sumMoney != 0) {
        alert("Bạn đã trúng giải: " + sumPrize + "/n Tổng giá trị giải thưởng là: " + sumMoney);
    }
    else {
        alert("Bạn đéo trúng giải nào!ĐEN NHƯ CHÓ MỰC")
    }

}

