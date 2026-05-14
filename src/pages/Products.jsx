import { useState } from 'react'
import { MapPin, Users, Droplets, Leaf, Heart, Star, Filter, Grid, List, Home, Sparkles, Shield } from 'lucide-react'

const Products = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('popular')

  const categories = [
    { id: 'all', name: '全部案例', count: 6 },
    { id: 'sponge', name: '海绵社区', count: 3 },
    { id: 'elder', name: '老年友好', count: 2 },
    { id: 'garden', name: '共享菜园', count: 2 },
  ]

  const cases = [
    {
      id: 1,
      name: '碑林区友谊小区',
      category: 'sponge',
      location: '西安·碑林区',
      area: '150㎡',
      status: '已完成',
      rating: 4.9,
      desc: '利用废弃边角地打造"共生机簇"核心模块，雨水径流峰值削减45%，居民满意度达98%',
      stats: { water: '45%', green: '120㎡', residents: '86户' },
      image: 'community%20garden%20urban%20renewal%20sponge%20city%20green%20space%20elderly%20friendly',
    },
    {
      id: 2,
      name: '莲湖区大兴社区',
      category: 'elder',
      location: '西安·莲湖区',
      area: '200㎡',
      status: '已完成',
      rating: 4.8,
      desc: '抬升式种植床+共享菜园+守护者联盟，解决老人"有闲无处去"痛点，组建50人志愿者团队',
      stats: { elder: '120人', volunteers: '50人', activities: '月均8次' },
      image: 'sponge%20city%20community%20shared%20garden%20elderly%20care%20urban%20renewal',
    },
    {
      id: 3,
      name: '新城区解放路小区',
      category: 'sponge',
      location: '西安·新城区',
      area: '180㎡',
      status: '进行中',
      rating: 4.7,
      desc: '引入"滤渗带+弹性界面"双核心原型，构建雨水净化-调蓄-利用完整链条，打造海绵示范',
      stats: { water: '50%', storage: '30m³', trees: '20棵' },
      image: 'sponge%20city%20rainwater%20management%20community%20ecological%20design',
    },
    {
      id: 4,
      name: '雁塔区电子城小区',
      category: 'garden',
      location: '西安·雁塔区',
      area: '120㎡',
      status: '已完成',
      rating: 4.9,
      desc: '"四阶段工作坊"全程居民参与，共同制定《菜园认养公约》，形成自治管理长效机制',
      stats: { participants: '65户', plots: '24块', harvested: '15种' },
      image: 'urban%20community%20garden%20vegetable%20plots%20elderly%20activity%20space',
    },
    {
      id: 5,
      name: '未央区浐灞半岛社区',
      category: 'sponge',
      location: '西安·未央区',
      area: '250㎡',
      status: '规划中',
      rating: 4.6,
      desc: '结合社区现有绿化带，打造"梯田式"雨水花园，实现景观提升与雨水管理双重目标',
      stats: { water: '40%', cooling: '2°C', biodiversity: '+30%' },
      image: 'terraced%20rain%20garden%20sponge%20city%20ecological%20landscape%20biodiversity',
    },
    {
      id: 6,
      name: '长安区郭杜小镇',
      category: 'elder',
      location: '西安·长安区',
      area: '300㎡',
      status: '已完成',
      rating: 5.0,
      desc: '被评选为西安市"老年友好社区"示范点，接待各地考察团100余批次，获央视报道',
      stats: { visitors: '100+批次', awards: '3项', coverage: '央视报道' },
      image: 'elderly%20friendly%20community%20award%20demonstration%20sponge%20city%20green',
    },
  ]

  const filteredCases = activeCategory === 'all'
    ? cases
    : cases.filter(p => p.category === activeCategory)

  const sortedCases = [...filteredCases].sort((a, b) => {
    switch (sortBy) {
      case 'area': return parseInt(b.area) - parseInt(a.area)
      case 'rating': return b.rating - a.rating
      default: return b.rating - a.rating
    }
  })

  const services = [
    { icon: Sparkles, title: '免费诊断', desc: '专业团队现场踏勘，提供个性化改造建议' },
    { icon: Shield, title: '全程指导', desc: '从设计到实施，提供一站式公益技术支持' },
    { icon: Heart, title: '长效帮扶', desc: '协助组建守护者联盟，确保可持续运营' },
    { icon: Home, title: '模式输出', desc: '可复制方法论输出，助力更多社区改造' },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">成功案例</h1>
            <p className="text-xl text-white/80 mb-4">从废弃边角地到绿色家园的蜕变</p>
            <p className="text-white/60 max-w-2xl mx-auto">
              每一个案例都是一次社区共生的实践，每一次改造都让居民成为守护者。我们用数据和口碑说话，让"阡陌海绵"成为可复制的社区改造方案。
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-meta-blue/10 rounded-full flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-meta-blue" />
                </div>
                <div>
                  <div className="font-medium text-dark-charcoal text-sm">{service.title}</div>
                  <div className="text-slate-gray text-xs">{service.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-pill font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-meta-blue text-white'
                      : 'bg-soft-gray text-slate-gray hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-gray" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-divider rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-meta-blue/20 bg-white"
                >
                  <option value="popular">按评分</option>
                  <option value="area">按面积</option>
                  <option value="rating">按满意度</option>
                </select>
              </div>
              <div className="flex bg-soft-gray rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-subtle' : 'hover:bg-gray-200'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-subtle' : 'hover:bg-gray-200'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {sortedCases.map((item) => (
              <div key={item.id} className={`bg-soft-gray rounded-card overflow-hidden hover-lift group ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 h-64 flex-shrink-0' : 'aspect-video'}`}>
                  <img
                    src={`https://neeko-copilot.bytedance.net/api/text2image?prompt=${item.image}&image_size=square`}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                    {item.status}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <button className="bg-white text-meta-blue px-4 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      查看详情
                    </button>
                  </div>
                </div>
                <div className={`p-5 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center gap-2 text-sm text-slate-gray mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                    <span>|</span>
                    <span>{item.area}</span>
                  </div>
                  <h3 className="font-semibold text-dark-charcoal mb-2">{item.name}</h3>
                  <p className="text-slate-gray text-sm mb-3 line-clamp-2">{item.desc}</p>
                  <div className="flex items-center gap-4 mb-3 text-xs">
                    <div className="flex items-center gap-1">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <span>径流-{item.stats.water || item.stats.water}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Leaf className="w-4 h-4 text-green-500" />
                      <span>绿植-{item.stats.green || item.stats.elder || item.stats.participants}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span>{item.stats.residents || item.stats.volunteers || item.stats.visitors}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-warning-amber fill-current" />
                      <span className="text-sm text-dark-charcoal">{item.rating}</span>
                    </div>
                    <span className="text-meta-blue text-sm font-medium hover:text-meta-blue-hover cursor-pointer">
                      了解更多 →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedCases.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-gray text-xl">暂无该分类案例</div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-dark-charcoal mb-4">申请公益改造</h3>
                <p className="text-slate-gray mb-4">
                  我们为西安地区老旧小区提供免费诊断与公益改造支持。无论是废弃边角地、闲置绿地还是老化活动空间，我们都能为您量身定制改造方案。
                </p>
                <ul className="space-y-2 text-slate-gray mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>免费现场踏勘与需求调研</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>个性化公益改造方案设计</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>四阶段工作坊全程指导</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-meta-blue rounded-full"></div>
                    <span>协助组建守护者联盟，实现长效管理</span>
                  </li>
                </ul>
                <button onClick={() => onNavigate('contact')} className="btn-primary">
                  立即申请
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://neeko-copilot.bytedance.net/api/text2image?prompt=community%20renovation%20before%20after%20sponge%20city%20garden%20construction&image_size=landscape_4_3"
                  alt="公益改造"
                  className="w-full h-64 object-cover rounded-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products