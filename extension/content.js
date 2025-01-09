console.log("ChatGPT Style Changer content script loaded.");

// Function to update styles
function updateStyles() {
  const elements = document.querySelectorAll('.min-h-4');
  if (elements.length === 0) {
    console.log("No elements found with the class 'min-h-4'.");
    return;
  }
  elements.forEach((el) => {
    el.style.fontSize = '48px';
    el.style.color = 'red';
    console.log("Updated element:", el);
  });
}

// Observe the DOM for changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    updateStyles();
  });
});

// Start observing the body for changes
observer.observe(document.body, { childList: true, subtree: true });

// Initial style update
updateStyles();
