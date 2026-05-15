import { useState } from 'react'
import { Calendar, ArrowRight, Tag, Eye, Droplets, Leaf, Users, Award } from 'lucide-react'

const News = ({ onNavigate }) => {
  const [activeTag, setActiveTag] = useState('all')

  const tags = [
    { id: 'all', name: '全部' },
    { id: 'project', name: '项目动态' },
    { id: 'policy', name: '政策解读' },
    { id: 'community', name: '社区故事' },
    { id: 'media', name: '媒体报道' },
  ]

  const news = [
    {
      id: 1,
      title: '阡陌海绵首例设计方案出炉',
      excerpt: '经团队专业设计，阡陌海绵项目正式纳入城市更新公益示范项目库，将获得专项政策支持',
      date: '2025-09-10',
      tag: 'project',
      image: '/images/news1.png',
      views: 1567,
      url: 'badgateway',
    },
    {
      id: 2,
      title: '2026年西安32个老旧小区将迎来"新生"',
      excerpt: '除了争取各级财政资金支持，西安也鼓励原产权单位、居民和社会资本参与。',
      date: '2026-03-10',
      tag: 'media',
      image: '/images/news2.png',
      views: 2345,
      url: 'https://www.jiemian.com/article/14091771.html',
    },
    {
      id: 3,
      title: '四阶段工作坊方法论正式发布',
      excerpt: '《梯田智慧社区转译白皮书V2.0》发布，详解四阶段参与式公益工作坊操作指南',
      date: '2026-04-15',
      tag: 'policy',
      image: '/images/news3.png',
      views: 1890,
      url: 'badgateway',
    },
    {
      id: 4,
      title: '焦点访谈｜破局老旧小区改造 多地在“拆”与“建”平衡中书写民生答卷',
      excerpt: '央视网消息（焦点访谈）：老旧小区改造，尤其是非成套住宅的改造，是城市绕不开的民生“必答题”，关系千家万户。这些“超龄服役”的老小区，大多存在着管线老化、结构隐患等问题，困扰居民的还有没有独立的厨房、卫生间，缺少公共空间等等生活痛点。小修小补、简单翻新解决不了根本问题，大规模改造又由于标',
      date: '2025-08-19',
      tag: 'media',
      image: '/images/news4.jpg',
      views: 8976,
      url: 'https://news.cctv.com/2025/08/19/ARTIx2DjMDXbbiqYKcdXuQ1Q250819.shtml',
    },
    {
      id: 5,
      title: '民生一件事丨老旧小区改造加速：从焕新颜到优服务 创新管理模式提升居民幸福感',
      excerpt: '央视网消息：把老百姓关心的事一件一件办好，民生一件事，继续聚焦老旧小区改造。记者近日从住房城乡建设部获悉，今年以来，各地不断加快城镇老旧小区改造步伐，多个省份开工率超过50%。',
      date: '2025-07-07',
      tag: 'community',
      image: '/images/news5.jpg',
      views: 1234,
      url: 'https://news.cctv.cn/2025/07/07/ARTI5ra5bNyVe9Qv3Jfn6dZl250707.shtml',
    },
    {
      id: 6,
      title: '住建部：2000年以前建成的老旧小区纳入城市更新改造范围',
      excerpt: '住建部老旧小区改造调研组实地考察，对"文化转译+社区参与"模式给予高度评价',
      date: '2025-03-09',
      tag: 'policy',
      image: '/images/news6.png',
      views: 3456,
      url: 'https://www.guancha.cn/politics/2025_03_09_767797.shtml',
    },
  ]

  const filteredNews = activeTag === 'all'
    ? news
    : news.filter(n => n.tag === activeTag)

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">新闻动态</h1>
            <p className="text-xl text-white/80">了解阡陌海绵的最新进展与社区故事</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveTag(tag.id)}
                className={`inline-flex items-center space-x-1 px-4 py-2 rounded-full font-medium transition-colors ${
                  activeTag === tag.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Tag className="w-4 h-4" />
                <span>{tag.name}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredNews.map((item) => (
    <button
      key={item.id}
      onClick={() => {
        if (item.url === 'badgateway') {
          onNavigate('badgateway')
        } else {
          window.open(item.url, '_blank', 'noopener,noreferrer')
        }
      }}
      className="block w-full bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group text-left"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image.startsWith('/') ? item.image : `https://neeko-copilot.bytedance.net/api/text2image?prompt=${item.image}&image_size=landscape_4_3`}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
            {tags.find(t => t.id === item.tag)?.name}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
          <span className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{item.date}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{item.views}</span>
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
        <div className="flex items-center space-x-2 text-green-600 font-medium">
          <span>阅读全文</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </button>
  ))}
</div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-xl">暂无相关新闻</div>
            </div>
          )}

          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                上一页
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">2</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">3</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                下一页
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">订阅我们的资讯</h3>
                <p className="text-gray-600">获取最新项目进展、政策解读和社区故事</p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="输入您的邮箱地址"
                  className="flex-1 md:w-64 px-4 py-3 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-600 text-white px-6 py-3 rounded-r-lg hover:bg-green-700 transition-colors">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News