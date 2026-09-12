/**
 * 站点导航 / 栏目 / Mock 数据
 * 详情页按类型各写一条记录，同类型跳转统一复用
 */
window.SITE_DATA = (function () {
  var detailTypes = {
    article: {
      type: "article",
      typeName: "资讯详情",
      parentNav: "cgtgyy",
      sideKey: "cgtgyy",
      crumbParent: { name: "成果推广应用", href: "cgtgyy/mtbd.htm" },
      crumbCurrent: "媒体报道",
      listHref: "cgtgyy/mtbd.htm",
      title: "【Mock】示例媒体报道：教学成果推广应用纪实",
      date: "2026-07-08",
      author: "编辑组",
      source: "示例媒体",
      cover: "images/content/c19.jpg",
      body: [
        "本文为媒体报道类详情页的统一 Mock 占位内容。列表中同类型条目均复用本页模板。",
        "成果面向公路交通复合型人才培养，围绕工程引领、数智融通、中外协同持续推进教学改革与实践。",
        "后续可将正式稿件标题、日期与正文替换为真实内容，无需再为每条列表单独新建详情页。"
      ]
    },
    platform: {
      type: "platform",
      typeName: "平台详情",
      parentNav: "tsbk",
      sideKey: "tsbk",
      crumbParent: { name: "特色成果", href: "tsbk/dpt/gjjpt.htm" },
      crumbCurrent: "大平台",
      listHref: "tsbk/dpt/gjjpt.htm",
      title: "【Mock】示例国家级平台：极端环境道路工程重点实验室",
      date: "2026-07-07",
      author: "",
      source: "平台介绍",
      cover: "images/dpt-pic.png",
      body: [
        "本页为“大平台”类详情统一模板。国家级 / 国际联合 / 省部级平台列表条目均跳转复用本页。",
        "平台聚焦极端环境公路基础设施安全与绿色长寿服役，支撑研究生高层次培养与重大工程攻关。",
        "可在此补充平台定位、研究方向、育人成效等正式文案与图片。"
      ]
    },
    team: {
      type: "team",
      typeName: "团队详情",
      parentNav: "tsbk",
      sideKey: "tsbk",
      crumbParent: { name: "特色成果", href: "tsbk/dtd.htm" },
      crumbCurrent: "大团队",
      listHref: "tsbk/dtd.htm",
      title: "【Mock】示例教学团队：公路工程高水平导师团队",
      date: "2026-07-07",
      author: "",
      source: "团队介绍",
      cover: "images/content/c31.png",
      body: [
        "本页为“大团队”类详情统一模板。首页轮播与列表中的团队条目均复用本页。",
        "团队汇聚国家级与省部级人才，承担教改与科研攻关，形成雁阵式育人梯队。",
        "正式上线时可替换为真实团队简介、成员结构与代表性成果。"
      ]
    },
    project: {
      type: "project",
      typeName: "项目详情",
      parentNav: "tsbk",
      sideKey: "tsbk",
      crumbParent: { name: "特色成果", href: "tsbk/dxm.htm" },
      crumbCurrent: "大项目",
      listHref: "tsbk/dxm.htm",
      title: "【Mock】示例重大项目：交通基础设施耐久性提升关键技术",
      date: "2026-07-07",
      author: "",
      source: "科技部",
      cover: "images/content/c21.png",
      body: [
        "本页为“大项目”类详情统一模板。首页与列表中的项目卡片均跳转复用本页。",
        "项目面向公路交通重大需求，形成可转化的培养资源与研究生交叉课题。",
        "占位说明：经费、来源、研究内容可按正式申报材料替换。"
      ]
    },
    engineering: {
      type: "engineering",
      typeName: "工程详情",
      parentNav: "tsbk",
      sideKey: "tsbk",
      crumbParent: { name: "特色成果", href: "tsbk/dgc.htm" },
      crumbCurrent: "大工程",
      listHref: "tsbk/dgc.htm",
      title: "【Mock】示例重大工程：跨海通道工程育人现场",
      date: "2026-07-07",
      author: "",
      source: "工程案例",
      cover: "images/content/c19.jpg",
      body: [
        "本页为“大工程”类详情统一模板。首页工程展区与列表条目均复用本页。",
        "以真实重大工程为育人现场，实行校企双导师与“工程出题—科研解题—教学入题”模式。",
        "可替换工程概况、校友贡献与研究生实践内容。"
      ]
    },
    achievement: {
      type: "achievement",
      typeName: "成果详情",
      parentNav: "tsbk",
      sideKey: "tsbk",
      crumbParent: { name: "特色成果", href: "tsbk/dcg.htm" },
      crumbCurrent: "大成果",
      listHref: "tsbk/dcg.htm",
      title: "【Mock】示例标志性成果：国家科学技术进步奖相关成果",
      date: "2026-07-07",
      author: "",
      source: "成果介绍",
      cover: "images/content/c17.jpeg",
      body: [
        "本页为“大成果”类详情统一模板。首页成果轮播与列表条目均复用本页。",
        "成果体现公路交通复合型人才培养与科技攻关的综合成效。",
        "正式内容可补充获奖信息、应用场景与育人成效数据。"
      ]
    },
    intro: {
      type: "intro",
      typeName: "简介详情",
      parentNav: "cgjj",
      sideKey: "cgjj",
      crumbParent: { name: "成果简介", href: "cgjj.htm" },
      crumbCurrent: "正文",
      listHref: "cgjj.htm",
      title: "【Mock】成果简介（详情）",
      date: "2026-07-07",
      author: "",
      source: "",
      cover: "images/cgjj-bg.jpg",
      body: [
        "本页为成果简介详情统一模板。首页“探索详细”跳转复用本页。",
        "【Mock】本成果面向公路交通高层次人才培养，构建“课程筑基—科创赋能—工程淬炼—国际拓展”一体化培养体系。",
        "通过校企协同与重大工程实践，持续提升研究生解决复杂工程问题的能力。"
      ]
    }
  };

  function mockList(type, titles) {
    var day = 8;
    return titles.map(function (t, i) {
      return {
        title: t,
        day: String(day - (i % 5)).padStart(2, "0"),
        month: "2026.07",
        hrefType: type
      };
    });
  }

  var pages = {
    cgjj: {
      kind: "content",
      nav: "cgjj",
      sideKey: "cgjj",
      sideTitle: "成果简介",
      title: "成果简介",
      crumbs: [{ name: "成果简介", href: "cgjj.htm" }],
      html: [
        "<p>【Mock】长安大学交通运输工程学科立足西部、面向全国，长期服务公路交通重大工程人才培养。</p>",
        "<p>本成果历经二十余年探索与实践，形成“工程引领、数智融通、中外协同”的复合型人才培养体系。</p>",
        "<p>以重大工程锤炼攻关能力，以数智课程强化交叉创新，以中外协同提升跨文化工程胜任力。</p>",
        "<p style='text-align:center'><img src='{P}images/cgjj-bg.jpg' alt='示意图占位' style='max-width:100%'></p>",
        "<p style='text-align:center'><strong>图1 人才培养体系示意（占位图）</strong></p>"
      ].join("")
    },

    "sbs/zyjjdjxwt": sbsPage("zyjjdjxwt", "主要解决的教学问题",
      "<p>【Mock】面向交通强国建设，研究生培养需回应极端环境、复杂场景、数智融合与国际协同等新要求。</p>" +
      "<p><strong>（一）科研训练与重大工程衔接不畅</strong></p><p>现有科研训练深入工程一线不够，复杂工程集成创新能力不足。</p>" +
      "<p><strong>（二）课程体系与行业转型契合不深</strong></p><p>数智模块与专业内容融合不够，技术融合创新能力有待提升。</p>" +
      "<p><strong>（三）国际化培养与海外工程融通不足</strong></p><p>海外真实工程场景培养路径不健全，跨文化工程胜任力培育滞后。</p>"),
    "sbs/cgjjjxwtdff": sbsPage("cgjjjxwtdff", "成果解决教学问题的方法",
      "<p>【Mock】围绕三大问题，构建“工程出题—科研解题—教学入题”科产教融合路径。</p>" +
      "<p>一是以重大工程为载体组建跨学科团队；二是建设数智交叉课程；三是依托国际平台开展双向研训。</p>"),
    "sbs/cgdcxd": sbsPage("cgdcxd", "成果的创新点",
      "<p>【Mock】创新点一：工程现场育人机制；创新点二：数智融通课程体系；创新点三：中外协同标准互认培养。</p>"),
    "sbs/cgdtgyyxg": sbsPage("cgdtgyyxg", "成果的推广应用效果",
      "<p>【Mock】成果已在多所高校与行业单位推广，支撑学科建设与拔尖人才培养，形成可复制的经验模式。</p>"),
    "sbs/zywcrqk": sbsPage("zywcrqk", "主要完成人情况",
      "<p>【Mock】主要完成人由教学名师、科研骨干与行业导师组成，长期深耕公路交通研究生培养一线。</p>"),
    "sbs/zywcdwytjdwyj": sbsPage("zywcdwytjdwyj", "主要完成单位与推荐单位意见",
      "<p>【Mock】完成单位与推荐单位对本成果的创新性、应用性与示范性给予肯定，建议继续深化推广。</p>"),

    zccl: {
      kind: "content",
      nav: "zccl",
      sideKey: "zccl",
      sideTitle: "支撑材料",
      title: "支撑材料",
      crumbs: [{ name: "支撑材料", href: "zccl.htm" }],
      html:
        "<div class='cgtit'><h3>成果曾获奖励情况（Mock）</h3></div>" +
        "<div class='text'><table width='100%' cellpadding='0' cellspacing='0'><tbody>" +
        "<tr class='firstRow'><td>获奖时间</td><td>获奖名称</td><td>获奖等级</td><td>授奖部门</td></tr>" +
        "</tbody></table></div>" +
        "<div class='text2'><div class='scroll-inner'><table width='100%' cellpadding='0' cellspacing='0'><tbody>" +
        "<tr class='firstRow'><th colspan='4'>教学成果</th></tr>" +
        "<tr><td>2023年</td><td>【Mock】省级教学成果奖示例 A</td><td>特等奖</td><td>示例部门</td></tr>" +
        "<tr><td>2025年</td><td>【Mock】省级教学成果奖示例 B</td><td>一等奖</td><td>示例部门</td></tr>" +
        "<tr><td>2019年</td><td>【Mock】省级教学成果奖示例 C</td><td>一等奖</td><td>示例部门</td></tr>" +
        "<tr class='firstRow'><th colspan='4'>学科支撑</th></tr>" +
        "<tr><td>2025年</td><td>【Mock】ESI 学科示例</td><td>/</td><td>示例机构</td></tr>" +
        "<tr><td>2023年</td><td>【Mock】重点实验室示例</td><td>国家级</td><td>示例部门</td></tr>" +
        "</tbody></table></div></div>"
    },
    "zccl/cgjd": zcclPage("cgjd", "成果鉴定", "<p>【Mock】成果鉴定材料占位。此处可嵌入鉴定意见扫描件或 PDF 预览图。</p><p style='text-align:center'><img src='{P}images/placeholder.jpg' alt='鉴定材料占位' style='max-width:70%'></p>"),
    "zccl/cgjl": zcclPage("cgjl", "成果奖励", "<p>【Mock】成果奖励证书与获奖说明占位内容。</p>"),
    "zccl/zd_zd_xm": zcclPage("zd_zd_xm", "重大（重点）项目", "<p>【Mock】重大（重点）项目清单与任务书摘要占位。</p>"),
    "zccl/xkzc": zcclPage("xkzc", "学科支撑", "<p>【Mock】学科支撑平台与评估结果说明占位。</p>"),
    "zccl/gjpt": zcclPage("gjpt", "国际平台", "<p>【Mock】国际合作平台与引智基地材料占位。</p>"),
    "zccl/jgxm": zcclPage("jgxm", "教改项目", "<p>【Mock】教改项目立项与结题材料占位。</p>"),
    "zccl/kcjs": zcclPage("kcjs", "课程建设", "<p>【Mock】一流课程与教材建设材料占位。</p>"),
    "zccl/jsry": zcclPage("jsry", "教师荣誉", "<p>【Mock】教师荣誉与团队称号材料占位。</p>"),
    "zccl/xsry": zcclPage("xsry", "学生荣誉", "<p>【Mock】学生竞赛与创新创业获奖材料占位。</p>"),

    "cgtgyy/mtbd": listPage("cgtgyy", "成果推广应用", "媒体报道", "mtbd", "article", [
      "【Mock】示例媒体报道一：教学成果推广应用纪实",
      "【Mock】示例媒体报道二：校企协同育人实践扫描",
      "【Mock】示例媒体报道三：国际合作培养新探索",
      "【Mock】示例媒体报道四：重大工程现场育人故事",
      "【Mock】示例媒体报道五：数智课程建设进展"
    ]),
    "cgtgyy/cgyy": listPage("cgtgyy", "成果推广应用", "成果应用", "cgyy", "article", [
      "【Mock】成果应用案例一：行业单位采纳培养模式",
      "【Mock】成果应用案例二：课程资源跨校共享",
      "【Mock】成果应用案例三：工程现场实践基地共建"
    ]),
    "cgtgyy/rcpycx": listPage("cgtgyy", "成果推广应用", "人才培养成效", "rcpycx", "article", [
      "【Mock】人才培养成效一：领军人才成长路径",
      "【Mock】人才培养成效二：研究生高水平论文与竞赛",
      "【Mock】人才培养成效三：就业质量与行业贡献"
    ]),
    "cgtgyy/tgjl": listPage("cgtgyy", "成果推广应用", "推广交流", "tgjl", "article", [
      "【Mock】推广交流一：全国会议专题分享",
      "【Mock】推广交流二：高校互访与经验借鉴",
      "【Mock】推广交流三：行业论坛成果发布"
    ]),

    "tsbk/dpt/gjjpt": listPage("tsbk", "特色版块", "国家级平台", "gjjpt", "platform", [
      "【Mock】极端环境绿色长寿道路工程全国重点实验室",
      "【Mock】公路与桥梁高效养护及安全耐久国家工程研究中心",
      "【Mock】公路隧道国家工程研究中心",
      "【Mock】国家野外科学观测研究站示例"
    ], true),
    "tsbk/dpt/gjlhyjzx": listPage("tsbk", "特色版块", "国际联合研究中心", "gjlhyjzx", "platform", [
      "【Mock】中外绿色智慧公路联合实验室",
      "【Mock】特殊地区公路基础设施国际合作联合实验室",
      "【Mock】“111”学科创新引智基地示例"
    ], true),
    "tsbk/dpt/sbjpt": listPage("tsbk", "特色版块", "省部级平台", "sbjpt", "platform", [
      "【Mock】省级“一带一路”联合实验室",
      "【Mock】省级国际联合研究中心示例"
    ], true),
    "tsbk/dtd": listPage("tsbk", "特色版块", "大团队", "dtd", "team", [
      "【Mock】公路工程高水平导师团队",
      "【Mock】公路隧道工程教学科研团队",
      "【Mock】特殊区域公路建设创新团队",
      "【Mock】师德建设示范团队示例"
    ], true),
    "tsbk/dxm": listPage("tsbk", "特色版块", "大项目", "dxm", "project", [
      "【Mock】国家重点研发计划：耐久性提升关键技术",
      "【Mock】国家重点研发计划：绿色能源自洽供给",
      "【Mock】国家重点研发计划：智能检测与低碳维养",
      "【Mock】国家自然科学基金重点项目示例"
    ], true),
    "tsbk/dgc": listPage("tsbk", "特色版块", "大工程", "dgc", "engineering", [
      "【Mock】跨海通道工程",
      "【Mock】超长公路隧道工程",
      "【Mock】高原高寒公路工程",
      "【Mock】海外互联互通工程示例"
    ], true),
    "tsbk/dcg": listPage("tsbk", "特色版块", "大成果", "dcg", "achievement", [
      "【Mock】国家科学技术进步奖相关成果一",
      "【Mock】国家科学技术进步奖相关成果二",
      "【Mock】省部级标志性科技奖示例",
      "【Mock】教学成果标志性奖项示例"
    ], true)
  };

  function sbsPage(file, title, html) {
    return {
      kind: "content",
      nav: "sbs",
      sideKey: "sbs",
      sideTitle: "申报书",
      title: title,
      activeSide: file,
      crumbs: [
        { name: "申报书", href: "sbs/zyjjdjxwt.htm" },
        { name: title, href: "sbs/" + file + ".htm" }
      ],
      html: html
    };
  }

  function zcclPage(file, title, html) {
    return {
      kind: "content",
      nav: "zccl",
      sideKey: "zccl",
      sideTitle: "支撑材料",
      title: title,
      activeSide: file,
      crumbs: [
        { name: "支撑材料", href: "zccl.htm" },
        { name: title, href: "zccl/" + file + ".htm" }
      ],
      html: html
    };
  }

  function listPage(nav, sideTitle, title, activeSide, detailType, titles, isTsbk) {
    var crumbs;
    if (nav === "cgtgyy") {
      crumbs = [
        { name: "成果推广应用", href: "cgtgyy/mtbd.htm" },
        { name: title, href: "cgtgyy/" + activeSide + ".htm" }
      ];
    } else if (activeSide === "gjjpt" || activeSide === "gjlhyjzx" || activeSide === "sbjpt") {
      crumbs = [
        { name: "特色版块", href: "tsbk/dpt/gjjpt.htm" },
        { name: title, href: "tsbk/dpt/" + activeSide + ".htm" }
      ];
    } else {
      crumbs = [
        { name: "特色版块", href: "tsbk/dpt/gjjpt.htm" },
        { name: title, href: "tsbk/" + activeSide + ".htm" }
      ];
    }
    return {
      kind: "list",
      nav: nav,
      sideKey: isTsbk ? "tsbk" : nav,
      sideTitle: sideTitle,
      title: title,
      activeSide: activeSide,
      crumbs: crumbs,
      list: mockList(detailType, titles)
    };
  }

  var sideMenus = {
    cgjj: [],
    sbs: [
      { file: "zyjjdjxwt", name: "主要解决的教学问题", href: "sbs/zyjjdjxwt.htm" },
      { file: "cgjjjxwtdff", name: "成果解决教学问题的方法", href: "sbs/cgjjjxwtdff.htm" },
      { file: "cgdcxd", name: "成果的创新点", href: "sbs/cgdcxd.htm" },
      { file: "cgdtgyyxg", name: "成果的推广应用效果", href: "sbs/cgdtgyyxg.htm" },
      { file: "zywcrqk", name: "主要完成人情况", href: "sbs/zywcrqk.htm" },
      { file: "zywcdwytjdwyj", name: "主要完成单位与推荐单位意见", href: "sbs/zywcdwytjdwyj.htm" }
    ],
    zccl: [
      { file: "cgjd", name: "成果鉴定", href: "zccl/cgjd.htm" },
      { file: "cgjl", name: "成果奖励", href: "zccl/cgjl.htm" },
      { file: "zd_zd_xm", name: "重大（重点）项目", href: "zccl/zd_zd_xm.htm" },
      { file: "xkzc", name: "学科支撑", href: "zccl/xkzc.htm" },
      { file: "gjpt", name: "国际平台", href: "zccl/gjpt.htm" },
      { file: "jgxm", name: "教改项目", href: "zccl/jgxm.htm" },
      { file: "kcjs", name: "课程建设", href: "zccl/kcjs.htm" },
      { file: "jsry", name: "教师荣誉", href: "zccl/jsry.htm" },
      { file: "xsry", name: "学生荣誉", href: "zccl/xsry.htm" }
    ],
    cgtgyy: [
      { file: "mtbd", name: "媒体报道", href: "cgtgyy/mtbd.htm" },
      { file: "cgyy", name: "成果应用", href: "cgtgyy/cgyy.htm" },
      { file: "rcpycx", name: "人才培养成效", href: "cgtgyy/rcpycx.htm" },
      { file: "tgjl", name: "推广交流", href: "cgtgyy/tgjl.htm" }
    ],
    tsbk: [
      {
        file: "dpt",
        name: "大平台",
        expandable: true,
        children: [
          { file: "gjjpt", name: "国家级平台", href: "tsbk/dpt/gjjpt.htm" },
          { file: "gjlhyjzx", name: "国际联合研究中心", href: "tsbk/dpt/gjlhyjzx.htm" },
          { file: "sbjpt", name: "省部级平台", href: "tsbk/dpt/sbjpt.htm" }
        ]
      },
      { file: "dtd", name: "大团队", href: "tsbk/dtd.htm" },
      { file: "dxm", name: "大项目", href: "tsbk/dxm.htm" },
      { file: "dgc", name: "大工程", href: "tsbk/dgc.htm" },
      { file: "dcg", name: "大成果", href: "tsbk/dcg.htm" }
    ]
  };

  return {
    detailTypes: detailTypes,
    pages: pages,
    sideMenus: sideMenus,
    detailHref: function (prefix, type) {
      return prefix + "detail.htm?type=" + encodeURIComponent(type);
    }
  };
})();
