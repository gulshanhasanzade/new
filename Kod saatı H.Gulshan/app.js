// Verilmiş bir array-da təkrarlanan elementləri silən bir funksiya yazın   +
//     let removeRepetitive = (array) =>{
//         let arr = [];
//            for( i=0; i<array.length; i++){
//                 if(arr.indexOf(array[i]) === -1){
//                     arr.push(array[i]);
//                 }
//            }
//      return arr;
//     }
        
//     let array=[1,2,2,3,4,4,5,6,6,7]
//     let arr = removeRepetitive(array);
//     console.log(arr)

    
// İstifadəçi 50 daxil edənə qədər prompt qəbul etsin, daxil etdiklerini toplayın 50 
// daxil edəndə bitsin və cəm consola verilsin.   
    
//    let num=0;
//    let sum=0;
//    while(num !==50){
//     num=parseFloat(prompt("eded daxil edin"))
//     if(num===50){
//         sum +=num
//     }
//    } 
//    console.log(sum)


// İstifadəcinin daxil etdiyi ədədin təkmi cütmü olduğunu console etdirən bir funksiya  +
//  yazın.
//   let checkNumber=()=>{
//      let number= +prompt("eded daxil edin")
//      if(number%2==0){
//       console.log("cut ededdir ",number);
//      } else{
//         console.log("tek ededdir ",number);
//      }
//   }
//   checkNumber()


// 5-ə bölünən və 3 ə bölünməyən  30-dan kiçik ədədləri console etdirən bir funksiya yazın.
//        let divideNumber = ()=>{
//         for( let i=1; i< 30; i++){
//             if(i%5 ==0 && i%3 !==0)
//             console.log(i)
//         }
//        }   
//        divideNumber()



// İstifadəçidən çevrənin radiusunu prompt vasitəsi ilə alın və uzunluğunu hesablayın.
//     let ovalRadius = +prompt("cevrenin radiusu daxil edin")
//     let radius= parseFloat(ovalRadius)
//     let oval = 2* Math.Pİ *radius
//     console.log(oval)
  
// İstifadəçi 2 ədəd daxil etsin və bu 2 ədəd arasındaki sadə ədədlərin cəmini tapın.
    //  let num1= +prompt("1ci ededi daxil edin")
    //  let num2= +prompt(" 2ci ededi daxil edin")
    //  if( num1 %2 !==0 && num2 !==0){
    //     sum= num1+num2
    //  }
    //    console.log(sum)


// Vurma cədvəlini ekrana yazdıran js kodu yazın.   +
//     let MultiplecationTable=()=>{
//         for(let i =1; i<=10;i++){
//            let column="";
//            for(let j=1; j<=10; j++){
//             column += (i*j)
//            }
//            console.log(column)
//         }
//     }
//     MultiplecationTable()



// 1-dən 100-ə qədər olan ədədləri 100-dən 1-ə şəklində console etdirin.   +
//      let number=[];
//      for(let i=1; i<=100; i++){
//         number.push(i);
//      }  console.log(number.reverse().join())




// İlk 100 ədədin kvadratları cəmi ilə cəmlərinin kvadratı fərqini console etdirin.
   
// ------------------------



//  Bir <input type=”text” /> və <ul></ul>  yaradın. İnputa nəsə bir söz yazıb entere 
// basdığınız zaman, yazdığınız söz <ul> - in içinə <li>Yazdiginiz soz</li> formatında düşsün və inputun value-si boşalsın
//     function addTask() {
//     var taskTOdo = document.getElementById("taskInput").value;
    
//     var li = document.createElement("li");
//     li.innerText = taskTOdo;

//     var deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete";
//     deleteButton.onclick = () => {
//         li.remove();
//     };

//     li.append(deleteButton);
//     document.getElementById("taskList").append(li);
//     document.getElementById("taskInput").value = "";
// }
// document.getElementById("taskInput").addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         addTask();
//     }
// });