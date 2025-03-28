export function alert(ALERT_TYPE, ALERT_MSG) {
  //Setting alert color based on alert type:
  let alertColor = "";
  switch (ALERT_TYPE) {
    case "SUCCESS":
      alertColor = "bg-green-300";
      break;
    case "ERROR":
      alertColor = "bg-red-300";
      break;
    default:
      alertColor = "bg-gray-300";
  }
  //Creating elements:
  const alertElement = document.createElement("aside");
  const alertMsg = document.createElement("p");
  //Styling elements:
  alertElement.className =
    "z-50 flex flex-row justify-center items-center absolute min-h-screen inset-0 bg-black/50";
  alertMsg.className = `p-10 w-1/2 border ${alertColor} flex flex-row justify-center rounded-lg`;
  //Settting alert message:
  alertMsg.innerText = ALERT_MSG;
  //Appending elements:
  alertElement.appendChild(alertMsg);
  document.body.appendChild(alertElement);
  //Removing appended elements:
  setTimeout(() => {
    document.body.removeChild(alertElement);
  }, 1000);
}
