const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};
console.log("This is backpack function:", backpack);
console.log("This is volume of back pack: ", backpack.volume);

var volume1 = "volume"
console.log("This is volume of back pack: ", backpack[volume1]);

const zaka = {
    name: "Zaka Ullah",
    age: 38,
    height: "170cm",
    hairColor: "black",
    weight: "100kg"

},
    weight