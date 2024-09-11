let arr = [
   { dp:"https://th.bing.com/th?id=OIP.HaVZSiQ-8T8W24jG8b3NbQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    story:"https://th.bing.com/th/id/OIP.saTebkw741B_ZkIWPih-ewHaLH?rs=1&pid=ImgDetMain",
    name:"RoronoaZoro"
   },
   {dp:"https://th.bing.com/th/id/OIP.9xSjZX4KEf2HYFXXRQhD7AHaE8?w=211&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    story:"https://th.bing.com/th/id/OIP.XdTVHs7Xisb6ha1DPH9lIwHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    name:"NeerajChopra"

   },
   {
    dp:"https://i1.wp.com/godofindia.com/wp-content/uploads/2017/05/virat-kohli-4.jpg",
    story:"https://images.news18.com/ibnlive/uploads/2022/12/virat-kohli-celebrates-his-44th-odi-ton-ap-photo-167066553516x9.jpg",
    name:"ViratKhole"
   }
   ,
   {
    dp:"https://indianhotdeal.com/wp-content/uploads/2020/04/shreyas-iyer-biography.jpg",
    story:"https://assets.telegraphindia.com/telegraph/eb60b23b-75c7-4f32-b731-5620f0200682.jpg",
    name:"ShreyasIyer"
   }
   ,
   {
    dp:"https://th.bing.com/th/id/OIP.BmoEWs2frW3hqMcFIohUEQHaFj?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    story:"https://th.bing.com/th/id/OIP.7l8jq0HmVjsnTstA8Jgb-wHaE8?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    name:"Joe root"

   }

];
var clutter = ``;

arr.forEach(function(element,idx){
    clutter += `<div class="story">
                       <img id="${idx}" src="${element.dp}" alt="${element.name}">   
                   </div>
                   `;

})


let stories  = document.querySelector("#stories");
stories.innerHTML = clutter;

let container = document.querySelector("#container");

stories.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {  // Ensure that only images trigger the event
        const idx = event.target.id;
        document.querySelector("#full-screen").style.display = "block";
        document.querySelector("#full-screen").style.backgroundImage = `url(${arr[idx].story})`;
        container.style.display = "none";

        setTimeout(function() {
            document.querySelector("#full-screen").style.display = "none";
            container.style.display = "block";
        }, 2000);
    }
});

let total_likes = document.getElementById("total_likes");
let count = 0;

let photo = document.getElementById("levi");
let like = document.querySelector("i");
let heart  = document.querySelector("#like");

photo.addEventListener("dblclick",function(event){
    like.style.transform = "translate(-50%,-50%) scale(1)";
    like.style.opacity = "1";
    heart.className  = `ri-heart-3-fill`;
    heart.style.color = "red";
    total_likes.innerHTML = "1 Likes";
   

    setTimeout(function(){
        like.style.transform = "translate(-50%,-50%) scale(1)";
        like.style.opacity = "0";
        
    },1000)
})

let flag = 0;
heart.addEventListener('click',function(){
    if(flag==0){
    heart.className  = `ri-heart-3-fill`;
    heart.style.color = "red";
    total_likes.innerHTML = "1 Likes";
    flag = 1;
    }
    else{
        heart.className  = `ri-heart-3-line`;
        heart.style.color = "black";
        total_likes.innerHTML = "0 Likes";
        flag = 0 ;
    }
})

var cluter2 = ``;

arr.forEach(function(element,idx){
    cluter2 += `<div class="name"> <p>${element.name} </p>
    </div>   `;

})

let user_name = document.querySelector(".user_name");
user_name.innerHTML = cluter2;
console.log(cluter2);


let isScrolling = false;

function syncScroll(source, target) {
    if (!isScrolling) {
        isScrolling = true;
        target.scrollLeft = source.scrollLeft;
        isScrolling = false;
    }
}

stories.addEventListener('scroll', function() {
    syncScroll(stories, user_name);
});

user_name.addEventListener('scroll', function() {
    syncScroll(user_name, stories);
});
