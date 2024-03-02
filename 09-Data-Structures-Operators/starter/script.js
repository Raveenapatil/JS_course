'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours:{
    thu:{
      open:12,
      close:22,
    },
    fri:{
      open:11,
      close:23,
    },
    sat:{
      open:0,//open 24 hrs
      close:24,
    },
  },
  order:function(starterIndex,mainIndex){
      return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];  
  },
  orderDelivery: function({starterIndex,mainIndex,address,time}){
    console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${address} by ${time}`);


  },
   
};

// destructing arrays---------------------------------//
const arr = [2,3,4];
const ax = arr[0];
const ba = arr[1];
const ca = arr[2];

const [x,y,z]= arr;
console.log(x,y,z);

let [main, ,secondary] = restaurant.categories;//restaurant.categories[0,,2]
console.log(main, secondary);

//switch the two variables without using temp variable
[main,secondary]=[secondary,main];
console.log(main, secondary);


//recieving 2 values from function
const [starter, mainCourse] = restaurant.order(3,2);
console.log(starter,mainCourse);

//nested array
const arra = [2, 4, [5,6]];
console.log(arra);
const [i, ,j]=arra;
console.log(i,j);
const [k,,[o,p]]=arra;
console.log(k,o,p);

//default values
const [q=1,r=1,s=1]=[,9,12]
console.log(q,r,s);

//---------------destructing objects-------------//  
const {name,openingHours,categories}=restaurant;
console.log(name,openingHours,categories);

//assigning new name to object
const{
  name:hotelname,
  openingHours:time,
  categories:tags,
}=restaurant;
console.log(hotelname,time,tags);

//default values'
const{
  menu=[],starterMenu:starters=[]
}=restaurant;
console.log(menu,starters);

// mutating variables(changing)
let a =111;
let b =93;
const obj ={
  a:23,b:22,c:7
};
({a,b}=obj);
console.log(a,b);

const {fri: { open, close },} = openingHours;
console.log(open, close);

const { open:oe, close:c } = restaurant.openingHours.fri;
 
console.log(oe, c);

restaurant.orderDelivery({
  time:"12:20",
  address:"ghatkopar",
  starterIndex: 2,
  mainIndex:1,
});

//---------------spread operators-------------//  
const ass =[1,2,3];
const badarr= [ass[0],ass[1],ass[2],4,5,6];
console.log(badarr);

const goodarr = [...ass,4,5,7];
console.log(goodarr);console.log(...goodarr);
