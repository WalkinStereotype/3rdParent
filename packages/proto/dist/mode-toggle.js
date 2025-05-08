const checkbox = document.getElementById("mode-toggle");

// checkbox.addEventListener("change", (event) => {
//     event.stopPropagation();

//     const isChecked = event.target.checked;

//     const customEvent = new CustomEvent('darkmode:toggle', {
//         bubbles: true,
//         composed: true,
//         detail: { checked: isChecked }
//     });

//     event.target.dispatchEvent(customEvent);
//     console.log("dark mode triggered")
// });

document.body.addEventListener('darkmode:toggle', (event) => {
    const isDarkMode = event.detail.checked;
  
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    console.log("in custom event")
});