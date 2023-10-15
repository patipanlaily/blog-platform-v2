AOS.init();
AOS.refresh();

// Selector navbar class
const navbar = document.querySelector("nav.navbar");
// Set number pixel
const scrollChange = 50;
// Add class fixed top
const addClassScroll = () => navbar.classList.add("fixed-top");
// Remove class fixed top
const removeClassScroll = () => navbar.classList.remove("fixed-top");
// Set event scroll and check class change
window.addEventListener("scroll", function() {
    let scrollDown = window.scrollY;
    if (scrollDown >= scrollChange) {
        addClassScroll();
    } else {
        removeClassScroll();
    }
});

// document.querySelector(".current__mode").addEventListener("click", (e) => {
//     if(document.querySelector(".current__mode > i").classList.contains("bi-moon")) {
//         document.body.classList.remove("dark--mode");
//         document.body.classList.add("light--mode");
//         document.querySelector(".current__mode > i").classList.remove("bi-moon");
//         document.querySelector(".current__mode > i").classList.add("bi-sun");
//     } else {
//         document.body.classList.remove("light--mode");
//         document.body.classList.add("dark--mode");
//         document.querySelector(".current__mode > i").classList.remove("bi-sun");
//         document.querySelector(".current__mode > i").classList.add("bi-moon");
//     }
// });
const title = document.getElementById("title-blog");
let output = "";

async function getDataFromAPI() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const json = await res.json();
    json.forEach(item => {
        output += "<li>" + item.title + "</li>";
    })
    title.innerHTML = output;
}
getDataFromAPI();
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data)
//   .catch(error => console.log('Error:', error));

// data.foreach(item=>{
// output+="<li>"+item.title+"</li>";
// });
// list.innerHTML = output;

const searchBlogs = (keyword, blogs) => {
    return blogs.filter(blog => blog.title.toLowerCase().includes(keyword.toLowerCase()));
};