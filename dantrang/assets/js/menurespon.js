document.querySelector('.icon-menu').addEventListener('click', function() {
    var menuList = document.querySelector('.menu-list-box');
    // Kiểm tra giá trị hiện tại của display
        menuList.style.display = 'block'; // Hiển thị menu nếu đang ẩn
});
function showSidebar() {
    const sidebar = document.querySelector('.menu-list-box');
    sidebar.style.setProperty('display', 'block', 'important');
}
$(document).ready(function(){
    $('.fa-chevron-down').click(function(e){
        e.preventDefault(); // Prevent the default action of the <a> tag
        $(this).closest('a').next('.document_menu').slideToggle();
    });
});