let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item") 



console.log(imgItem.length - 1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100  // 700

slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })

}
//render automatic
function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
        handleRightBtn()
    }
    else {
        startSlider = 0;
    }
}
setInterval(renderSlideAuto, 2000);


















document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const second1 = document.querySelector(".second-1");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");
  const body = document.querySelector("body");

  // Function to open the sidebar
  function openSidebar() {
    sidebar.style.left = "0";
    body.classList.add("show-sidebar");
  }

  // Function to close the sidebar
  function closeSidebar() {
    sidebar.style.left = "-365px"; // Adjust this value to match your sidebar width
    body.classList.remove("show-sidebar");
  }

  // Open the sidebar and dim the background when clicking on the second-1 div
  second1.addEventListener("click", function (event) {
    openSidebar();
    event.stopPropagation(); // Prevent the click event from propagating to the document click listener
  });

  // Close the sidebar and remove the background dim when clicking outside of it or on the close button
  document.addEventListener("click", function (event) {
    if (event.target !== second1 && event.target !== sidebar && event.target !== closeSidebarBtn) {
      closeSidebar();
    }
  });

  // Prevent clicks inside the sidebar from closing it
  sidebar.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Close the sidebar when the close button is clicked
  closeSidebarBtn.addEventListener("click", function (event) {
    closeSidebar();
    event.stopPropagation(); // Prevent the click event from propagating to the sidebar click listener
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const primeImage = document.getElementById("primeImage");
    const elementsToDim = document.querySelectorAll(":not(.imagekk)");

    // Function to apply the dimmed class to elements
    function dimElements() {
        elementsToDim.forEach(element => {
            element.classList.add("dimmed");
        });
    }

    // Function to remove the dimmed class from elements
    function restoreElements() {
        elementsToDim.forEach(element => {
            element.classList.remove("dimmed");
        });
    }

    // Add event listeners for hovering over the image
    primeImage.addEventListener("mouseenter", dimElements);
    primeImage.addEventListener("mouseleave", restoreElements);
}); 

document.addEventListener("DOMContentLoaded", function () {
  const productList = document.querySelector(".today_deals_product_list");
  const prevButton = document.getElementById("today_deal_btn_prev");
  const nextButton = document.getElementById("today_deal_btn_next");
  const itemWidth = 250; // Adjust this value based on your product item width

  // Function to scroll the product list to the left
  function scrollLeft() {
    productList.style.transform = `translateX(-${itemWidth}px)`;
  }

  // Function to scroll the product list to the right
  function scrollRight() {
    productList.style.transform = "translateX(0)";
  }

  // Add event listeners to the buttons
  prevButton.addEventListener("click", scrollRight);
  nextButton.addEventListener("click", scrollLeft);
});


document.addEventListener("DOMContentLoaded", function () {
  const signInLink = document.getElementById("signInLink");
  const signInForm = document.getElementById("signInForm");

  signInLink.addEventListener("mouseenter", function () {
      signInForm.classList.remove("hidden");
  });

  signInForm.addEventListener("mouseleave", function () {
      signInForm.classList.add("hidden");
  });
});