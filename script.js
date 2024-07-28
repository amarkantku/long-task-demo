document.addEventListener("DOMContentLoaded", () => {

  // simulate delay in processing
  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

    
  async function saveUserDetails() {
    await sleep(3000);
    const ele = document.createElement("div");
    ele.className = "save-user-details";
    ele.innerHTML = "save-user-details called successfully";
    document.body.appendChild(ele);
    await processUserDetails();
  }

  async function processUserDetails() {
    await sleep(5000);
    const ele = document.createElement("div");
    ele.className = "p-user-details";
    ele.innerHTML = "processUserDetails called successfully";
    document.body.appendChild(ele);
    await noopUserDetails();
  }

  async function noopUserDetails() {
    await sleep(5000);
    const ele = document.createElement("div");
    ele.className = "p-user-details";
    ele.innerHTML = "noopUserDetails called successfully";
    document.body.appendChild(ele);
  }

  async function init() {
    // Using a for loop with await for async operations
    for (let i = 0; i < 1000; i++) {
      setTimeout(async () => {
        const ele = document.createElement("div");
        ele.className = "item-timeouts";
        ele.innerHTML = "in setTimeout";
        document.body.appendChild(ele);
        await saveUserDetails();
      }, 5000);
    }

    // Batch processing the creation of divs to avoid blocking
    for (let i = 0; i < 10000; i += 100) {
      await sleep(0); // Yield to allow the main thread to update
      for (let j = i; j < i + 100 && j < 10000; j++) {
        const ele = document.createElement("div");
        ele.className = "item";
        ele.innerHTML = j;
        document.body.appendChild(ele);
      }
    }

    await saveUserDetails();
  }

  init();
});
