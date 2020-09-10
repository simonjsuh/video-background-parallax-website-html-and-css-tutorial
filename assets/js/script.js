window.onscroll = function () {
  changeHeaderSize();
};

function changeHeaderSize () {
  if (document.documentElement.scrollTop === 0) {
    if (window.matchMedia("(min-width: 1680px)").matches) {
      document.getElementById("banner").style.marginTop = "80px";
      document.querySelector("#navHeader .logo img").style.width = "120px";
    } else {
      document.getElementById("banner").style.marginTop = "60px";
      document.querySelector("#navHeader .logo img").style.width = "84px";
    }
  } else if (document.documentElement.scrollTop > 0) {
    document.getElementById("banner").style.marginTop = "60px";
    document.querySelector("#navHeader .logo img").style.width = "84px";
  }
}

// changeHeaderSize function for full screen only mode for updating headernav size
// function changeHeaderSize () {
//   if (document.documentElement.scrollTop === 0) {
//     document.getElementById("banner").style.marginTop = "80px";
//     document.querySelector("#navHeader .logo img").style.width = "120px";
//   } else if (document.documentElement.scrollTop > 0) {
//     document.getElementById("banner").style.marginTop = "60px";
//     document.querySelector("#navHeader .logo img").style.width = "84px";
//   }
// }

function openSidebarMenu () {
  document.getElementById("menu").style.right = "0";
}

function closeSidebarMenu () {
  document.getElementById("menu").style.right = "-352px";
}