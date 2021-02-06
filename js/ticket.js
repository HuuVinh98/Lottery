localStorage.clear();
let ticket = [];
localStorage.setItem('ticket', ticket)
let coin = 50;
let setCoin = document.getElementById("coin");
setCoin.innerHTML = coin + ".000 VND";
let buyListHTML = "";
//Kiểm tra chuỗi có phải toàn số hay không
function checkTicket(str) {
    if (str.length !== 6) return false;
    for (let s of str) {
        if ((s.charCodeAt() < 48) || (s.charCodeAt() > 57)) {
            return false;
        }
    }
    return true;
}
//hàm mua vé
function buyTicket() {
    let getTicket = document.getElementById("buyTicket").value;
    if (checkTicket(getTicket) == true && coin > 0) {
        ticket.push(getTicket);
        coin -= 10;
        setCoin.innerHTML = coin + ".000 VND";
        let code = `
        <div class="ticketImg">
            <p style="color:blue;">VIP PRO</P>
            <p>${getTicket}</p>
        </div>`;
        buyListHTML += code;
        document.getElementById("buyList").innerHTML = buyListHTML;
    }
    else if (coin < 10) {
        alert("Không đủ tiền, vui lòng dừng mua vé số!");
    }
    else {
        alert("Vui lòng nhập 6 con số!");
    }
    localStorage.setItem("ticket", ticket);
    console.log(localStorage.getItem('ticket'));
}

