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
            crumbParent: {name: "成果推广应用", href: "cgtgyy/jl_tgjl.htm"},
            crumbCurrent: "育人成效",
            listHref: "cgtgyy/jl_tgjl.htm",
            title: "【Mock】育人成效：军工素养人才培养纪实",
            date: "2026-07-08",
            author: "编辑组",
            source: "校园融媒体",
            cover: "images/content/c19.jpg",
            body: [
                "本文为成果推广应用类详情页的统一 Mock 占位内容。列表中同类型条目均复用本页模板。",
                "围绕“旗舰先锋”育人模式，展示军工素养养成、品牌建设、综合实力与交流推广等方面的实践成效。",
                "后续可将正式稿件标题、日期与正文替换为真实内容，无需再为每条列表单独新建详情页。"
            ]
        },
        platform: {
            type: "platform",
            typeName: "平台详情",
            parentNav: "tsbk",
            sideKey: "tsbk",
            crumbParent: {name: "特色成果", href: "tsbk/dpt/gjjpt.htm"},
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
            crumbParent: {name: "特色成果", href: "tsbk/dtd.htm"},
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
            crumbParent: {name: "特色成果", href: "tsbk/dxm.htm"},
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
            crumbParent: {name: "特色成果", href: "tsbk/dgc.htm"},
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
            crumbParent: {name: "特色成果", href: "tsbk/dcg.htm"},
            crumbCurrent: "大成果",
            listHref: "tsbk/dcg.htm",
            title: "【Mock】示例标志性成果：国家科学技术进步奖相关成果",
            date: "2026-07-07",
            author: "",
            source: "成果介绍",
            cover: "images/奖状/1.png",
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
            crumbParent: {name: "成果简介", href: "cgjj.htm"},
            crumbCurrent: "正文",
            listHref: "cgjj.htm",
            title: "成果简介",
            date: "2026-07-07",
            author: "",
            source: "",
            cover: "images/cgjj-bg.jpg",
            body: [
                "面向海洋强国、制造强国、军民融合战略对船舶军工人才的迫切需求，针对船舶类高职军工素养培养内涵界定不清晰、培养路径不系统、评价激励不精准等难题，2011年起学校依托60余年船舶军工办学底蕴，传承中船系统“旗舰先锋”军工文化，探索形成“目标引领、分层拓展、长效支撑”的“旗舰先锋”育人模式。",
                "构建“忠诚、卓越、坚韧”三维九要素培养目标模型，创设“点上淬炼—面上融合—体上浸润”分层培养路径，建立“新兵—尖兵—标兵”进阶激励与五方协同保障体系，将军工素养转化为可培养、可评价、可激励标准，形成育人闭环管理。",
                "成果历经16年迭代实践，获央视新闻联播、光明日报等权威媒体报道，助力学校成为全国首所船舶类职业本科大学，两轮入选国家“双高计划”，获评全国文明校园、国防特色学校，累计输送军工素养人才十万余人，近8年入伍2900余人，成果在全国200余家单位推广应用，为高职军工素养培养提供标准化范式。"
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
            crumbs: [{name: "成果简介", href: "cgjj.htm"}],
            html: [
                "<p>面向海洋强国、制造强国、军民融合战略对船舶军工人才的迫切需求，针对船舶类高职军工素养培养内涵界定不清晰、培养路径不系统、评价激励不精准等难题，2011年起学校依托60余年船舶军工办学底蕴，传承中船系统“旗舰先锋”军工文化，探索形成“目标引领、分层拓展、长效支撑”的“旗舰先锋”育人模式。</p>",
                "<p>构建“忠诚、卓越、坚韧”三维九要素培养目标模型，创设“点上淬炼—面上融合—体上浸润”分层培养路径，建立“新兵—尖兵—标兵”进阶激励与五方协同保障体系，将军工素养转化为可培养、可评价、可激励标准，形成育人闭环管理。</p>",
                "<p>成果历经16年迭代实践，获央视新闻联播、光明日报等权威媒体报道，助力学校成为全国首所船舶类职业本科大学，两轮入选国家“双高计划”，获评全国文明校园、国防特色学校，累计输送军工素养人才十万余人，近8年入伍2900余人，成果在全国200余家单位推广应用，为高职军工素养培养提供标准化范式。</p>",
                `<div class="cgjj-img-wrap" style="margin-top:0.4rem;margin-bottom:.4rem;display:grid;grid-template-columns:repeat(1,1fr);gap:0.16rem;">
                <img src="images/cg/cg1.png" alt="成果配图" style="width:100%;height:auto;border-radius:0.08rem;">
                <img src="images/cg/cg4.png" alt="成果配图" style="width:100%;height:auto;border-radius:0.08rem;">
                <img src="images/cg/cg6.png" alt="成果配图" style="width:100%;height:auto;border-radius:0.08rem;">
                <img src="images/cg/cg2.png" alt="成果配图" style="width:100%;height:auto;border-radius:0.08rem;">
                <img src="images/cg/cg5.png" alt="成果配图" style="width:100%;height:auto;border-radius:0.08rem;">
                <img src="images/cg/cg3.png" alt="成果配图" style="width:100%;height:auto;border-radius:0.08rem;">
                
      </div>`
            ].join("")
        },
        cgzj: {
            kind: "content",
            nav: "cgzj",
            sideKey: "cgzj",
            sideTitle: "成果总结",
            title: "成果总结",
            crumbs: [{name: "成果总结", href: "cgzj.htm"}],
            html: "<div style=\"padding:30px 0;\">\n" +
                "    <iframe src='../cnpdf/成果推广应用/成果总结报告总览.pdf' style=\"width:100%;height:90vh;border:none;\" title=\"成果申报书PDF预览\"></iframe>\n" +
                "</div>"
        },
        "sbs/zyjjdjxwt": sbsPage("zyjjdjxwt", "申报书",
            "<p>【Mock】面向交通强国建设，研究生培养需回应极端环境、复杂场景、数智融合与国际协同等新要求。</p>" +
            "<p><strong>（一）科研训练与重大工程衔接不畅</strong></p><p>现有科研训练深入工程一线不够，复杂工程集成创新能力不足。</p>" +
            "<p><strong>（二）课程体系与行业转型契合不深</strong></p><p>数智模块与专业内容融合不够，技术融合创新能力有待提升。</p>" +
            "<p><strong>（三）国际化培养与海外工程融通不足</strong></p><p>海外真实工程场景培养路径不健全，跨文化工程胜任力培育滞后。</p>"),
        "sbs/cgjjjxwtdff": sbsPage("cgjjjxwtdff", "曾获奖励",
            "<p>【Mock】围绕三大问题，构建“工程出题—科研解题—教学入题”科产教融合路径。</p>" +
            "<p>一是以重大工程为载体组建跨学科团队；二是建设数智交叉课程；三是依托国际平台开展双向研训。</p>"),
        "sbs/cgdcxd": sbsPage("cgdcxd", "成果简介",
            "<div style=\"padding:30px 0;\">\n" +
            "    <iframe src='../cnpdf/申报材料-成果推广/成果申报书.pdf' style=\"width:100%;height:90vh;border:none;\" title=\"成果申报书PDF预览\"></iframe>\n" +
            "</div>"),
        "sbs/cgdtgyyxg": sbsPage("cgdtgyyxg", "问题与方案",
            "[Mock]"),
        "sbs/zywcrqk": sbsPage("zywcrqk", "成果创新点",
            "<p>【Mock】主要完成人由教学名师、科研骨干与行业导师组成，长期深耕公路交通研究生培养一线。</p>"),
        "sbs/zywcdwytjdwyj": sbsPage("zywcdwytjdwyj", "推广应用效果",
            "<p>【Mock】完成单位与推荐单位对本成果的创新性、应用性与示范性给予肯定，建议继续深化推广。</p>"),
        "sbs/jl_tgjl": sbsPage("jl_tgjl", "推广材料", "\n" +
            "            <div style=\"padding:30px 0;\">\n" +
            "                <iframe src='../cnpdf/申报材料-成果推广/交流推广.pdf' style=\"width:100%;height:90vh;border:none;\" title=\"推广材料PDF预览\"></iframe>\n" +
            "            </div>"),
        "sbs/jl_cgyy": sbsPage("jl_cgyy", "军工品牌",
            "<div style=\"padding:30px 0;\">\n" +
            "    <iframe src='../cnpdf/申报材料-成果推广/军工品牌.pdf' style=\"width:100%;height:90vh;border:none;\" title=\"军工品牌PDF预览\"></iframe>\n" +
            "</div>"),

        "sbs/jl_bxsl": sbsPage("jl_bxsl", "办学实力",
            "<div style=\"padding:30px 0;\">\n" +
            "    <iframe src='../cnpdf/申报材料-成果推广/办学实力.pdf' style=\"width:100%;height:90vh;border:none;\" title=\"办学实力PDF预览\"></iframe>\n" +
            "</div>"),

        "sbs/jl_yrex": sbsPage("jl_yrex", "育人效果",
            "<div style=\"padding:30px 0;\">\n" +
            "    <iframe src='../cnpdf/申报材料-成果推广/育人效果.pdf' style=\"width:100%;height:90vh;border:none;\" title=\"育人效果PDF预览\"></iframe>\n" +
            "</div>"),

        "sbs/pyjz": sbsPage("pyjz", "培养矩阵",
            "<div style=\"padding:30px 0;\">\n" +
            "    <iframe src='../cnpdf/主要解决的问题/培养矩阵.pdf' style=\"width:100%;height:90vh;border:none;\" title=\"培养矩阵PDF预览\"></iframe>\n" +
            "</div>"),

        "sbs/zhtx": sbsPage("zhtx", "支撑体系",
            "<div style=\"padding:30px 0;\">\n" +
            "    <iframe src='../cnpdf/主要解决的问题/支撑体系.pdf' style=\"width:100%;height:90vh;border:none;\" title=\"支撑体系PDF预览\"></iframe>\n" +
            "</div>"),

        "sbs/ddtsj": sbsPage("ddtsj", "教导团实践",
            "<div style=\"padding:30px 0;\">\n" +
            "    <iframe src='../cnpdf/主要解决的问题/教导团实践.pdf' style=\"width:100%;height:90vh;border:none;\" title=\"教导团实践PDF预览\"></iframe>\n" +
            "</div>"),

        "sbs/ltyj": sbsPage("ltyj", "理论研究",
            "<div style=\"padding:30px 0;\">\n" +
            "    <iframe src='../cnpdf/主要解决的问题/理论研究.pdf' style=\"width:100%;height:90vh;border:none;\" title=\"理论研究PDF预览\"></iframe>\n" +
            "</div>"),

        "sbs/yrst": sbsPage("yrst", "育人生态",
            "<div style=\"padding:30px 0;\">\n" +
            "    <iframe src='../cnpdf/主要解决的问题/育人生态.pdf' style=\"width:100%;height:90vh;border:none;\" title=\"育人生态PDF预览\"></iframe>\n" +
            "</div>"),

        zccl: {
            kind: "content",
            nav: "zccl",
            sideKey: "zccl",
            sideTitle: "支撑材料",
            title: "支撑材料",
            crumbs: [{name: "支撑材料", href: "zccl/cgjl.htm"}],
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
            [],
            []
        ),
        "zccl/cgjl": zcclMaterial(
            "cgjl",
            "成果奖励",
            "",
            "../cnpdf/支撑材料/成果获奖.pdf"
        ),
        "zccl/zd_zd_xm": zcclMaterial(
            "zd_zd_xm",
            "单项奖励",
            "",
            "../cnpdf/支撑材料/单项奖励.pdf"
        ),
        "zccl/xkzc": zcclMaterial(
            "xkzc",
            "综合荣誉",
            "",
            "../cnpdf/支撑材料/综合荣誉.pdf"
        ),
        "zccl/jgxm": zcclMaterial(
            "jgxm",
            "教师成果",
            "",
            "../cnpdf/支撑材料/教师成果.pdf"
        ),
        "zccl/kcjs": zcclMaterial(
            "xsry",
            "学生成果",
            "",
            "../cnpdf/支撑材料/学生成果.pdf"
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


        "cgtgyy/mtbd": listPage("cgtgyy", "成果推广应用", "育人成效", "mtbd", "article", [
            "【Mock】育人成效一：军工素养人才成长路径",
            "【Mock】育人成效二：入伍服役与典型学生故事",
            "【Mock】育人成效三：竞赛获奖与岗位胜任表现",
            "【Mock】育人成效四：校企协同育人实践扫描",
            "【Mock】育人成效五：分层培养进阶案例"
        ]),
        "cgtgyy/cgyy": listPage("cgtgyy", "成果推广应用", "军工品牌", "cgyy", "article", [
            "【Mock】军工品牌一：旗舰先锋文化传播纪实",
            "【Mock】军工品牌二：中船系统文化进校园",
            "【Mock】军工品牌三：国防特色学校品牌建设"
        ]),
        "cgtgyy/rcpycx": listPage("cgtgyy", "成果推广应用", "综合实力", "rcpycx", "article", [
            "【Mock】综合实力一：双高计划建设进展",
            "【Mock】综合实力二：职业本科办学跃升",
            "【Mock】综合实力三：文明校园与国防特色建设"
        ]),
        "cgtgyy/tgjl": listPage("cgtgyy", "成果推广应用", "交流推广", "tgjl", "article", [
            "【Mock】交流推广一：全国会议专题分享",
            "【Mock】交流推广二：高校互访与经验借鉴",
            "【Mock】交流推广三：行业论坛成果发布"
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
        ], true),
        "tsbk/dcg": listPage("tsbk", "特色版块", "大成果", "dcg", "achievement", [
            "<div class='pic-wrap'>" +
            "<img src='images/cg1.jpg' alt='成果图片1'>" +
            "<img src='images/cg2.jpg' alt='成果图片2'>" +
            "<img src='images/cg3.jpg' alt='成果图片3'>" +
            "<img src='images/cg4.jpg' alt='成果图片4'>" +
            "<img src='images/cg5.jpg' alt='成果图片5'>" +
            "<img src='images/cg6.jpg' alt='成果图片6'>" +
            "<img src='images/cg7.jpg' alt='成果图片7'>" +
            "</div>",
            "国家科学技术进步奖相关成果一",
            "国家科学技术进步奖相关成果二",
            "省部级标志性科技奖示例",
            "教学成果标志性奖项示例"
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
                {name: "申报书", href: "sbs/zyjjdjxwt.htm"},
                {name: title, href: "sbs/" + file + ".htm"}
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
                {name: "支撑材料", href: "zccl/cgjl.htm"},
                {name: title, href: "zccl/" + file + ".htm"}
            ],
            html: html
        };
    }

    function zcclGalleryHtml(intro, headers, rows) {
        var head = headers
            .map(function (h) {
                return "<th>" + (h || "") + "</th>";
            })
            .join("");
        var body = rows
            .map(function (r) {
                return (
                    "<tr>" +
                    r
                        .map(function (c) {
                            return "<td>" + (c || "") + "</td>";
                        })
                        .join("") +
                    "</tr>"
                );
            })
            .join("");
        return (
            "<p>" +
            intro +
            "</p>" +
            '<div class="contt_zhwen">' +
            "<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\" style=\"width:100%;border-collapse:collapse;\">" +
            "<thead><tr>" +
            head +
            "</tr></thead><tbody>" +
            body +
            "</tbody></table></div>" +
            "<p>【Mock】以上为示例支撑材料条目，可替换为正式清单或附件。</p>"
        );
    }

    /**
     * zcclMaterial 兼容双模式
     * 模式1（默认表格，老用法）：zcclMaterial(file, title, intro, headers[], rows[][])
     * 模式2（PDF预览新模式）：zcclMaterial(file, title, "", pdfPathString)
     * @param {string} file
     * @param {string} title
     * @param {string} intro
     * @param {string|Array} arg4  如果是字符串=pdf路径；数组=表头headers
     * @param {Array} rows 表格行数据（仅表格模式生效）
     */
    function zcclMaterial(file, title, intro, arg4, rows) {
        // 判断：第四个参数是字符串 → PDF模式
        if (typeof arg4 === "string" && !Array.isArray(arg4)) {
            const pdfPath = arg4;
            const pdfHtml = `
<div style="padding:30px 0;">
    <iframe src='${pdfPath}' style="width:100%;height:90vh;border:none;" title="${title}PDF预览"></iframe>
</div>`;
            return zcclPage(file, title, pdfHtml);
        }

        // 否则走原有表格渲染逻辑（默认，兼容全部旧代码）
        const headers = arg4;
        const innerHtml = zcclGalleryHtml(intro, headers, rows);
        return zcclPage(file, title, innerHtml);
    }

    function listPage(nav, sideTitle, title, activeSide, detailType, titles, isTsbk) {
        var crumbs;
        if (nav === "cgtgyy") {
            crumbs = [
                {name: "成果推广应用", href: "cgtgyy/jl_tgjl.htm"},
                {name: title, href: "cgtgyy/" + activeSide + ".htm"}
            ];
        } else if (activeSide === "gjjpt" || activeSide === "gjlhyjzx" || activeSide === "sbjpt") {
            crumbs = [
                {name: "特色版块", href: "tsbk/dpt/gjjpt.htm"},
                {name: title, href: "tsbk/dpt/" + activeSide + ".htm"}
            ];
        } else {
            crumbs = [
                {name: "特色版块", href: "tsbk/dpt/gjjpt.htm"},
                {name: title, href: "tsbk/" + activeSide + ".htm"}
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
            {file: "cgdcxd", name: "A1 成果简介", desc: "成果概述说明", href: "sbs/cgdcxd.htm"},
            {
                file: "cgdtgyyxg",
                name: "A2 推广应用效果 ",
                desc: "应用成效与影响",
                expandable: true,
                children: [
                    {file: "jl_tgjl", name: "交流推广", href: "sbs/jl_tgjl.htm"},
                    {file: "jl_cgyy", name: "军工品牌", href: "sbs/jl_cgyy.htm"},
                    {file: "jl_bxsl", name: "办学实力", href: "sbs/jl_bxsl.htm"},
                    {file: "jl_yrex", name: "育人效果", href: "sbs/jl_yrex.htm"}
                ],
                href: "sbs/jl_tgjl.htm"
            },
            {file: "zywcrqk", name: "A3 创新点", desc: "创新亮点凝练", href: "sbs/zywcrqk.htm"},
            {
                file: "zywcdwytjdwyj",
                name: "A4 主要解决的教学问题及解决方案",
                desc: "问题研判与对策",
                expandable: true,
                href: "sbs/pyjz.htm",
                children: [
                    {file: "pyjz", name: "培养矩阵", href: "sbs/pyjz.htm"},
                    {file: "zhtx", name: "支撑体系", href: "sbs/zhtx.htm"},
                    {file: "ddtsj", name: "教导团实践", href: "sbs/ddtsj.htm"},
                    {file: "ltyj", name: "理论研究", href: "sbs/ltyj.htm"},
                    {file: "yrst", name: "育人生态", href: "sbs/yrst.htm"}
                ]
            }],

        zccl: [
            {file: "cgjd", name: "A1 成果鉴定书", desc: "专家鉴定意见", href: "zccl/cgjd.htm"},
            {file: "cgjl", name: "A2 成果获奖", desc: "教学成果获奖", href: "zccl/cgjl.htm"},
            {file: "zd_zd_xm", name: "A3 单项奖励", desc: "各类单项荣誉", href: "zccl/zd_zd_xm.htm"},
            {file: "xkzc", name: "A4 综合荣誉", desc: "项目平台综合荣誉", href: "zccl/xkzc.htm"},
            {file: "jgxm", name: "A5 教师成果", desc: "团队与个人荣誉成果", href: "zccl/jgxm.htm"},
            {file: "kcjs", name: "A6 学生成果", desc: "研创竞赛获奖成果", href: "zccl/kcjs.htm"}
        ],
        cgtgyy: [
            {file: "mtbd", name: "A1 育人成效", desc: "素养养成与典型案例", href: "sbs/jl_tgjl.htm"},
            {file: "cgyy", name: "A2 军工品牌", desc: "旗舰先锋文化传播", href: "sbs/jl_cgyy.htm"},
            {file: "rcpycx", name: "A3 综合实力", desc: "双高建设与办学成效", href: "sbs/jl_bxsl.htm"},
            {file: "tgjl", name: "A4 交流推广", desc: "研讨交流与推广纪要", href: "sbs/jl_yrex.htm"}
        ],
        tsbk: [
            {
                file: "dpt",
                name: "大平台",
                expandable: true,
                children: [
                    {file: "gjjpt", name: "国家级平台", href: "tsbk/dpt/gjjpt.htm"},
                    {file: "gjlhyjzx", name: "国际联合研究中心", href: "tsbk/dpt/gjlhyjzx.htm"},
                    {file: "sbjpt", name: "省部级平台", href: "tsbk/dpt/sbjpt.htm"}
                ]
            },
            {file: "dtd", name: "大团队", href: "tsbk/dtd.htm"},
            {file: "dxm", name: "大项目", href: "tsbk/dxm.htm"},
            {file: "dgc", name: "大工程", href: "tsbk/dgc.htm"},
            {file: "dcg", name: "特色成果", href: "tsbk/dcg.htm"}
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
