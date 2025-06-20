// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true }; // Focuses on the user's currently focused window
//   let [tab] = await chrome.tabs.query(queryOptions); // Queries for active tabs in the current window
//   return tab; // Returns the current tab object
// }

// // Example usage:
// chrome.runtime.onInstalled.addListener(async () => {
//   console.log(await getCurrentTab()); // Logs information about the current tab
// });

async function grabText() {
  let [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // document.body.style.backgroundColor = "red";
      // const tabHtml = document.body.outerHTML;
      const aTags = document.body.getElementsByTagName("a");
      const links = [];
      for (let i = 0; i < aTags.length; i++) {
        links.push(aTags[i].getAttribute("href"));
      }
      console.log("All links:", links);
      const pattern = /^https:\/\/onepipeline\.cloud/i;
      const artemisLink = links.filter((link) => pattern.test(link));
      console.log("Artemis Link:", artemisLink);
    },
  });
}

document.getElementById("generate-par").addEventListener("click", grabText);
