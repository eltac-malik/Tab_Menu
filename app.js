// let tabs = document.querySelectorAll('[data-tab-target]')
// let tabContents = document.querySelectorAll('[data-tab-content]')

// tabs.forEach(tab =>
//     {
//         tab.addEventListener("click",()=>
//         {
//             const target = document.querySelector(tab.dataset.tabTarget);
//             tabContents.forEach(tbCont=>
//                 {
//                     tbCont.classList.remove("active")
//                 })
//           target.classList.add("active")
//         })
//     })


let dataImg = [
    "https://images.pexels.com/photos/4022587/pexels-photo-4022587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/7168910/pexels-photo-7168910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3972178/pexels-photo-3972178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
]

let count = 0;

let img = document.getElementById("img")
let right = document.getElementById("right")
let left = document.getElementById("left")

img.src = dataImg[count];

right.addEventListener("click",()=>
{
    count++;   
    if(count>2)
    {
        count=0
    }

    img.src = dataImg[count];
})

left.addEventListener("click",()=>
{
    count--;
    if (count == -1 )
    {
        count = dataImg.length-1  
    }
    img.src = dataImg[count];
})

function Auto()
{
    count++;
    if (count>dataImg.length-1)
    {
        count = 0;    
    }
    img.src = dataImg[count]
}

setInterval(Auto,2000)

