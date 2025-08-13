import { useParams, useNavigate } from 'react-router-dom';
import { cryptoModulesData } from '@/lib/learningData';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { useEffect } from 'react';

export default function ModuleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // 页面加载或模块ID变化时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // 查找当前模块数据
  const module = cryptoModulesData.find(item => item.id === id);
  
  if (!module) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">模块未找到</h2>
            <p className="text-gray-400 mb-6">抱歉，请求的学习模块不存在或已被移除</p>
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              返回首页
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // 获取难度级别对应的样式和文本
  const getDifficultyInfo = () => {
    switch(module.difficulty) {
      case 'beginner':
        return { 
          badge: <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-2 py-1 rounded-full">入门</span>,
          text: '适合币圈新手，无需 prior knowledge'
        };
      case 'intermediate':
        return { 
          badge: <span className="bg-yellow-500/20 text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">中级</span>,
          text: '需要基础区块链知识，适合有一定经验的用户'
        };
      case 'advanced':
        return { 
          badge: <span className="bg-red-500/20 text-red-400 text-xs font-semibold px-2 py-1 rounded-full">高级</span>,
          text: '适合有丰富经验的用户，涉及复杂概念和技术'
        };
      default:
        return { 
          badge: <span className="bg-gray-500/20 text-gray-400 text-xs font-semibold px-2 py-1 rounded-full">未知</span>,
          text: '难度级别未指定'
        };
    }
  };
  
  const difficultyInfo = getDifficultyInfo();
  
  // 获取分类对应的图标和颜色
  const getCategoryInfo = () => {
    const categories = {
      blockchain: { icon: 'fa-link', color: 'text-blue-400', bg: 'bg-blue-900/20' },
      tools: { icon: 'fa-wrench', color: 'text-cyan-400', bg: 'bg-cyan-900/20' },
      airdrops: { icon: 'fa-gift', color: 'text-purple-400', bg: 'bg-purple-900/20' },
      mining: { icon: 'fa-server', color: 'text-green-400', bg: 'bg-green-900/20' },
      exchange: { icon: 'fa-chart-line', color: 'text-orange-400', bg: 'bg-orange-900/20' },
      nft: { icon: 'fa-image', color: 'text-pink-400', bg: 'bg-pink-900/20' },
      development: { icon: 'fa-code', color: 'text-blue-400', bg: 'bg-blue-900/20' },
      community: { icon: 'fa-users', color: 'text-indigo-400', bg: 'bg-indigo-900/20' },
      design: { icon: 'fa-palette', color: 'text-purple-400', bg: 'bg-purple-900/20' },
      marketing: { icon: 'fa-bullhorn', color: 'text-yellow-400', bg: 'bg-yellow-900/20' },
    };
    
    const category = categories[module.category as keyof typeof categories] || 
                     { icon: 'fa-question', color: 'text-gray-400', bg: 'bg-gray-900/20' };
                     
    return (
      <div className={`${category.bg} w-12 h-12 rounded-full flex items-center justify-center`}>
        <i className={`fa-solid ${category.icon} ${category.color} text-xl`}></i>
      </div>
    );
  };
  
  // 模块详细内容 - 根据模块ID返回对应详细信息
  const getModuleDetails = () => {
    // 这里根据不同模块返回不同的详细内容
    switch(module.id) {
      case 'module-1':
        return {
          introduction: "Layer 1 (L1) 区块链是区块链网络的基础层，负责处理和确认交易，并维护网络的安全性。本模块将深入探讨主流公链的结构、共识机制和代币模型。",
          learningContent: [
            "公链基本概念与工作原理",
            "主流共识机制对比 (PoW, PoS, DPoS等)",
            "代币经济学 (Tokenomics) 核心要素",
            "以太坊 (ETH) 生态系统详解",
            "Solana (SOL) 高性能架构分析",
            "Cosmos (ATOM) 跨链生态系统",
            "主流公链优缺点对比与选择策略"
          ],
          learningSuggestions: [
            "先理解区块链基本概念，再深入特定公链",
            "通过Messari等平台研究各公链的数据分析报告",
            "关注公链重大升级和生态发展",
            "尝试在测试网上部署简单合约，加深理解"
          ]
        };
      case 'module-2':
        return {
          introduction: "Layer 2 (L2) 是建立在Layer 1区块链之上的扩容解决方案，旨在解决主链拥堵和高Gas费问题。本模块将学习各种扩容方案、Rollup原理及跨链桥接交互。",
          learningContent: [
            "区块链扩容挑战与解决方案概述",
            "Rollup技术原理 (Optimistic Rollup vs ZK-Rollup)",
            "状态通道与侧链技术对比",
            "主流L2项目详解 (Arbitrum, Optimism, zkSync等)",
            "跨链桥接原理与安全考量",
            "L2生态系统与应用场景",
            "L2未来发展趋势与挑战"
          ],
          learningSuggestions: [
            "先理解L1的局限性，再学习L2解决方案的必要性",
            "通过L2Beat等平台比较不同L2项目的性能和安全性",
            "实际体验不同L2的交互流程，感受速度和费用差异",
            "关注以太坊官方对L2的规划和支持"
          ]
        };
      case 'module-3':
        return {
          introduction: "钱包是进入Web3世界的门户，掌握钱包使用和链上操作是币圈入门的基础技能。本模块将学习主流钱包的使用方法、RPC配置和跨链桥操作。",
          learningContent: [
            "加密货币钱包类型与原理 (热钱包、冷钱包、多签钱包)",
            "MetaMask安装、配置与高级功能",
            "Phantom钱包与Solana生态交互",
            "钱包安全最佳实践 (助记词管理、私钥保护)",
            "RPC节点配置与自定义网络添加",
            "主流跨链桥使用方法与风险防范",
            "链上交易查询与故障排查"
          ],
          learningSuggestions: [
            "先使用测试网熟悉钱包操作，再处理真实资产",
            "建立钱包安全意识，不轻易泄露助记词和私钥",
            "学习识别钓鱼网站和恶意链接",
            "尝试不同类型的钱包，了解各自优缺点"
          ]
        };
           case 'module-4':
         return {
           introduction: "空投任务平台是获取加密货币空投的重要渠道，本模块将学习如何使用Galxe、Zealy、TaskOn等平台，以及如何判别空投任务的真伪。",
           learningContent: [
             "什么是Galxe？ - 去中心化凭证数据网络，提供任务和空投机会的平台",
             "什么是Zealy？ - 前身为Crew3，是Web3项目社区建设和任务管理平台",
             "什么是TaskOn？ - 一站式Web3任务聚合平台，提供丰富的项目任务",
             "如何判别空投真伪？ - 识别钓鱼链接、虚假项目和高风险任务的方法",
             "空投任务完成策略 - 高效完成任务并提高获得空投概率的技巧",
             "空投时间线管理 - 跟踪项目空投进度和重要时间节点"
           ],
           learningSuggestions: [
             "先在一个平台熟练操作后，再扩展到其他平台",
             "建立专门的空投任务邮箱和钱包，与主钱包分离",
             "定期整理和备份已完成的任务记录",
             "加入空投社区，分享和获取最新信息"
           ]
         };
       case 'module-5':
         return {
           introduction: "DePIN (Decentralized Physical Infrastructure Networks) 是通过区块链激励构建的物理基础设施网络。本模块将学习DePIN的硬件设备、挖矿机制和UBI等典型项目。",
           learningContent: [
             "什么是DePIN？ - 去中心化物理基础设施网络的概念和特点",
             "DePIN硬件设备类型 - 不同项目所需的专用和通用硬件设备",
             "DePIN挖矿机制 - 贡献物理资源获取代币奖励的工作原理",
             "什么是UBI项目？ - 全民基本收入模式的DePIN平台解析",
             "Helium网络详解 - 去中心化无线网络的先驱项目",
             "DePIN经济模型 - 代币分配、激励机制和可持续性设计"
           ],
           learningSuggestions: [
             "从了解典型DePIN项目开始，掌握基本概念",
             "关注硬件成本与收益比，避免盲目投入",
             "研究项目白皮书，理解代币经济和长期价值",
             "参与DePIN社区，交流设备配置和优化经验"
           ]
         };
       case 'module-6':
         return {
           introduction: "空投是加密货币项目分发代币的重要方式，本模块将学习活跃度空投、白名单空投、NFT空投等不同类型空投的特点和参与方法。",
           learningContent: [
             "什么是活跃度空投？ - 通过日常使用和交互获得的空投类型",
             "什么是白名单空投？ - 满足特定条件并通过审核的空投资格",
             "什么是NFT空投？ - 以非同质化代币形式发放的空投",
             "NFT参与空投策略 - 如何通过持有NFT获得更多空投机会",
             "Twitter关键词追踪技巧 - 及时发现空投信息的方法",
             "Mint.fun平台使用 - NFT空投和铸造平台的操作指南"
           ],
           learningSuggestions: [
             "建立空投信息收集渠道，及时获取最新空投机会",
             "了解不同类型空投的参与成本和潜在收益",
             "注意空投诈骗防范，不泄露私钥和个人信息",
             "记录参与的空投项目，建立自己的空投日历"
           ]
         };
       case 'module-7':
         return {
           introduction: "交易所是加密货币交易和投资的核心平台，本模块将全面学习现货/合约交易、杠杆、量化策略、Launchpad、流动性池和理财产品等交易所玩法。",
           learningContent: [
             "什么是现货交易？ - 直接买卖实际加密货币的交易方式",
             "什么是合约交易？ - 基于加密货币价格的衍生品交易，允许做空和杠杆",
             "什么是杠杆？ - 借入资金放大交易头寸，提高潜在收益(和风险)",
             "什么是量化策略？ - 使用算法和自动化程序执行的交易策略",
             "什么是Launchpad？ - 加密货币项目首次发行代币的平台",
             "什么是流动性池？ - 提供交易对流动性并获得收益的机制",
             "什么是理财产品？ - 加密货币的储蓄、理财和增值服务"
           ],
           learningSuggestions: [
             "先从现货交易开始，熟悉基本操作后再尝试合约和杠杆",
             "使用模拟交易功能练习量化策略，再投入真实资金",
             "了解不同交易所的优缺点，分散风险",
             "学习技术分析和风险管理，建立自己的交易系统"
           ]
         };
       case 'module-8':
         return {
           introduction: "链游与NFT生态是Web3中最具创新性和娱乐性的领域。本模块将学习GameFi模式、链游分发平台、NFT收藏和交易机制。",
           learningContent: [
             "什么是GameFi？ - 游戏化金融的概念和Play-to-Earn模式",
             "链游分发平台类型 - 中心化和去中心化的游戏发布渠道",
             "NFT收藏价值评估 - 影响NFT价格的因素和估值方法",
             "NFT铸造机制 - 创建和发行非同质化代币的过程",
             "NFT转售与交易流程 - 在市场平台买卖NFT的操作步骤",
             "链游经济系统 - 游戏内代币、道具和资产的设计与流通"
           ],
           learningSuggestions: [
             "从免费或低成本链游开始体验，了解基本玩法",
             "关注NFT社区和艺术家，培养审美和判断力",
             "学习使用DappRadar等数据平台分析链游和NFT市场",
             "注意链游和NFT的高风险性，控制投资比例"
           ]
         };
       case 'module-9':
         return {
           introduction: "链上数据分析工具是理解加密货币市场和项目的重要手段。本模块将学习Dune、DeFiLlama、Zapper和Nansen等工具的基础用法。",
           learningContent: [
             "什么是Dune？ - 链上数据可视化平台的查询和使用方法",
             "什么是DeFiLlama？ - 去中心化金融协议的TVL数据追踪工具",
             "什么是Zapper？ - 多链资产管理和可视化仪表盘",
             "什么是Nansen？ - 链上钱包追踪和地址标签分析工具",
             "TVL指标解析 - 总锁仓价值的计算方法和参考意义",
             "钱包地址分析技巧 - 通过链上数据识别市场趋势和大户行为"
           ],
           learningSuggestions: [
             "从简单的数据分析面板开始，逐步学习复杂查询",
             "尝试复制和修改社区分享的分析模板，加深理解",
             "结合市场新闻和链上数据，提高分析准确性",
             "定期跟踪关键指标，建立对市场的敏感度"
           ]
         };
       case 'module-10':
         return {
           introduction: "技术能力是深入参与Web3的重要基础。本模块将学习Python脚本、Web3.js、钱包监听、Node运行和RPC监控等实用技术。",
           learningContent: [
             "Python脚本在Web3中的应用 - 自动化任务和数据分析",
             "什么是Web3.js？ - 与以太坊区块链交互的JavaScript库",
             "钱包监听实现方法 - 跟踪特定地址交易活动的技术",
             "Node运行环境配置 - 搭建Web3开发和运行环境",
             "RPC监控工具 - 远程过程调用节点的状态和性能监控",
             "API接口调用技巧 - 与区块链数据平台交互的方法"
           ],
           learningSuggestions: [
             "从基础编程知识开始，逐步学习Web3特定库和工具",
             "在GitHub上寻找开源项目，学习实际代码和应用场景",
             "使用测试网进行开发和测试，避免真实资产风险",
             "参与开发者社区，解决技术问题并分享经验"
           ]
         };
       case 'module-11':
         return {
           introduction: "社群传播与PR是Web3项目成功的关键因素。本模块将学习Shill语言、Twitter社区节奏、TG发言规律和小号设置等实用技能。",
           learningContent: [
             "什么是Shill语言？ - 加密社区中的推广和营销话术",
             "Twitter社区节奏把握 - 最佳发帖时间和内容策略",
             "TG群发言规律 - 在Telegram群组有效互动的技巧",
             "小号设置与管理 - 多账号运营的方法和注意事项",
             "社群情绪分析 - 判断社区氛围和项目热度的指标",
             "社区贡献价值 - 有效参与社区建设获得认可的途径"
           ],
           learningSuggestions: [
             "观察成功项目的社群运营方式，学习最佳实践",
             "从被动观察开始，逐步参与社群讨论",
             "建立自己的社群身份和专业形象，提高影响力",
             "注意遵守社区规则，避免过度营销引起反感"
           ]
         };
       case 'module-12':
         return {
           introduction: "内容与视觉表达在Web3项目推广中至关重要。本模块将学习封面设计、信息图表、推文卡片和图文格式优化等实用技能。",
           learningContent: [
             "加密货币封面设计原则 - 吸引注意力的视觉元素和布局",
             "信息图表制作方法 - 将复杂区块链概念可视化的技巧",
             "推文卡片优化技巧 - 提高社交媒体内容点击率的设计要点",
             "图文格式规范 - 加密内容的排版和可读性提升方法",
             "Midjourney提示词设计 - AI生成加密相关图像的关键词技巧",
             "品牌视觉一致性 - 保持项目形象统一的设计系统"
           ],
           learningSuggestions: [
             "使用Canva等工具开始练习，制作简单的加密内容",
             "分析热门加密项目的视觉设计，提取可借鉴元素",
             "学习基础色彩理论和排版知识，提升设计感",
             "A/B测试不同设计方案，优化内容效果"
           ]
         };
       case 'module-13':
         return {
           introduction: "理解各平台机制是Web3内容传播的关键。本模块将学习Telegram限流、X(原Twitter)推文推荐机制、小红书限流和抖音标签等平台特性。",
           learningContent: [
             "TG限流原因与解决方法 - Telegram账号和内容限制的应对策略",
             "X推文推荐机制 - 影响内容曝光的算法因素和优化方法",
             "小红书限流规则 - 加密内容在小红书的发布注意事项",
             "抖音标签优化 - 提高加密相关内容可见度的标签策略",
             "平台热门机制分析 - 不同平台内容走红的共同特征",
             "多平台内容适配 - 同一内容在不同平台的调整技巧"
           ],
           learningSuggestions: [
             "建立平台测试账号，小规模测试内容和发布策略",
             "记录和分析自己内容的表现数据，总结规律",
             "关注平台政策变化，及时调整运营策略",
             "学习优秀创作者的内容形式和发布节奏"
           ]
         };
       default:
         // 为未定义的模块提供默认详细内容结构
         return {
           introduction: `${module.title} 是币圈生态中的重要组成部分。本模块将深入学习${module.learningContent}。`,
           learningContent: [
             `${module.title}基础概念`,
             `${module.title}核心技术原理`,
             `${module.title}实际应用场景`,
             `${module.title}主流平台使用`,
             `${module.title}风险防范策略`,
             `${module.title}未来发展趋势`
           ],
           learningSuggestions: [
             "从基础概念开始，逐步深入技术细节",
             "结合推荐网站的教程进行实践操作",
             "参与相关社区讨论，解决学习疑问",
             "定期回顾和总结，巩固所学知识"
           ]
         };
    }
  };
  
  const moduleDetails = getModuleDetails();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      
      <main className="flex-grow">

        
        {/* 模块头部 */}
        <section className="relative py-16 overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 z-0"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.15),transparent_40%)] z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
                  {getCategoryInfo()}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                     <h1 className="text-3xl md:text-4xl font-bold text-white">{module.title}</h1>
                    </div>
                    <div className="flex items-center gap-3">
                      {difficultyInfo.badge}
                      <span className="text-gray-400 text-sm">{difficultyInfo.text}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 mb-6">
                  {module.learningContent}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {module.searchKeywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className="bg-gray-800/50 text-gray-300 text-sm px-3 py-1.5 rounded-full border border-gray-700"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* 模块详情内容 */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* 模块介绍 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <i className="fa-solid fa-info-circle text-blue-400 mr-2"></i>
板块介绍
                </h2>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    {moduleDetails.introduction}
                  </p>
                </div>
              </motion.div>
              
              {/* 学习内容方向 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <i className="fa-solid fa-book text-blue-400 mr-2"></i>
                  学习内容方向
                </h2>
                <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
                  <ul className="divide-y divide-gray-800">
                    {moduleDetails.learningContent.map((item, index) => (
                      <li key={index} className="p-4 hover:bg-gray-850 transition-colors">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-blue-400 text-sm font-medium">{index + 1}</span>
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
              {/* 推荐网站 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <i className="fa-solid fa-link text-blue-400 mr-2"></i>
                  推荐网站
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {module.recommendedWebsites.map((site, index) => (
                    <a
                      key={index}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 rounded-xl p-5 border border-gray-700 hover:border-blue-900/50 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {site.name}
                        </h3>
                        <i className="fa-solid fa-external-link text-gray-500 group-hover:text-blue-400 transition-colors"></i>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {site.description}
                      </p>
                      <div className="mt-3 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                        {site.url}
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
              
              {/* 学习建议 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <i className="fa-solid fa-lightbulb text-yellow-400 mr-2"></i>
                  学习方向建议
                </h2>
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-900/30 rounded-xl p-6">
                  <ul className="space-y-4">
                    {moduleDetails.learningSuggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                          <i className="fa-solid fa-check text-blue-400 text-xs"></i>
                        </div>
                        <span className="text-gray-300">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* 下一步学习 */}
        <section className="py-12 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-white mb-6 text-center">下一步学习</h2>
              
              <div className="flex justify-between items-center">
                {module.moduleNumber > 1 ? (
                  <button
                    onClick={() => {
                      const prevModule = cryptoModulesData.find(m => m.moduleNumber === module.moduleNumber - 1);
                      if (prevModule) navigate(`/module/${prevModule.id}`);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-750 text-white rounded-lg transition-colors"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                     <span>上一板块</span>
                  </button>
                ) : (
                  <div className="w-32"></div> // 占位元素保持居中
                )}
                
                <button
                  onClick={() => navigate('/')}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
             返回列表
                </button>
                
                {module.moduleNumber < cryptoModulesData.length ? (
                  <button
                    onClick={() => {
                      const nextModule = cryptoModulesData.find(m => m.moduleNumber === module.moduleNumber + 1);
                      if (nextModule) navigate(`/module/${nextModule.id}`);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-750 text-white rounded-lg transition-colors"
                  >
                     <span>下一板块</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                ) : (
                  <div className="w-32"></div> // 占位元素保持居中
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}