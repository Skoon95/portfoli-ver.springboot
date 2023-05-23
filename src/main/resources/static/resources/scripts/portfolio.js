
// 메뉴 상태변경 버튼을 누르면 .container 상태를 변경하도록 처리
window.addEventListener("load",function () {
    document.querySelector(".toggle").addEventListener("click",function (){
        document.querySelector(".container").classList.toggle("collapse");
    });
});

