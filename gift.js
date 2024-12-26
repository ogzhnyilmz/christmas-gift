function christmasGift(){
    let choose = prompt("Hediye fikrinizi belirtin.");


    if(choose){
        let gifts = JSON.parse(localStorage.getItem("gifts")) || [];
        gifts.push({choose});
        localStorage.setItem("gifts", JSON.stringify(gifts));
    }

    let gifts = JSON.parse(localStorage.getItem("gifts")) || [];

    if (gifts.length > 0) {
        let msg = gifts.map(gift => `Hediye: ${gift.choose}`).join("\n");
        alert(msg);
    }
}

christmasGift()