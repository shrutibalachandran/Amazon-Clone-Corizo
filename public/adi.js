console.log("B");
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
    if (
      event.target !== second1 &&
      event.target !== sidebar &&
      event.target !== closeSidebarBtn
    ) {
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
  const signInLink = document.getElementById("signInLink");
  const signInForm = document.getElementById("signInForm");

  signInLink.addEventListener("mouseenter", function () {
    signInForm.classList.remove("hidden");
  });

  signInForm.addEventListener("mouseleave", function () {
    signInForm.classList.add("hidden");
  });
});

//clone 
// Get all elements with class "fs"
const fsElements = document.querySelectorAll('.fs');

// Get the "upar" div
const uparDiv = document.getElementById('upar-div');

// Function to remove the clicked item and shift others upwards
function removeItem(event) {
  const itemToRemove = event.currentTarget.parentElement;
  itemToRemove.remove();

  // Shift other items upwards
  const itemsInUpar = uparDiv.querySelectorAll('.fs');
  itemsInUpar.forEach((item, index) => {
    if (index >= uparDiv.children.length - 1) {
      // Hide the "Remove" button for the last item
      item.querySelector('.remove-button').style.display = 'none';
    } else {
      // Show the "Remove" button for other items
      item.querySelector('.remove-button').style.display = 'inline';
    }
  });
}

// Iterate over each "fs" element and add a click event listener to its button
fsElements.forEach((fsElement) => {
  const addButton = fsElement.querySelector('.button-32');

  addButton.addEventListener('click', () => {
    // Clone the clicked item's content
    const clone = fsElement.cloneNode(true);

    // Remove the button from the cloned content
    const clonedButton = clone.querySelector('.button-32');
    clonedButton.remove();

    // Create a "Remove" button for the cloned content
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('button-32', 'remove-button'); // Add button class
    removeButton.addEventListener('click', removeItem);

    // Add some styles to the "Remove" button for alignment
    removeButton.style.marginLeft = '300px'; // Adjust the margin as needed
    removeButton.style.marginTop = '35px'; // Adjust the margin-top as needed
    removeButton.style.width = 'auto'; // Adjust the width as needed
    removeButton.style.fontSize = 'small'; // Adjust the font size
    removeButton.style.display = 'block'; // To make the text centered vertically 
    removeButton.style.lineHeight = '1px'; 
    removeButton.style.backgroundColor = '#7FFFD4';

    // Append the "Remove" button to the cloned content
    clone.appendChild(removeButton);

    // Append the cloned content to the "upar" div
    uparDiv.appendChild(clone);

    // Hide the "Remove" button for the last item in "upar" div
    const itemsInUpar = uparDiv.querySelectorAll('.fs');
    itemsInUpar.forEach((item, index) => {
      if (index >= uparDiv.children.length - 1) {
        item.querySelector('.remove-button').style.display = 'none';
      }
    });
  });
});

// Price updation 
