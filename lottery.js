var moneyleft= 1000001;
var lottoCost= 100000;
var lottoWins= 10000;

document.getElementById("money-left").innerHTML=  moneyleft;

function lotteryNumberPicker() {
    var randNum= Math.random();
    randNum= randNum * 10;
    randNum= randNum + 1;
    randNum= Math.floor (randNum);
    document.getElementById("lotto-number").innerHTML= randNum ;
    
    return randNum;
}

function userNumberPicker() {
    var userNum= prompt ("What number would you like?");
    document.getElementById("user-number").innerHTML= userNum;
    return userNum;
}

function didUserWin (usernum, lottoNum) {
    
    return userNum== lottoNum
}

function purchaseTicket(){
    moneyleft= moneyleft- lottoCost
    document.getElementById("money-left").innerHTML=  moneyleft;
}

function winner(){
    moneyleft= moneyleft + lottoWins;
    document.getElementById("money-left").innerHTML=  moneyleft;
}

function lotteryGo () {
    purchaseTicket();
    var userNum= userNumberPicker();
    var lottonum= lotteryNumberPicker();
    if (didUserWin(userNum, lottonum)) 
        winner();
}