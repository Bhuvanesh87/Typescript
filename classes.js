var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User1 = /** @class */ (function () {
    function User1(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('user created : ' + this.name);
    }
    User1.prototype.register = function () {
        console.log(this.name + " is now registered");
    };
    User1.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return User1;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User1));
var bhuvan = new Member(1, 'Bhuvanesh Arveti', 'bhuvanesh.arveti@gmail.com', 28);
console.log("S.No :" + bhuvan.id + ", Name : " + bhuvan.name + " , Email : " + bhuvan.email + ", Age : " + bhuvan.age);
