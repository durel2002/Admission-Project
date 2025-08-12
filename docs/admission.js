let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let subBtn = document.querySelector("#subBtn");
// let personalSection = document.querySelector(".personalSection");
// let contactSection = document.querySelector(".contactSection");
// let citizenSection = document.querySelector(".citizenSection");
// let guardianSection = document.querySelector(".guardianSection");
// let academicSection = document.querySelector(".academicSection ");
// let programSection = document.querySelector(".programSection");
// let reviewSection = document.querySelector(".reviewSection");
let pic = document.getElementById('pic');
let imag = document.getElementById('imag');

imag.classList.add('hide');
var uploadimage = "";

pic.addEventListener('change', function (){
const reader = new FileReader();
reader.addEventListener('load', function(){
    uploadimage = reader.result;
    imag.style.backgroundImage = `url(${uploadimage})`
})


imag.classList.remove('hide')

reader.readAsDataURL(this.files[0])


})





let currentTab = 0;
let arryTab = document.querySelectorAll(".tab");
let arryItem = document.getElementsByClassName('item');
console.log(arryItem);

showcurrentTab(currentTab)

function showcurrentTab (n){
// console.log(img.value)
    arryTab[n].style.display = "block";
    if(currentTab == 0){
       prevBtn.style.display="none";

  }
  else{
     prevBtn.style.display="block"
  }
    if(currentTab == arryTab.length-1){
       nextBtn.style.display="none"; 
       subBtn.classList.remove("hide")      
  }else{
      nextBtn.style.display="block";
      subBtn.classList.add("hide") 

  }
//   nextItem(n);
}


  

nextBtn.addEventListener('click', ()=>{

    if (currentTab <= arryTab.length)
    {
        arryTab[currentTab].style.display = "none";
        currentTab = currentTab + 1;
        showcurrentTab(currentTab)
        // nextItem(currentTab)
         
    }
    


})

prevBtn.addEventListener('click', ()=>{

    if (currentTab <= arryTab.length)
    {
        arryTab[currentTab].style.display = "none";
        currentTab = currentTab - 1;
        showcurrentTab(currentTab)
        //   RnextItem(currentTab)
    }


})


// function nextItem(v){
    
//     for(i=0; i < arryItem.length; i++){console.log(arryItem)
//    arryItem[i]= arryItem[i].className.replace("active"," ")



//     }
//     arryItem[v].className += "active"
   
//     // 

// }

// function RnextItem(v){
    
// //     for(i=0; i < arryItem.length; i++){console.log(arryItem)
// //    arryItem[i]= arryItem[i].className.replace("active"," ")



// //     }
//     arryItem[v].className.replace("active", "");
   
//     // 

// }






// let tabsArry = [];

// if (tabsArry.length == 0) {
//     prevBtn.classList.add("hide");

//     // personalSection.classList.add('hide');
//     contactSection.classList.add("hide");
//     contactSection.classList.add("hide");
//     citizenSection.classList.add("hide");
//     guardianSection.classList.add("hide");
//     academicSection.classList.add("hide");
//     programSection.classList.add("hide");
//     reviewSection.classList.add("hide");
// }

// // t = 2;

// nextBtn.addEventListener("click", () => {
//     if (tabsArry.length >= 0 && tabsArry.length != 6) {
//         prevBtn.classList.remove("hide");
//         tabsArry.push("tab");
//         //   t++;

//         //    i = 0;
//         //    console.log(tabsArry.length)
//         //    while(i<tabsArry.length){
//         //     console.log(tabsArry[i]);
//         //     i++;
//         //    }
//     }

