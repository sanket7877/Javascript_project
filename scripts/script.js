//01
// var d={"abc":"2","3":"4"};
// if(d>b)
// {
//     document.write(d["abc"]);        
// }
// else {
//     document.write(b);
// }

//02
// var a =5;
// document.write(a++);
// document.write(a);


//03
// var a=2,b=2;
// var c = (a > b)? alert("T") :alert("F");
// document.write(c);

//04
// var a = 1, b = "Satyam";
// var c = true;
//document.write(a+" "+b+" "+c);
//alert("hello World");


//05
// var fruit = "apple";
//switch(fruit)
//{
//     case "apple":
//     document.write("apple");
//     break;

//     case "banana":
//     document.write("banana");
//     break;

//     default:
//     document.write("default");
// }


//06
// var n=5,i=0;

// while(i<n)
// {
//     document.write(i+"<br>");
// }


//07
// function myFunction(w,h)
// {
//     document.write(w*h);
// }
// myFunction(5,5);


//08
// function area()
// {
//     var w=document.getElementById("width").value;
//     var h=document.getElementById("height").value;
//     //alert(w*h);
//     document.getElementById("result").value=w*h;
// }

//09
// var arr = [];
// arr[0] = "hello";
// arr[1] = 2;
// document.write(arr[1]);

// var teacherName = ["a","b","c"];
// document.write(teacherName[1]);


//10
// var newArr =  Array(1,2,3);
// alert(newArr.length);


//11
// var linkA = document.getElementsByTagName("p");
// document.write(linkA[0].innerText);

//12
// var a=5.4;
// var result = Math.floor(Math.random()*6)+1;
// document.write( result);


//13
// var a = "It's is\" a String";
// document.write(a+"<br>");
// document.write(a.charAt(1)+"<br>");
// document.write(a.length + "<br>");
// document.write(a.search("s") + "<br>");
// document.write(a.replace("a","b") + "<br>");

//14
// var date = new Date;
// var fullYear = date.getFullYear();
// document.write(date + "<br>");
// document.write(fullYear+ "<br>");

//15
//var name = "Satyam";
//var age = 19;
//var proffesion = "Developer";

// var person = new Object();
// person.pName = name;
// person.pAge = age;
// person.pProfession = proffesion;
// document.write(person.pAge);

//var person2 = {pName:name,pAge:age, pProffesion:proffesion};
//document.write(person2["pProffesion"]);


//16
// var p1Tag = document.getElementById("p1");
// document.write(p1Tag.innerText);
//var h2  = document.getElementsByName("p1");
//document.write(h2);
// console.log("Type of p1Tag:"+ p1Tag.nodeType);
// console.log("innerHTML of p1Tag:"+ p1Tag.innerText);

// var list = document.getElementsByTagName("p");
// var innerTag = list.item("a");
// console.log("count:" , list.length);
// console.log("count:" , innerTag.innerText);

//17
// var pTag = document.getElementById("pTag");
// pTag.innerHTML="yep it is working";


// var createTag = document.createElement("p");
// createTag.innerHTML = "new element created by javascript";
// document.getElementById("h2").append(createTag);


// var createTextElement = document.createTextNode("new text node")
// document.getElementById("h2").append(createTextElement);


//18
// function timer(){
//     alert("This is 2sec timer");
// }
// setTimeout(timer,2000);


//19
// var img = document.getElementById("image");
// var arrImage = ["img/ubon_image.jpg", "img/headphone.jpg"];
// var imgIndex = 0;

// function changeImage()
// {
//     img.setAttribute("src", arrImage[imgIndex]);
//     imgIndex++;
//     if(imgIndex>=arrImage.length)
//     {
//         imgIndex=0;
//     }
// }
// setInterval(changeImage,3000);


//19
function language()
{
    this.list=["java", "pyhton","Css","dotnet","php"];
}



function populate(sourceString)
{
    var mylist = document.getElementById("language");
    var sourceObject = eval(sourceString);
    var obj = new sourceObject();
    var opts = '';
    for(var i=0;i<obj.list.length;i++)
    {
        opts += '<option value = "'+obj.list[i] + '"/>';
    }
    mylist.innerHTML = opts;
}