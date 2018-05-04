//Fridge

function Machine(power) {
    this._power = power;
    this._enabled = false;
    var self = this;
    this.enable = function() { self._enabled = true; };
    this.disable = function() { self._enabled = false; };
}

function FridgeMachine (power) {
    Machine.apply(this, arguments);

    let food = [];
    let quantity = 0;

    this.addFood = function (...args) {
        if (!this._enabled){
            console.log("The Fridge is off, it is impossible to add ny food!");
            return;
        }

        if ((power/100 - quantity) < args.length){
            console.log("So much food can not fit in the fridge");
            return;
        }

        else {
            food.push(...args);
            quantity += args.length;
            console.log("Now Fridge contains", food);
        };
    };

    this.getFood = function () {
        let tmpArr = food.slice();
        return tmpArr;
    };

};
