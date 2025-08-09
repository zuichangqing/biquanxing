import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CryptoModuleCard from '@/components/LearningPathCard';
import Footer from '@/components/Footer';
import { cryptoModulesData, airdropTypesData } from '@/lib/learningData';
import { motion } from 'framer-motion';

export default function Home() {
  // 官方链接数据
  const officialLinks = [
    { name: '数据分析平台 - Messari', url: 'https://messari.io' },
    { name: '投融资数据库 - RootData', url: 'https://www.rootdata.com' },
    { name: '二层网络数据分析 - L2Beat', url: 'https://l2beat.com' },
    { name: 'Solidity编程游戏教学 - CryptoZombies', url: 'https://cryptozombies.io' },
    { name: '空投信息聚合 - Airdrops.io', url: 'https://airdrops.io' },
    { name: 'Web3任务平台 - Galxe', url: 'https://galxe.com' },
    { name: 'DePIN项目代表 - Helium', url: 'https://helium.com' },
    { name: 'DePIN硬件项目 - UBI Network', url: 'https://ubinetwork.ai' },
    { name: 'NFT铸造平台 - Mint.fun', url: 'https://mint.fun' },
    { name: '币安官方学习平台 - Binance Academy', url: 'https://academy.binance.com/en' },
    { name: 'OKX官方学习平台 - OKX学院', url: 'https://www.okx.com/academy/zh-cn' },
    { name: 'Dapp数据聚合与排行 - DappRadar', url: 'https://dappradar.com' },
    { name: 'NFT交易市场 - Magic Eden', url: 'https://magiceden.io' },
    { name: '链上数据可视化工具 - Dune', url: 'https://dune.com' },
    { name: 'DeFi数据汇总平台 - DeFiLlama', url: 'https://defillama.com' },
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {officialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-750 rounded-lg p-4 border border-gray-700 hover:border-blue-900/30 transition-all flex items-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <i className="fa-solid fa-external-link text-blue-400 mr-3 group-hover:translate-x-1 transition-transform"></i>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{link.name}</span>
                </motion.a>
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