//     switch (tabsArry.length) {
//         case 1:
//             personalSection.classList.add("hide");
//             contactSection.classList.remove("hide");
//             // contactSection.classList.add('hide');
//             // citizenSection.classList.add('hide');
//             // guardianSection.classList.add('hide');
//             // academicSection.classList.add('hide');
//             // programSection.classList.add('hide');
//             // reviewSection.classList.add('hide')
//             break;
//         case 2:
//             personalSection.classList.add("hide");
//             contactSection.classList.add("hide");
//             citizenSection.classList.remove("hide");
//             // guardianSection.classList.add('hide');
//             // academicSection.classList.add('hide');
//             // programSection.classList.add('hide');
//             // reviewSection.classList.add('hide')
//             break;
//         case 3:
//             personalSection.classList.add("hide");
//             contactSection.classList.add("hide");
//             citizenSection.classList.add("hide");
//             guardianSection.classList.remove("hide");
//             // academicSection.classList.add('hide');
//             // programSection.classList.add('hide');
//             // reviewSection.classList.add('hide')
//             break;
//         case 4:
//             personalSection.classList.add("hide");
//             contactSection.classList.add("hide");
//             citizenSection.classList.add("hide");
//             guardianSection.classList.add("hide");
//             academicSection.classList.remove("hide");
//             // programSection.classList.add('hide');
//             // reviewSection.classList.add('hide')
//             break;
//         case 5:
//             personalSection.classList.add("hide");
//             contactSection.classList.add("hide");
//             citizenSection.classList.add("hide");
//             guardianSection.classList.add("hide");
//             academicSection.classList.add("hide");
//             programSection.classList.remove("hide");
//             // reviewSection.classList.add('hide')
//             break;
//         case 6:
//             personalSection.classList.add("hide");
//             contactSection.classList.add("hide");
//             citizenSection.classList.add("hide");
//             guardianSection.classList.add("hide");
//             academicSection.classList.add("hide");
//             programSection.classList.add("hide");
//             reviewSection.classList.remove("hide");
//             nextBtn.classList.add('hide');
//             break;

//         default:
//             break;
//     }
// });

// prevBtn.addEventListener("click", () => {
//     if (tabsArry.length >= 1) {
//         prevBtn.classList.remove("hide");
//         value = tabsArry.pop();
//         // else {
//         //     console.log('her')
//         //     prevBtn.classList.add('hide');
//         //     }
//     }

//     if (tabsArry.length <= 0) {
//         prevBtn.classList.add("hide");
//         value = tabsArry.pop();
//     }

//     //    i = 0;
//     //    console.log(tabsArry.length)
//     //    while(i<tabsArry.length){
//     //     console.log(tabsArry[i]);
//     //     i++;
//     //    }

//     switch (tabsArry.length) {
//         case 0:
//             personalSection.classList.remove("hide");
//             contactSection.classList.add("hide");
//             contactSection.classList.add("hide");
//             citizenSection.classList.add("hide");
//             guardianSection.classList.add("hide");
//             academicSection.classList.add("hide");
//             programSection.classList.add("hide");
//             reviewSection.classList.add("hide");
//             break;

//         case 1:
//             personalSection.classList.add("hide");
//             contactSection.classList.remove("hide");
//             citizenSection.classList.add("hide");
//             guardianSection.classList.add("hide");
//             academicSection.classList.add("hide");
//             programSection.classList.add("hide");
//             reviewSection.classList.add("hide");

//             break;
//         case 2:
//             personalSection.classList.add("hide");
//             contactSection.classList.add("hide");
//             citizenSection.classList.remove("hide");
//             guardianSection.classList.add("hide");
//             academicSection.classList.add("hide");
//             programSection.classList.add("hide");
//             reviewSection.classList.add("hide");
//             break;
//         case 3:
//             personalSection.classList.add("hide");
//             contactSection.classList.add("hide");
//             citizenSection.classList.add("hide");
//             guardianSection.classList.remove("hide");
//             academicSection.classList.add("hide");
//             programSection.classList.add("hide");
//             reviewSection.classList.add("hide");
//             break;
//         case 4:
//             personalSection.classList.add("hide");
//             contactSection.classList.add("hide");
//             citizenSection.classList.add("hide");
//             guardianSection.classList.add("hide");
//             academicSection.classList.remove("hide");
//             programSection.classList.add("hide");
//             reviewSection.classList.add("hide");
//             break;
//         case 5:
//             personalSection.classList.add("hide");
//             contactSection.classList.add("hide");
//             citizenSection.classList.add("hide");
//             guardianSection.classList.add("hide");
//             academicSection.classList.add("hide");
//             programSection.classList.remove("hide");
//             reviewSection.classList.add("hide");
//             nextBtn.classList.remove('hide');
//             break;
//         case 6:
//             personalSection.classList.add("hide");
//             contactSection.classList.add("hide");
//             citizenSection.classList.add("hide");
//             guardianSection.classList.add("hide");
//             academicSection.classList.add("hide");
//             programSection.classList.add("hide");
//             reviewSection.classList.remove("hide");
//             nextBtn.classList.add('hide');
//             break;

//         default:
//             break;
//     }
// });
