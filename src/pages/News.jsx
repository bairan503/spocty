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
      title: '阡陌海绵入选西安市城市更新公益示范项目',
      excerpt: '经西安市住建局评审，阡陌海绵项目正式纳入城市更新公益示范项目库，将获得专项政策支持',
      date: '2026-05-10',
      tag: 'project',
      image: 'urban%20renewal%20community%20renovation%20sponge%20city%20demonstration',
      views: 1567,
    },
    {
      id: 2,
      title: '郭杜小镇获评陕西省老年友好社区示范点',
      excerpt: '继获评西安市示范点后，郭杜小镇再获省级认可，成为全省老旧小区改造的标杆案例',
      date: '2026-04-28',
      tag: 'project',
      image: 'elderly%20friendly%20community%20award%20demonstration%20green%20award',
      views: 2345,
    },
    {
      id: 3,
      title: '四阶段工作坊方法论正式发布',
      excerpt: '《梯田智慧社区转译白皮书V2.0》发布，详解四阶段参与式公益工作坊操作指南',
      date: '2026-04-15',
      tag: 'policy',
      image: 'community%20workshop%20methodology%20whitepaper%20publication',
      views: 1890,
    },
    {
      id: 4,
      title: '央视新闻专题报道阡陌海绵社区改造经验',
      excerpt: '央视《新闻联播》播出阡陌海绵社区改造成果，向全国推广社区共治新模式',
      date: '2026-03-20',
      tag: 'media',
      image: 'cctv%20news%20sponge%20city%20community%20renovation%20tv%20coverage',
      views: 8976,
    },
    {
      id: 5,
      title: '碑林区友谊小区改造经验分享',
      excerpt: '首批改造完成的友谊小区迎来第50批考察团，居民志愿者分享共建心得',
      date: '2026-03-10',
      tag: 'community',
      image: 'community%20garden%20volunteers%20elderly%20activity%20sharing%20session',
      views: 1234,
    },
    {
      id: 6,
      title: '住建部调研组肯定阡陌海绵模式',
      excerpt: '住建部老旧小区改造调研组实地考察，对"文化转译+社区参与"模式给予高度评价',
      date: '2026-02-25',
      tag: 'policy',
      image: 'government%20inspection%20community%20renovation%20sponge%20city%20survey',
      views: 3456,
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
              <div key={item.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://neeko-copilot.bytedance.net/api/text2image?prompt=${item.image}&image_size=landscape_4_3`}
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
                  <button className="flex items-center space-x-2 text-green-600 font-medium hover:text-green-700 transition-colors">
                    <span>阅读全文</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
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