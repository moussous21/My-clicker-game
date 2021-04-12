// JavaScript source code
var x = 1;
var golds = 0;
golds = parseInt(localStorage.getItem('gold'));
var gps = 0;
var getgps = 1;
var tID;
var amount = 0;
var count = 0;
var neah = 0;
function addGold(x) {
    golds = golds + x;
    displayGolds();
}
function displayGolds() {
    document.getElementById("gold").innerText = golds + " Gold";
    save();
}
function save() {
    window.onUnload = Storage_gold();
}
function gold_second() {
    document.getElementById("gold").value = gps;
    gps = gps + 1;
    golds = golds + gps;
    gps = 0;
    getGPS();
    setTimeout(gold_second, 1000);
    displayGolds();
}
window.onload = function () { gold_second(); animateScript(); };
var minions = [
    { id: 1, name: "Slime", cost: 1, gps: 0.1, owned: 0 },
    { id: 2, name: "Undead", cost: 100, gps: 1, owned: 0 },
    { id: 3, name: "Imp", cost: 500, gps: 5, owned: 0 }
];
minions[0].cost = Number(localStorage.getItem("slime_cost"));
minions[0].gps = Number(localStorage.getItem("slime_gps"));
minions[0].owned = Number(localStorage.getItem("slime_owned"));
minions[1].cost = Number(localStorage.getItem("Undead_cost"));
minions[1].gps = Number(localStorage.getItem("Undead_gps"));
minions[1].owned = Number(localStorage.getItem("Undead_owned"));
minions[2].cost = Number(localStorage.getItem("Imp_cost"));
minions[2].gps = Number(localStorage.getItem("Imp_gps"));
minions[2].owned = Number(localStorage.getItem("Imp_owned"));
function getGPS() {
    minions.forEach(function (minion) {
        getgps = getgps + minion.gps * minion.owned;
    }
    );
    displayGPS();
    gps = gps + (getgps - 1);
    getgps = 1;
}
function displayGPS() {
    document.getElementById("gps").innerText = getgps + "GPS";
    storage();
    description();
}
function buyMinion(id) {

    minions.forEach(function (minion) {
        if (minion.id == id && minion.cost <= golds) {
            golds = golds - minion.cost;
            minion.owned = minion.owned + 1;
            minion.cost = minion.cost * 1.15;
            count = count + 1;

        }
        else if (minion.id == id && minion.cost > golds) {
            alert("You need more gold")
        }
        if (minion.id == id && minion.owned == 25 || minion.owned == 50 || minion.owned == 100 || minion.owned == 250 || minion.owned == 1000) {
            minion.gps = minion.gps * 2;
            localStorage.setItem("slime_gps", minions[0].gps);
            localStorage.setItem("Undead_gps", minions[1].gps);
            localStorage.setItem("Imp_gps", minions[2].gps);
        }
        amount = amount + minion.owned;
        if (count == 50) {
            x = x * 2;
            count = 0;

        }
    }
    );
    localStorage.setItem("slime_cost", minions[0].cost);
    localStorage.setItem("slime_owned", minions[0].owned);
    localStorage.setItem("Undead_cost", minions[1].cost);
    localStorage.setItem("Undead_owned", minions[1].owned);
    localStorage.setItem("Imp_cost", minions[2].cost);
    localStorage.setItem("Imp_owned", minions[2].owned);
    amount = 0;
}
function animateScript() {
    var position = 135;
    const interval = 200;
    const diff = 125;
    tID = setInterval(() => {
        document.getElementById("image").style.backgroundPosition = `-${position}px 0px`;
        if (position < 810) { position = position + diff; }
        else { position = 135; }
    }, interval);
}
function Storage_gold() {
    localStorage.setItem('gold', golds);
}
function storage() {
    localStorage.setItem("slime_cost", minions[0].cost);
    localStorage.setItem("slime_owned", minions[0].owned);
    localStorage.setItem("Undead_cost", minions[1].cost);
    localStorage.setItem("Undead_owned", minions[1].owned);
    localStorage.setItem("Imp_cost", minions[2].cost);
    localStorage.setItem("Imp_owned", minions[2].owned);
    localStorage.setItem("slime_gps", minions[0].gps);
    localStorage.setItem("Undead_gps", minions[1].gps);
    localStorage.setItem("Imp_gps", minions[2].gps);
}
function description() {
    document.getElementById("cost_smile").innerText = "cost = " + minions[0].cost;
    document.getElementById("gps_smile").innerText = "gps = " + minions[0].gps;
    document.getElementById("owned_smile").innerText = "owned = " + minions[0].owned;
    document.getElementById("cost_Undead").innerText = "cost = " + minions[1].cost;
    document.getElementById("gps_Undead").innerText = "gps = " + minions[1].gps;
    document.getElementById("owned_Undead").innerText = "owned = " + minions[1].owned;
    document.getElementById("cost_Imp").innerText = "cost = " + minions[2].cost;
    document.getElementById("gps_Imp").innerText = "gps = " + minions[2].gps;
    document.getElementById("owned_Imp").innerText = "owned = " + minions[2].owned;
}