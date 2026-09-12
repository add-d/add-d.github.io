/**
 * 内页共用壳：头图、导航、侧栏、页脚、列表/正文渲染
 * 依赖：jQuery、SITE_DATA、window.SITE_PAGE = { key, depth }
 */
(function (window, $) {
  function prefix(depth) {
    return depth > 0 ? new Array(depth + 1).join("../") : "";
  }

  function abs(p, depth) {
    if (!p) return "#";
    if (/^(https?:|javascript:|#)/.test(p)) return p;
    return prefix(depth) + p.replace(/^\//, "");
  }

  function navHtml(active, depth) {
    var p = prefix(depth);
    var items = [
      { id: "home", name: "首页", href: "index.htm" },
      { id: "cgjj", name: "成果简介", href: "cgjj.htm" },
      {
        id: "sbs",
        name: "申报书",
        href: "sbs/zyjjdjxwt.htm",
        children: SITE_DATA.sideMenus.sbs
      },
      {
        id: "zccl",
        name: "支撑材料",
        href: "zccl.htm",
        children: SITE_DATA.sideMenus.zccl
      },
      {
        id: "cgtgyy",
        name: "成果推广应用",
        href: "cgtgyy/mtbd.htm",
        children: SITE_DATA.sideMenus.cgtgyy
      },
      { id: "tsbk", name: "特色成果", href: "tsbk/dpt/gjjpt.htm" }
    ];

    var html = "<ul>";
    items.forEach(function (it) {
      html += '<li class="' + (it.id === active ? "active" : "") + '">';
      html += '<a href="' + abs(it.href, depth) + '">' + it.name + "</a>";
      if (it.children && it.children.length) {
        html += "<div><ul>";
        it.children.forEach(function (c) {
          html +=
            '<li><a href="' +
            abs(c.href, depth) +
            '">' +
            c.name +
            "</a></li>";
        });
        html += "</ul></div>";
      }
      html += "</li>";
    });
    html += "</ul>";
    return html;
  }

  function mobileNavHtml(depth) {
    var p = prefix(depth);
    var blocks = [
      { name: "首页", href: "index.htm" },
      { name: "成果简介", href: "cgjj.htm" },
      { name: "申报书", href: "sbs/zyjjdjxwt.htm", children: SITE_DATA.sideMenus.sbs },
      { name: "支撑材料", href: "zccl.htm", children: SITE_DATA.sideMenus.zccl },
      {
        name: "成果推广应用",
        href: "cgtgyy/mtbd.htm",
        children: SITE_DATA.sideMenus.cgtgyy
      },
      { name: "特色成果", href: "tsbk/dpt/gjjpt.htm" }
    ];
    var html = '<ul class="list_box_nav_mobile">';
    blocks.forEach(function (b) {
      html += "<li><div class='con'><a class='a' href='" + abs(b.href, depth) + "'>" + b.name + "</a>";
      if (b.children) html += "<i></i>";
      html += "</div>";
      if (b.children) {
        html += "<div class='list'>";
        b.children.forEach(function (c) {
          html += "<a href='" + abs(c.href, depth) + "'>" + c.name + "</a>";
        });
        html += "</div>";
      }
      html += "</li>";
    });
    html += "</ul>";
    return html;
  }

  function sideHtml(page, depth) {
    var menus = SITE_DATA.sideMenus[page.sideKey] || [];
    var html = "";
    menus.forEach(function (m) {
      if (m.expandable) {
        var open =
          page.activeSide === "gjjpt" ||
          page.activeSide === "gjlhyjzx" ||
          page.activeSide === "sbjpt" ||
          page.activeSide === "dpt";
        html +=
          '<div class="menu-item ' +
          (open ? "active open" : "") +
          '"><a href="javascript:;" class="menu-link">' +
          m.name +
          '<span class="arrow"></span></a><div class="sub-menu">';
        (m.children || []).forEach(function (c) {
          html +=
            '<a href="' +
            abs(c.href, depth) +
            '"' +
            (page.activeSide === c.file ? ' class="active"' : "") +
            ">" +
            c.name +
            "</a>";
        });
        html += "</div></div>";
      } else {
        html +=
          '<div class="menu-item ' +
          (page.activeSide === m.file ? "active" : "") +
          '"><a href="' +
          abs(m.href, depth) +
          '">' +
          m.name +
          "</a></div>";
      }
    });
    return html;
  }

  function mobileSideHtml(page, depth) {
    var menus = SITE_DATA.sideMenus[page.sideKey] || [];
    var html = "<ul>";
    menus.forEach(function (m) {
      if (m.expandable) {
        (m.children || []).forEach(function (c) {
          html +=
            "<li><a href='" + abs(c.href, depth) + "'>" + c.name + "</a></li>";
        });
      } else {
        html +=
          "<li><a href='" + abs(m.href, depth) + "'>" + m.name + "</a></li>";
      }
    });
    html += "</ul>";
    return html;
  }

  function crumbsHtml(page, depth, extra) {
    var html = '<a href="' + abs("index.htm", depth) + '">首页</a>';
    (page.crumbs || []).forEach(function (c) {
      html += " &gt; <a href='" + abs(c.href, depth) + "'>" + c.name + "</a>";
    });
    if (extra) html += " &gt; " + extra;
    return html;
  }

  function footerHtml(depth) {
    var p = prefix(depth);
    return (
      '<div class="foot"><div class="w16"><div class="ftmin1"><div class="link">' +
      '<h2><img src="' +
      p +
      'images/icon-link.png">友情链接：</h2><p>' +
      '<a href="#" target="_blank">示例链接A</a>' +
      '<a href="#" target="_blank">示例链接B</a>' +
      '<a href="#" target="_blank">示例链接C</a>' +
      "</p></div>" +
      '<div class="dbadr"><p>示例地址：某某市某某区示例路 100 号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" target="_blank">备案号占位</a></p>' +
      '<p>南校区地址：示例地址占位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" target="_blank">公安备案占位</a></p></div>' +
      '</div></div><div id="backTop"></div></div>'
    );
  }

  function headerHtml(active, depth) {
    var p = prefix(depth);
    return (
      '<div class="head pc"><div class="h-bot"><div class="w16">' +
      '<div class="logo"><a href="' +
      abs("index.htm", depth) +
      '" title="国家级教学成果奖(研究生)申报展示网站"><img src="' +
      p +
      'images/logo-placeholder.svg" alt="Logo占位"></a></div>' +
      '<div class="h-rgt"><div class="nav">' +
      navHtml(active, depth) +
      "</div></div></div></div></div>" +
      '<div class="m-index"><section class="m_header_box"><header id="m_header">' +
      '<div id="logo"><a href="' +
      abs("index.htm", depth) +
      '"><img src="' +
      p +
      'images/logo-placeholder.svg" alt="Logo占位"></a></div>' +
      '<div id="nav_btn_box" class="on"><aside id="nav_btn"><div class="point" name="1" id="mbtn"> <span class="navbtn"></span> </div></aside></div>' +
      '</header></section><nav id="m_nav">' +
      mobileNavHtml(depth) +
      '<div class="close">×</div></nav></div>'
    );
  }

  function bannerHtml(depth) {
    var p = prefix(depth);
    return (
      '<div class="ban_box"><div class="swiper-container"><div class="swiper-wrapper">' +
      '<div class="swiper-slide"><div class="ban_pic"><img src="' +
      p +
      'images/banner.jpg" border="0"></div></div>' +
      '</div></div><div class="text">' +
      '<div class="brand-hero-title"><span class="eyebrow">TEACHING ACHIEVEMENT</span>' +
      "<h2>公路交通复合型人才培养</h2>" +
      "<p>工程引领 · 数智融通 · 中外协同</p></div></div></div>"
    );
  }

  function listBody(page, depth) {
    var html = '<div class="list_lb"><ul>';
    (page.list || []).forEach(function (item, idx) {
      html +=
        '<li id="line_u14_' +
        idx +
        '"><a href="' +
        SITE_DATA.detailHref(prefix(depth), item.hrefType) +
        '" title="' +
        item.title +
        '"><div class="mar"><div class="time"><b>' +
        item.day +
        "</b><span>" +
        item.month +
        "</span></div><h2>" +
        item.title +
        "</h2></div></a></li>";
    });
    html += "</ul></div>";
    return html;
  }

  function contentBody(page, depth) {
    var html = (page.html || "").replace(/\{P\}/g, prefix(depth));
    var isZccl = page.key === "zccl" || (page.key && page.key.indexOf("zccl/") === 0);
    var cls = "contt_box";
    if (isZccl) cls += " contt_box--material";
    return (
      '<div class="' +
      cls +
      '"><div class="contt_zhwen"><div id="vsb_content">' +
      html +
      "</div></div></div>"
    );
  }

  function renderInnerPage() {
    var cfg = window.SITE_PAGE || {};
    var page = SITE_DATA.pages[cfg.key];
    if (!page) {
      document.getElementById("app").innerHTML = "<p style='padding:100px'>页面配置不存在</p>";
      return;
    }
    page.key = cfg.key;
    var depth = cfg.depth || 0;
    var p = prefix(depth);

    document.title = page.title + "-国家级教学成果奖(研究生)申报展示网站";

    var main =
      headerHtml(page.nav, depth) +
      bannerHtml(depth) +
      '<div class="list-box"><div class="w16">' +
      '<div class="sjmenu"><div class="sp_header"><div class="sp_logo">' +
      page.sideTitle +
      '</div><div class="sp_nav"><span></span></div></div><div class="sjj_nav">' +
      mobileSideHtml(page, depth) +
      "</div></div>" +
      '<div class="lt-lf"><div class="lt-yjdh">' +
      page.sideTitle +
      '</div><div class="lt-erdh">' +
      sideHtml(page, depth) +
      "</div></div>" +
      '<div class="lt-rg"><div class="ltdqwz"><span>' +
      crumbsHtml(page, depth) +
      "</span><h1>" +
      page.title +
      "</h1></div>" +
      (page.kind === "list" ? listBody(page, depth) : contentBody(page, depth)) +
      "</div></div></div>" +
      footerHtml(depth);

    document.getElementById("app").innerHTML = main;
  }

  function getQuery(name) {
    var m = location.search.match(new RegExp("[?&]" + name + "=([^&]*)"));
    return m ? decodeURIComponent(m[1]) : "";
  }

  function renderDetailPage() {
    var type = getQuery("type") || "article";
    var detail = SITE_DATA.detailTypes[type] || SITE_DATA.detailTypes.article;
    var depth = 0;
    // detail.htm 在根目录
    var pageLike = {
      nav: detail.parentNav,
      sideKey: detail.sideKey,
      sideTitle:
        detail.sideKey === "tsbk"
          ? "特色版块"
          : detail.sideKey === "cgtgyy"
          ? "成果推广应用"
          : detail.sideKey === "cgjj"
          ? "成果简介"
          : "详情",
      activeSide:
        type === "platform"
          ? "gjjpt"
          : type === "team"
          ? "dtd"
          : type === "project"
          ? "dxm"
          : type === "engineering"
          ? "dgc"
          : type === "achievement"
          ? "dcg"
          : type === "article"
          ? "mtbd"
          : "",
      crumbs: [
        { name: detail.crumbParent.name, href: detail.crumbParent.href },
        { name: detail.crumbCurrent, href: detail.listHref }
      ]
    };

    document.title = detail.title + "-国家级教学成果奖(研究生)申报展示网站";

    var body =
      '<div class="contt_box"><div class="contt_tit"><h1>' +
      detail.title +
      "</h1><h3>日期:" +
      detail.date +
      " &nbsp;&nbsp;&nbsp;&nbsp;作者: " +
      (detail.author || "") +
      " &nbsp;&nbsp;&nbsp;&nbsp; 来源: " +
      (detail.source || "") +
      '</h3><div class="clear"></div></div><div class="contt_zhwen"><div id="vsb_content"><div class="v_news_content">';

    (detail.body || []).forEach(function (para, i) {
      body +=
        "<p" +
        (i === 0 ? ' class="vsbcontent_start"' : "") +
        ' style="text-align:justify;line-height:1.8">' +
        para +
        "</p>";
    });
    if (detail.cover) {
      body +=
        '<p style="text-align:center"><img src="' +
        abs(detail.cover, depth) +
        '" alt="" style="max-width:100%"></p>';
    }
    body += "</div></div></div></div>";

    var main =
      headerHtml(pageLike.nav, depth) +
      bannerHtml(depth) +
      '<div class="list-box"><div class="w16">' +
      '<div class="sjmenu"><div class="sp_header"><div class="sp_logo">' +
      pageLike.sideTitle +
      '</div><div class="sp_nav"><span></span></div></div><div class="sjj_nav">' +
      mobileSideHtml(pageLike, depth) +
      "</div></div>" +
      '<div class="lt-lf"><div class="lt-yjdh">' +
      pageLike.sideTitle +
      '</div><div class="lt-erdh">' +
      sideHtml(pageLike, depth) +
      "</div></div>" +
      '<div class="lt-rg"><div class="ltdqwz"><span>' +
      crumbsHtml(pageLike, depth, "正文") +
      "</span><h1>" +
      pageLike.crumbs[pageLike.crumbs.length - 1].name +
      "</h1></div>" +
      body +
      "</div></div></div>" +
      footerHtml(depth);

    document.getElementById("app").innerHTML = main;
  }

  window.SiteShell = {
    renderInnerPage: renderInnerPage,
    renderDetailPage: renderDetailPage,
    prefix: prefix,
    abs: abs
  };
})(window, jQuery);
