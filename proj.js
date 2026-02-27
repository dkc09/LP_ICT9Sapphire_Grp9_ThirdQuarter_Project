let basefare = 50;    
let perKMrate = 15;    
let baseKM = 2;        

function computeFare() {

    let distance = parseFloat(document.getElementById("distance").value);
    let passengerType = document.getElementById("discountType").value;

    let totalFare;

    
    if (distance <= baseKM) {
        totalFare = basefare;
    } else {
        totalFare = basefare + ((distance - baseKM) * perKMrate);
    }

   
    if (passengerType === "discount") {
        totalFare = totalFare - (totalFare * 0.20);
    }

    
    totalFare = Math.round(totalFare);

    document.getElementById("result").innerHTML =
        "Total Fare: ₱" + totalFare;
}