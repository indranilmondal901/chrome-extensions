chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "addToOrganizer",
      title: "Add to Organizer",
      contexts: ["page"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "addToOrganizer") {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: addTabToOrganizer
      });
    }
  });
  
  function addTabToOrganizer() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      const newData = {
        tabName: currentTab.title,
        tabUrl: currentTab.url
      };
  
      chrome.storage.local.get("tabs", (result) => {
        const data = result.tabs || [];
        chrome.storage.local.set({ tabs: [...data, newData] });
      });
    });
  }
  