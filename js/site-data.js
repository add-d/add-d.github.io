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
      html: zcclGalleryHtml(
        "成果曾获奖励情况摘录，可点击左侧栏目查看鉴定、项目、课程等分类支撑材料。",
        ["获奖时间", "获奖名称", "获奖等级", "授奖部门"],
        [
          ["2023年", "课程筑基、科创赋能、国合增效：公路交通领军型人才培养", "省级特等奖", "陕西省人民政府"],
          ["2025年", "前沿交叉引领、重大需求驱动的交通人才培养新模式", "省级一等奖", "陕西省人民政府"],
          ["2019年", "工程现场育人与课程思政融合实践", "省级一等奖", "陕西省人民政府"],
          ["2025年", "ESI 工程学进入全球前1‰", "/", "科睿唯安"],
          ["2023年", "极端环境绿色长寿道路工程全国重点实验室", "国家级", "科技部"],
          ["2021年", "国家级课程思政示范课程：交通强国", "国家级", "教育部"]
        ]
      )
    },
    "zccl/cgjd": zcclMaterial(
      "cgjd",
      "成果鉴定",
      "以下为成果鉴定意见与验收材料摘录，可替换为正式鉴定书扫描件与附件目录。",
      ["鉴定时间", "鉴定名称", "鉴定结论", "组织单位"],
      [
        ["2024年", "公路交通复合型人才培养模式成果鉴定", "国际先进", "教育部高等学校教学指导委员会（示例）"],
        ["2023年", "工程现场育人机制与实践体系鉴定", "国内领先", "中国公路学会教育工作委员会（示例）"],
        ["2022年", "数智融通课程体系改革成果鉴定", "国内先进", "陕西省教育厅（示例）"],
        ["2021年", "中外协同培养标准互认方案鉴定", "国内领先", "长安大学组织同行专家组（示例）"],
        ["2020年", "研究生交叉课题与重大工程联动机制鉴定", "国内先进", "交通运输部科技司相关专家组（示例）"]
      ]
    ),
    "zccl/cgjl": zcclMaterial(
      "cgjl",
      "成果奖励",
      "【Mock】教学成果及相关获奖清单（与首页荣誉印鉴对应的代表性条目）。",
      ["获奖时间", "获奖名称", "获奖等级", "授奖部门"],
      [
        ["2023年", "课程筑基、科创赋能、国合增效：公路交通领军型人才培养", "省级特等奖", "陕西省人民政府"],
        ["2025年", "前沿交叉引领、重大需求驱动的交通人才培养新模式", "省级一等奖", "陕西省人民政府"],
        ["2019年", "工程现场育人与课程思政融合实践", "省级一等奖", "陕西省人民政府"],
        ["2021年", "国家级课程思政示范课程：交通强国", "国家级", "教育部"],
        ["2018年", "研究生培养模式创新与实践探索", "省级二等奖", "陕西省人民政府"]
      ]
    ),
    "zccl/zd_zd_xm": zcclMaterial(
      "zd_zd_xm",
      "重大（重点）项目",
      "【Mock】支撑本成果的国家重点研发计划、基金重点及其他重大（重点）项目摘要。",
      ["立项时间", "项目名称", "项目类别", "主持/参与"],
      [
        ["2022年", "交通基础设施耐久性提升关键技术", "国家重点研发计划", "主持"],
        ["2021年", "绿色能源自洽供给与低碳维养", "国家重点研发计划", "主持"],
        ["2020年", "道路与桥梁智能检测与装备", "国家重点研发计划", "参与"],
        ["2019年", "高寒高海拔公路建养关键科学问题", "国家自然科学基金重点项目", "主持"],
        ["2018年", "车路协同可信测试关键技术", "国家重点研发计划", "参与"],
        ["2017年", "多年冻土区公路服役安全与韧性提升", "省部级重大科技专项", "主持"]
      ]
    ),
    "zccl/xkzc": zcclMaterial(
      "xkzc",
      "学科支撑",
      "【Mock】本成果依托的学科平台、评估结果与支撑条件清单。",
      ["时间", "支撑内容", "层级/类别", "主管部门/机构"],
      [
        ["2025年", "ESI 工程学进入全球前1‰", "学科评估", "科睿唯安"],
        ["2023年", "极端环境绿色长寿道路工程全国重点实验室", "国家级平台", "科技部"],
        ["2021年", "“交通强国”试点任务（智能感知 / 风险防控等）", "国家级任务", "交通运输部"],
        ["2020年", "交通运输工程一流学科建设点", "一流学科", "教育部"],
        ["2019年", "公路与桥梁高效养护及安全耐久国家工程研究中心", "国家级平台", "国家发改委"]
      ]
    ),
    "zccl/gjpt": zcclMaterial(
      "gjpt",
      "国际平台",
      "【Mock】国际联合实验室、引智基地与中外协同培养平台清单。",
      ["获批时间", "平台名称", "平台类型", "依托单位/合作方"],
      [
        ["2017年", "“111”学科创新引智基地（特殊区域公路工程）", "引智基地", "教育部 / 外专局"],
        ["2022年", "中爱铺面工程绿色建养与智慧运维联合实验室", "国际联合实验室", "中爱合作高校（示例）"],
        ["2021年", "中南绿色智慧公路联合实验室", "国际联合实验室", "中南合作高校（示例）"],
        ["2020年", "特殊地区公路交通基础设施可持续发展国际合作联合实验室", "国际联合实验室", "多国合作网络（示例）"],
        ["2019年", "西部地区公路桥梁与隧道绿色建造及韧性提升“111”基地", "引智基地", "教育部"]
      ]
    ),
    "zccl/jgxm": zcclMaterial(
      "jgxm",
      "教改项目",
      "【Mock】支撑本成果的国家级、省部级与校级教育教学改革项目。",
      ["立项时间", "项目名称", "项目级别", "状态"],
      [
        ["2023年", "公路交通领军型人才培养模式改革与实践", "省级教改重点", "在研"],
        ["2022年", "研究生课程思政示范体系建设", "国家级教改专项（示例）", "结题"],
        ["2021年", "工程现场育人与案例库建设", "省级教改一般", "结题"],
        ["2020年", "中外协同培养课程标准互认探索", "校级重大教改", "结题"],
        ["2019年", "数智交叉课程群建设与评价改革", "省级教改重点", "结题"],
        ["2018年", "产教融合实践基地共建机制研究", "省级教改一般", "结题"]
      ]
    ),
    "zccl/kcjs": zcclMaterial(
      "kcjs",
      "课程建设",
      "【Mock】一流课程、课程思政示范课、教材与数智交叉课程建设清单。",
      ["获批时间", "课程/教材名称", "建设类型", "认定部门"],
      [
        ["2021年", "交通强国", "国家级课程思政示范课程", "教育部"],
        ["2023年", "道路工程（研究生）", "国家级一流课程（示例）", "教育部"],
        ["2022年", "桥隧工程安全与智慧运维", "省级一流课程", "陕西省教育厅"],
        ["2022年", "数智交叉：交通大数据分析", "数智交叉课程", "学校认定"],
        ["2020年", "特殊地区公路工程（全英文）", "国际平台 MOOC", "学校 / 合作平台"],
        ["2019年", "公路工程研究生核心课群", "省级一流课程群", "陕西省教育厅"]
      ]
    ),
    "zccl/jsry": zcclMaterial(
      "jsry",
      "教师荣誉",
      "【Mock】支撑本成果的教师个人与团队荣誉称号摘录。",
      ["获奖时间", "荣誉名称", "荣誉层级", "授予单位"],
      [
        ["2022年", "公路工程全国高校黄大年式教师团队", "国家级", "教育部"],
        ["2023年", "全国模范教师（示例）", "国家级", "教育部 / 人社部"],
        ["2021年", "万人计划教学名师（示例）", "国家级", "中组部"],
        ["2020年", "交通运输行业青年科技英才（示例）", "省部级", "交通运输部"],
        ["2019年", "省级教学名师（示例）", "省级", "陕西省教育厅"],
        ["2018年", "师德建设示范团队（示例）", "省级", "陕西省教育厅"]
      ]
    ),
    "zccl/xsry": zcclMaterial(
      "xsry",
      "学生荣誉",
      "【Mock】研究生在竞赛、科创与国际交流中的代表性获奖与荣誉。",
      ["获奖时间", "荣誉/赛事名称", "奖项等级", "主办单位"],
      [
        ["2026年", "道路交通基础设施大数据智能分析大赛指导成果", "国家级特等奖", "中国公路学会"],
        ["2024年", "全国研究生智慧交通创新大赛", "一等奖", "教育部相关学会（示例）"],
        ["2023年", "“挑战杯”课外学术科技作品竞赛", "省级特等奖", "共青团陕西省委（示例）"],
        ["2022年", "国际道路工程案例挑战赛", "银奖", "国际合作联盟（示例）"],
        ["2021年", "全国大学生交通科技大赛（研究生组）", "一等奖", "中国公路学会"],
        ["2020年", "研究生数学建模竞赛", "国家级二等奖", "教育部相关组委会（示例）"]
      ]
    ),

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

  function zcclGalleryHtml(intro, headers, rows) {
    var items = rows
      .map(function (r, i) {
        var year = String(r[0] || "").replace(/年/g, "");
        var idx = i + 1 < 10 ? "0" + (i + 1) : String(i + 1);
        return (
          '<li class="zccl-honor__item">' +
          '<div class="zccl-honor__year"><b>' +
          year +
          "</b><i>年</i></div>" +
          '<div class="zccl-honor__main">' +
          "<h4>" +
          (r[1] || "") +
          "</h4>" +
          '<div class="zccl-honor__tags"><em>' +
          (r[2] || "") +
          "</em><span>" +
          (r[3] || "") +
          "</span></div>" +
          "</div>" +
          '<span class="zccl-honor__idx" aria-hidden="true">' +
          idx +
          "</span>" +
          "</li>"
        );
      })
      .join("");
    return (
      '<div class="zccl-gallery">' +
      '<header class="zccl-gallery__head">' +
      '<p class="zccl-intro">' +
      intro +
      "</p>" +
      '<div class="zccl-gallery__count"><b>' +
      rows.length +
      "</b><span>条摘录</span></div>" +
      "</header>" +
      '<div class="zccl-gallery__cols" aria-hidden="true">' +
      "<span>" +
      (headers[0] || "时间") +
      "</span><span>" +
      (headers[1] || "名称") +
      "</span><span>" +
      (headers[2] || "等级") +
      " / " +
      (headers[3] || "单位") +
      "</span>" +
      "</div>" +
      '<ol class="zccl-honor">' +
      items +
      "</ol>" +
      '<p class="zccl-note">以上为示例支撑材料条目，可替换为正式清单、证书扫描件或 PDF 附件。</p>' +
      "</div>"
    );
  }

  function zcclMaterial(file, title, intro, headers, rows) {
    return zcclPage(file, title, zcclGalleryHtml(intro, headers, rows));
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
