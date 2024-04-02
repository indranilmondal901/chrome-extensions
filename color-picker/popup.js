const btn = document.querySelector(".changeColorBtn");

btn.addEventListener("click", async () => {
  // console.log("click event working");
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // console.log(tab);

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    // function: pickColorFunction,
    function: function() {
        // Create a new div element
        const newDiv = document.createElement('div');
        
        // Set the inner HTML of the new div
        newDiv.innerHTML = '<p>This is a dynamically injected HTML content.</p>';
        
        // Append the new div to the document body
        document.body.appendChild(newDiv);
    }
  });
});

async function pickColorFunction() {
  console.log("working.....");
  try {
    /*picker -- eye dropper native api */
    // const eyeDropper = new EyeDropper();
    // const selectedColor = await eyeDropper.open();
    // console.log(selectedColor);

    //     if (!window.EyeDropper) {
    //       console.log("Your browser does not support the EyeDropper API");
    //       return;
    //     }
    //     console.log(1)

    //     const eyeDropper = new window.EyeDropper();
    // console.log(2)
    //     await eyeDropper.open().then((result) => {
    //       console.log(result.sRGBHex);
    //       console.log(result.sRGBHex);
    //     });

    function clickHandler(event) {
      const clickedElement = event.target;

      // Get the computed styles of the clicked element
      const computedStyles = window.getComputedStyle(clickedElement);

      // Extract the color property from the computed styles
      const color = computedStyles.getPropertyValue("color");

      console.log("Clicked element:", clickedElement);
      console.log("Color of the clicked element:", color);

      // Remove the event listener
      document.removeEventListener("click", clickHandler);
    }

    // Add the event listener to the document
    document.addEventListener("click", clickHandler);
  } catch (error) {
    console.log(error);
  }
}
