// document.querySelector(".icon-menu").addEventListener("click", function () {
//   var menuList = document.querySelector(".menu-list-box");
//   // Kiểm tra giá trị hiện tại của display
//   menuList.style.display = "block"; // Hiển thị menu nếu đang ẩn
// });

//function showSidebar(event) {
//   event.stopPropagation(); // Ngăn sự kiện lan truyền
//   console.log("Menu icon clicked");

//   const sidebar = document.querySelector(".menu-list-box");
//   console.log("Before:", sidebar.classList);

//   // Sử dụng toggle để thêm hoặc xóa lớp active
//   sidebar.classList.toggle("active"); // Thêm nếu không có, xóa nếu có
//   console.log(
//     sidebar.classList.contains("active")
//       ? "Added active class"
//       : "Removed active class"
//   );

//   // Kiểm tra giá trị của thuộc tính display
//   console.log("Display property:", getComputedStyle(sidebar).display);
//   console.log("After:", sidebar.classList);
// }

// $(document).ready(function () {
//   $(".fa-chevron-down").click(function (e) {
//     e.preventDefault(); // Prevent the default action of the <a> tag
//     $(this).closest("a").next(".document_menu").slideToggle();
//   });
// });
