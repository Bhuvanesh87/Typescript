interface UserInterface
{
    name:string;
    email:string;
    age:number;
    register();
    payInvoice();
}


class User1 implements UserInterface
{
    name:string;
    email:string;
    age:number;
    constructor(name:string,email:string, age:number)
    {
        this.name=name;
        this.email=email;
        this.age=age;
        console.log('user created : '+this.name);
    }
    register()
    {
        console.log(this.name +" is now registered");
    }
    payInvoice()
    {
        console.log(this.name+ " paid invoice");
    }

}
class Member1 extends User1
{
    id:number;
    constructor(id:number,name :string,email:string,age:number)
    {
        super(name,email,age);
        this.id=id;
    }
    payInvoice()
    {
        super.payInvoice()
    }
}


var bhuvan=new Member1(1,'Bhuvanesh Arveti','bhuvanesh.arveti@gmail.com',28);
console.log("S.No :"+bhuvan.id+", Name : "+bhuvan.name+ " , Email : "+bhuvan.email+", Age : "+bhuvan.age);