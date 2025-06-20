// document
//   .getElementById("generate-par")
//   .addEventListener("click", getCurrentTab);

// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true }; // Focuses on the user's currently focused window
//   let [tab] = await chrome.tabs.query(queryOptions); // Queries for active tabs in the current window
//   return tab; // Returns the current tab object
// }

// // Example usage:
// chrome.runtime.onInstalled.addListener(async () => {
//   console.log(await getCurrentTab()); // Logs information about the current tab
// });

// function grabText() {
//   return document.body.innerText; // Get all text content
// }

// chrome.runtime.sendMessage({ text: grabText() }); // Send text back to the background script

async function sayHello() {
  let [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.body.style.backgroundColor = "red";
      console.log(document.body.outerHTML);
    },
  });
}

document.getElementById("generate-par").addEventListener("click", sayHello);
