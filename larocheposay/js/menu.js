let subMenu = document.querySelectorAll(".submenu");
let sub = document.querySelectorAll(".lnb");
let gnb = document.querySelectorAll(".menu ul li a");
gnb.forEach(function (item, keys) {
  item.addEventListener("mouseenter", function (e) {
    let j = Array.from(gnb).indexOf(e.target);
    function others(item) {
      return item !== j;
    }
    let otherItem = Array.from(subMenu).filter(others);
    otherItem.forEach(function (item) {
      item.style.height = "0px";
      item.style.opacity = "0";
    });
    sub.forEach(function () {
      let subht = sub[j].offsetHeight;
      console.log("subht : " + subht);
      subMenu[j].style.height = subht + "px";
      subMenu[j].style.opacity = "1";
    });
  });

  item.addEventListener("mouseleave", function () {
    for (let i = 0; i <= 4; i++) {
      subMenu[i].style.height = 0 + "px";
    }
  });
});
subMenu.forEach(function (item, keys) {
  item.addEventListener("mouseenter", function (e) {
    let j = Array.from(subMenu).indexOf(e.target);
    sub.forEach(function () {
      let subht = sub[j].offsetHeight;
      console.log("subht : " + subht);
      subMenu[j].style.height = subht + "px";
      subMenu[j].style.opacity = "1";
    });
    gnb[j].classList.add("on");
  });
  item.addEventListener("mouseleave", function (e) {
    for (let i = 0; i <= 4; i++) {
      subMenu[i].style.height = 0 + "px";
    }
    gnb[keys].classList.remove("on");
  });
});
