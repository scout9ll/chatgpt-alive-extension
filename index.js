const iframe = document.createElement("iframe");
iframe.style.display = "none";
document.body.appendChild(iframe);
const heartbeatUrl = "/api/auth/session";
const gapRange = [50000, 200000];
function hiChatgpt() {
  setTimeout(() => {
    fetch(heartbeatUrl).then((res) => {
      if (!res.ok) iframe.src = heartbeatUrl;
      hiChatgpt();
    });
  }, Math.random() * (gapRange[1] - gapRange[0]) + gapRange[0]);
}
hiChatgpt();
