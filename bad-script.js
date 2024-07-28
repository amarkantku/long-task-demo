document.addEventListener("DOMContentLoaded", () => {
  const sleep = (ms) =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });

  function init() {
    while (i < 1000) {
      setTimeout(() => {
        const ele = document.createElement("div");
        ele.className = "item-timeouts";
        ele.innerHTML = "in setTimeout";
        document.body.appendChild(ele);
        saveUserDetails();
      }, 5000);
      i++;
    }

    for (var i = 0; i < 10000; i++) {
      const ele = document.createElement("div");
      ele.className = "item";
      ele.innerHTML = i;
      document.body.appendChild(ele);
    }

    function saveUserDetails() {
      sleep(3000);
      const ele = document.createElement("div");
      ele.className = "save-user-details";
      ele.innerHTML = "save-user-details called successfully";
      document.body.appendChild(ele);
    }

    function processUserDetails() {
      sleep(5000);
      const ele = document.createElement("div");
      ele.className = "p-user-details";
      ele.innerHTML = "processUserDetails called successfully";
      document.body.appendChild(ele);
      noopUserDetails();
    }

    function noopUserDetails() {
      sleep(5000);
      const ele = document.createElement("div");
      ele.className = "p-user-details";
      ele.innerHTML = "noopUserDetails called successfully";
      document.body.appendChild(ele);
    }

    saveUserDetails();
  }
  init();
});