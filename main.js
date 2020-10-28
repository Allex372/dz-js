// let hellow = 'hello';
// hellow = 'hello world';
// let name = 'owu';
// name = 'owu2';
// let domain = 'com';
// domain = 'com.ua';
// let domain1 = 'ua';
// domain1 = 'ua.com.owu';
// let number1 = 1;
// number1 = 2;
// let number2 = 10;
// number2 = 20;
// let number3 = -999;
// number3 = -1000;
// let number4 = 123;
// number4 = 1234;
// let number5 = 3.14;
// number5 = 3.20;
// let number6 = 2.7;
// number6 = 2.9
// let number7 = 16;
// number7 = 36;
// let Adult = true;
// Adult = false;
// let car = false;
// car = true;
//
// console.log(hellow);
// alert(hellow);
// document.write(hellow);
//
// console.log(name);
// alert(name);
// document.write(name);
//
// console.log(domain);
// alert(domain);
// document.write(domain);
//
// console.log(domain1);
// alert(domain1);
// document.write(domain1);
//
// console.log(number1);
// alert(number1);
// document.write(number1);
//
// console.log(number2);
// alert(number2);
// document.write(number2);
//
// console.log(number3);
// alert(number3);
// document.write(number3);
//
// console.log(number4);
// alert(number4);
// document.write(number4);
//
// console.log(number5);
// alert(number5);
// document.write(number5);
//
// console.log(number6);
// alert(number6);
// document.write(number6);
//
// console.log(number7);
// alert(number7);
// document.write(number7);
//
// console.log(Adult);
// alert(Adult);
// document.write(Adult);
//
// console.log(car);
// alert(car);
// document.write(car);


//class
// var str = 'Привіт';
// var num = 123;
// var flag = true;
// var txt = 'true';
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// const a1 = 5+3;
// const a2 = 5-3;
// const a3 = 5*3;
// const a4 = 5/3;
// const a5 = 5%3;
//
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// const a6 = 5%3;
// const a7 = 3%5;
// const a8 = 5+'3';
// const a9 = '5' -3;
// const a10 = 75 + 'kg'
//
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);


// ПЛОЩА
// const height = 23;
// const width = 10;
//
// console.log(s = height*width)

// ОБ*ЄМ
// const heightC = 4;
// const dC =4;
// console.log(v = heightC*dC)

// TRIANGEL
// const n = 3;
// const m = 4;
//
// console.log(k = Math.pow(3,2)+ Math.pow(4,2))

// const str = 'Hello world';
// document.write(str);
// alert(str);
// console.log(str);

// const fullName = 'Baran Olersandr Rostislavovich';
// const age = 21;
// const hobby = 'dance';
//
// alert(fullName+'\n'+age+'\n'+hobby)

// let str1 = 'Who ';
// let  str2 = 'are ';
// let str3 = 'you?';
//
// document.write(concatenation = str1+str2+str3);

// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// let a1 = prompt('a1');
// let a2 = prompt('a2');
// alert(a1+a2);

// let name = prompt('name');
// let surname = prompt('surname');
// let age = prompt('age');
// alert('Hello '+ name+' '+surname+' '+ 'we are so happy thet your age is '+ age)




////1-----------------/////////
// let x = prompt('x');
// let y = prompt('y');
// let z = prompt('z')
//


// if (x>y && x>z && y>z){
//     document.write('z='+z,"y="+y,'x='+x)
// }else if(x>y && x>z && z>y){
//     console.log('y= '+y,'z= '+z,'x= '+x)
// }else if(y>x && y>z && x>z){
//     console.log('z= '+z,'x= '+x,'y= '+y)
// }else if(y>x && y>z && z>x){
//     console.log('x= '+x,'z= '+z,'y= '+y)
// }else if(z>x && z>y && y>x) {
//     console.log('x= '+x,'y= '+y,'z= '+z)
// }else if(z>x && z>y && x>y){
//     console.log('y= '+y,'x= '+x,'z= '+z)
// }


/////2-----------------//////////
// let x = prompt('colour');
//
// if (x === "green" ){
//     console.log('colour green = '+'GO!');
// }else if(x === "yellow"){
//     console.log('colour yellow =' +"WAIT!");
// }else if(x === "red"){
//     console.log('colour red = '+"STOP!");
// }else console.log("DO ANYWAY")
//



///3-----------------------///////
let colour = prompt('colour');
let isRoadClear = confirm('Any car?')

if (colour === 'green' && !isRoadClear) {
    console.log('colour green = ' + 'GO!');
}else if (colour === 'green' && isRoadClear){
    console.log('colour green = '+'BUT WAIT FOR A CAR DRIVE!');
}else if(colour === 'yellow' && isRoadClear){
    console.log('colour yellow =' +'WAIT!');
}else if(colour === 'yellow' && !isRoadClear){
    console.log('Too early - WAIT!')
}else if(colour ==='red'&& !isRoadClear){
    console.log('STOP!EARLY!')
}else if (colour ==='red'&& isRoadClear){
    console.log('STOP AND WAIT!')
}else console.log('Do anyway')