//classes
var payment = /** @class */ (function () {
    function payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    //create method
    payment.prototype.format = function () {
        return "".concat(this.recipient, " owes ").concat(this.amount, " for ").concat(this.details);
    };
    return payment;
}());
export { payment };
