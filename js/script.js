let eventType = prompt("what kind of event are you going to");
let tempFahr = prompt("what's the temperature");


if(eventType === "formal") {
    console.log("you should wear a suit");
}else if(eventType==="semi-formal") {
    console.log("you should wear a polo");
}else if(eventType=== "casual") {
    console.log("you should wear something comfy");
}
if (tempFahr > 70) {
    console.log("you should not wear a jacket");

}else if(tempFahr <= 70 && tempFahr >= 54) {
    console.log("wear a jacket");

}else if(tempFahr <54) {
    console.log("wear a coat");
}

let result = 