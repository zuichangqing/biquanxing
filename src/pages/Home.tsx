import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CryptoModuleCard from '@/components/LearningPathCard';
import Footer from '@/components/Footer';
import { cryptoModulesData, airdropTypesData } from '@/lib/learningData';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  // 分类工具资源数据
  const toolCategories = [
    {
      id: 'data-analysis',
      title: '数据分析 & 区块链信息',
      icon: 'fa-chart-line',
      tools: [
        { name: 'Messari', description: '全面加密市场数据分析平台，支持项目研究、代币经济分析、链上数据可视化。', url: 'https://messari.io' },
        { name: 'RootData', description: '加密领域投融资数据库，追踪机构投资、项目融资动态。', url: 'https://www.rootdata.com' },
        { name: 'L2Beat', description: '二层网络数据分析平台，追踪 L2 生态 TVL、交易数据与安全状况。', url: 'https://l2beat.com' },
        { name: 'Dune', description: '链上数据可视化工具，可自定义 SQL 查询生成实时看板。', url: 'https://dune.com' },
        { name: 'DeFiLlama', description: '全球 DeFi 数据汇总平台，覆盖多链 TVL、收益率、协议数据。', url: 'https://defillama.com' },
        { name: 'Arkham Intelligence', description: '链上地址分析与情报平台。', url: 'https://arkhamintelligence.com' },
        { name: 'Santiment', description: '链上情绪、社交热度与链上数据追踪。', url: 'https://santiment.net' },
        { name: 'TokenTerminal', description: 'Web3 项目财务与链上数据研究工具。', url: 'https://tokenterminal.com' },
        { name: '非小号', description: '中文加密货币行情与项目数据平台。', url: 'https://www.feixiaohao.com' },
        { name: '律动 Odaily', description: '中文 Web3 行业资讯与市场数据。', url: 'https://www.odaily.news' },
        { name: 'Dextools', description: '实时 DEX 交易数据与图表分析工具。', url: 'https://www.dextools.io' },
        { name: 'Dexscreener', description: '多链 DEX 行情追踪与分析。', url: 'https://dexscreener.com' },
        { name: 'GMGN.ai', description: '实时链上交易数据、热榜监控与钱包追踪。', url: 'https://gmgn.ai' },
        { name: 'Birdeye', description: 'Solana 生态实时交易与链上情报工具。', url: 'https://birdeye.so' },
      ]
    },
    {
      id: 'airdrop-platforms',
      title: '空投信息 & 任务平台',
      icon: 'fa-bullseye',
      tools: [
        { name: 'Airdrops.io', description: '空投信息聚合，追踪各类加密项目空投活动。', url: 'https://airdrops.io' },
        { name: 'Galxe', description: 'Web3 任务与身份平台，支持链上任务与活动奖励。', url: 'https://galxe.com' },
        { name: 'Airdrop Alert', description: '早期空投信息与项目活动聚合。', url: 'https://airdropalert.com' },
        { name: 'QuestN', description: '多链 Web3 任务与活动平台。', url: 'https://questn.com' },
      ]
    },
    {
      id: 'dev-tools',
      title: '技术 & 开发工具',
      icon: 'fa-code',
      tools: [
        { name: 'CryptoZombies', description: 'Solidity 编程游戏化教学平台。', url: 'https://cryptozombies.io' },
        { name: 'Remix Ethereum IDE', description: '智能合约开发与调试工具。', url: 'https://remix.ethereum.org' },
        { name: 'Covalent', description: '链上数据 API 服务。', url: 'https://www.covalenthq.com' },
        { name: 'Etherscan', description: '以太坊区块链浏览器。', url: 'https://etherscan.io' },
      ]
    },
    {
      id: 'depin-projects',
      title: 'DePIN & 硬件项目',
      icon: 'fa-server',
      tools: [
        { name: 'Helium', description: '去中心化无线网络代表项目。', url: 'https://helium.com' },
        { name: 'UBI Network', description: 'DePIN 硬件生态，支持闲置算力共享与积分市场。', url: 'https://ubinetwork.ai' },
      ]
    },
    {
      id: 'nft-platforms',
      title: 'NFT & 创作平台',
      icon: 'fa-palette',
      tools: [
        { name: 'Mint.fun', description: 'NFT 铸造平台，支持快速创作与上链。', url: 'https://mint.fun' },
        { name: 'Magic Eden', description: '多链 NFT 交易市场。', url: 'https://magiceden.io' },
        { name: 'NFTGo', description: 'NFT 数据分析与市场情报平台。', url: 'https://nftgo.io' },
        { name: 'Rarity Tools', description: 'NFT 稀有度与价值分析工具。', url: 'https://rarity.tools' },
      ]
    },
    {
      id: 'exchange-learning',
      title: '交易所学习 & Dapp 排行',
      icon: 'fa-graduation-cap',
      tools: [
        { name: 'Binance Academy', description: '币安官方学习平台。', url: 'https://academy.binance.com/en' },
        { name: 'OKX 学院', description: 'OKX 官方学习与交易指南。', url: 'https://www.okx.com/academy/zh-cn' },
        { name: 'DappRadar', description: 'Dapp 数据聚合与排名平台。', url: 'https://dappradar.com' },
      ]
    },
    {
      id: 'meme-platforms',
      title: '热门 Meme 币发行平台',
      icon: 'fa-rocket',
      tools: [
        { name: 'Bonk.fun (Solana)', description: 'BONK 社区支持的 Meme 币发行平台，集成 Raydium。', url: 'https://bonk.fun' },
        { name: 'Pump.fun (Solana)', description: 'Solana 链 Meme 币快速发行与交易平台。', url: 'https://pump.fun' },
        { name: 'Odin.Fun (Bitcoin Runes)', description: 'Bitcoin Runes 协议 Meme 币发行与交易平台。', url: 'https://odin.fun' },
        { name: 'Four.meme', description: 'Meme 币发行平台，支持链上公平发行模式。', url: 'https://four.meme' },
      ]
    },
    {
      id: 'blockchain-explorers',
      title: '区块链浏览器 & 链上工具',
      icon: 'fa-search',
      tools: [
        { name: 'Blockscout', description: '多链浏览器，支持 EVM 兼容链。', url: 'https://blockscout.com' },
        { name: 'Solscan', description: 'Solana 区块浏览器。', url: 'https://solscan.io' },
        { name: 'BscScan', description: 'BNB Chain 区块浏览器。', url: 'https://bscscan.com' },
      ]
    },
    {
      id: 'bot-tools',
      title: 'Bot 工具 & 交易辅助',
      icon: 'fa-robot',
      tools: [
        { name: 'Debot.ai', description: '去中心化 AI Bot 创建与交易工具。', url: 'https://debot.ai' },
        { name: 'Slerf.tools', description: 'Meme 币链上监控与数据分析工具。', url: 'https://slerf.tools' },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* 导航栏 */}
      <Navbar />
      
      <main className="flex-grow">
        {/* 英雄区域 - 添加ID用于导航 */}
        <section id="hero">
          <Hero />
        </section>
        
        {/* 学习模块展示 */}
        <section id="modules" className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">币圈学习模块</h2>
                <p className="text-gray-300">
                  从基础到进阶，系统化学习币圈知识，每个模块包含详细知识点和推荐学习资源
                </p>
              </motion.div>
            </div>
            
            {/* 学习模块卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cryptoModulesData.map((module) => (
                <CryptoModuleCard 
                  key={module.id} 
                  module={module} 
                />
              ))}
            </div>
          </div>
        </section>

        
        {/* 工具资源汇总 */}
        <section id="resources" className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">币圈工具资源</h2>
                <p className="text-gray-300">
                  精选币圈必备工具和学习资源，助你快速入门并精通各种操作技巧
                </p>
              </motion.div>
            </div>
            
              <div className="space-y-4">
                {toolCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                      {/* 分类标题栏 - 可点击展开/折叠 */}
                      <button
                        className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                        onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                      >
                        <div className="flex items-center">
                          <i className={`fa-solid ${category.icon} text-blue-400 mr-3 text-xl`}></i>
                          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                          <span className="ml-3 bg-gray-700 text-gray-400 text-xs px-2 py-1 rounded-full">
                            {category.tools.length} 个工具
                          </span>
                        </div>
                        <i className={`fa-solid fa-chevron-down text-gray-500 transition-transform ${openCategory === category.id ? 'rotate-180' : ''}`}></i>
                      </button>
                      
                      {/* 工具列表 - 展开/折叠动画 */}
                      <motion.div
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ 
                          maxHeight: openCategory === category.id ? '1000px' : 0,
                          opacity: openCategory === category.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-2 space-y-2">
                          {category.tools.map((tool, toolIndex) => (
                            <a
                              key={toolIndex}
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-col p-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-900/50 transition-all group"
                            >
                              <div className="flex justify-between items-start">
                                <span className="text-white font-medium group-hover:text-blue-400 transition-colors">
                                  {tool.name}
                                </span>
                                <i className="fa-solid fa-external-link text-gray-500 group-hover:text-blue-400 transition-colors"></i>
                              </div>
                              <span className="text-gray-400 text-sm mt-1 line-clamp-2">{tool.description}</span>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
          </div>
        </section>
        


         {/* 基础概念提示 */}
         <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
           <div className="container mx-auto px-4 md:px-6">
             <div className="bg-blue-900/20 border border-blue-900/30 rounded-2xl p-8 max-w-4xl mx-auto">
               <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                 <i className="fa-solid fa-lightbulb text-yellow-400 mr-3"></i>
                 学习建议
               </h3>
              <p className="text-gray-300 mb-6">
                对于基础概念和专业术语理解，建议首选GPT辅助学习。以下是重点专业词及搜索方式：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-blue-400 font-medium mb-2">L1/L2 是什么？</h4>
                  <p className="text-gray-400 text-sm">GPT搜索：什么是L1（Layer1）和L2（Layer2）？它们的区别和代表项目？</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-blue-400 font-medium mb-2">NFT 是什么？</h4>
                  <p className="text-gray-400 text-sm">GPT搜索：什么是 NFT？它在Web3中有什么作用？</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-blue-400 font-medium mb-2">DePIN 是什么？</h4>
                  <p className="text-gray-400 text-sm">GPT搜索：什么是 DePIN？有哪些代表项目？</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-blue-400 font-medium mb-2">Tokenomics</h4>
                  <p className="text-gray-400 text-sm">GPT搜索：什么是 Tokenomics？如何判断一个项目的经济模型是否健康？</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      
      {/* 页脚 */}
      <Footer />
    </div>
  );
}