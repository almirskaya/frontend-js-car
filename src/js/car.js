'use strict';

function Car(){
    this.color='white';
    this.dours=4;
    this.speed=0;
    this.defaultSpeed=60;
    this.maxSpeed=100;
    this.seats=4;
    this.passengers=[];
    this.put=function(){
        if (this.passengers.length<this.seats){
            this.passengers.push(true);
        }
        else if(this.passengers.length>this.seats){
            this.passengers.pop();
        }
    };

    this.land=function(){
        this.passengers.pop();
    };

    this.drive=function (newSpeed){
        if (this.passengers.length<1){
            this.speed=0;
        }
        else if(this.passengers.length>this.seats){
            this.speed=0;
        }
        else if (newSpeed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        else if (typeof newSpeed!=='number'){
            this.speed=this.defaultSpeed;
        }
        else {
            this.speed=newSpeed;
        }
    }  
};
var car=new Car();
module.exports=car;
