/*
 * @Author: samy
 * @email: yessz#foxmail.com
 * @time: 2021-02-21 17:40:15
 * @modAuthor: samy
 * @modTime: 2021-02-21 22:57:10
 * @desc: open write
 * @Copyright © 2015~2021 BDP FE
 */

window.onload = function() {
  themeDefaultContent = $(
    "#app > div.theme-container.have-rightmenu > div:nth-child(4) > main > div"
    );
    // "#app > div.theme-container > main > div.theme-default-content.content__default"
    // "#app > .theme-container> .page > .theme-default-content"
  themeDefaultContent.attr("id", "container");
  btw = new BTWPlugin(); // 注意btw需要是个全局变量,把const去掉
  btw.init({
    id: "container",
    blogId: "19129-1613919859857-190",
    name: "友一升",
    qrcode: "/img/wechat-qr.png",
    keyword: "yessz",
  });
};
