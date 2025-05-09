const checkbox = document.getElementById("mode-toggle");

document.body.addEventListener('darkmode:toggle', (event) => {
    const isDarkMode = event.detail.checked;
  
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    console.log("in custom event")
});

// export function setupDarkModeToggle() {
//   const checkbox = document.getElementById("mode-toggle");

//   if (!checkbox) return;

//   document.body.addEventListener('darkmode:toggle', (event) => {
//     const isDarkMode = event.detail.checked;

//     if (isDarkMode) {
//       document.body.classList.add('dark-mode');
//     } else {
//       document.body.classList.remove('dark-mode');
//     }

//     console.log("in custom event");
//   });
// }
