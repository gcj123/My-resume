// 左侧边栏切换active样式
let activeId = 0;//保存上一次被点击的那个li的下标
let cardId = 0;
const liList = document.querySelectorAll('.self-info > ul > li');
const cards = document.querySelectorAll('.self-card-container');
const shade = document.querySelector(".shade");
liList.forEach((item,index) =>{
    item.onclick = () => {
        //改变小三角
        liList[activeId].classList.toggle('active');
        activeId = index;
        liList[activeId].classList.toggle('active');
        //显示遮罩层
        shade.style.display = "block";
        setTimeout( () =>{
            shade.style.display = "none"
        },1000);
        setTimeout( () =>{
            cards[cardId].style.display = "none";
            cardId = index;
            cards[cardId].style.display = "flex";
        },800)
    }
})
//点击显示个人经历卡片动画
const back = document.querySelector(".back"),
      next = document.querySelector(".next");
next.onclick = function(e){
    e.preventDefault();
    e.stopPropagation();
    this.parentElement.classList.remove("b-disappear");
    this.parentElement.nextElementSibling.classList.remove("b-appear")
    this.parentElement.classList.add("disappear");
    this.parentElement.nextElementSibling.classList.add("appear");
};
back.onclick = function(e){
    e.preventDefault();
    e.stopPropagation();
    this.parentElement.classList.remove("appear");
    this.parentElement.classList.add("b-appear");
    this.parentElement.previousElementSibling.classList.remove("disappear");
    this.parentElement.previousElementSibling.classList.add("b-disappear");
};
