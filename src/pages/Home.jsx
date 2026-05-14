import { ArrowRight, Leaf, Users, Droplets, Shield, Heart, Sparkles, Globe } from 'lucide-react'

const Home = ({ onNavigate }) => {
  const features = [
    {
      title: '生态智慧',
      description: '传承中华农耕文明中"天人合一""道法自然"的生态智慧，将传统梯田智慧进行创造性转化应用于现代社区。',
      color: 'bg-meta-blue/10 text-meta-blue',
      icon: Leaf,
    },
    {
      title: '社区参与',
      description: '通过四阶段参与式公益工作坊，让居民共同参与社区改造，实现"共谋、共建、共管、共评、共享"。',
      color: 'bg-cherry/10 text-cherry',
      icon: Users,
    },
    {
      title: '海绵城市',
      description: '雨水径流峰值削减30%-50%，径流污染削减率40%-60%，让雨水留下来、用起来，打造会呼吸的社区。',
      color: 'bg-grape/10 text-grape',
      icon: Droplets,
    },
  ]

  const services = [
    {
      title: '社区微更新',
      description: '从废弃边角地起步，分期实施，小成本快见效，打造微更新公益样板',
      icon: Sparkles,
    },
    {
      title: '老年友好社区',
      description: '抬升式种植床+共享菜园+守护者联盟，解决老人"有闲无处去"痛点',
      icon: Heart,
    },
    {
      title: '海绵城市建设',
      description: '滤渗带+弹性界面+共生机簇三大核心原型，功能联动、环环相扣',
      icon: Globe,
    },
  ]

  const stats = [
    { value: '30-50%', label: '雨水径流峰值削减' },
    { value: '40-60%', label: '径流污染削减率' },
    { value: '2-3°C', label: '社区温度降低' },
    { value: '108%', label: '人均绿地增加' },
  ]

  return (
    <div className="pt-16">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-500 to-teal-400"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/images/homeheaderbk.jpg')` }}>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-pill px-4 py-2 mb-6">
            <span className="text-white/90 text-sm">传承梯田智慧 · 建设海绵社区</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            阡陌海绵
          </h1>
          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
            道法自然，韧性共生 — 让中华传统生态智慧在现代社区焕发新生
          </p>
          <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto">
            阡陌海绵是一项致力于老旧小区改造与海绵城市建设的公益创新项目。我们通过"文化转译、生态优先、社区共生"的模式，将千年梯田智慧转化为现代社区解决方案，让雨水不再是负担，而是珍贵的资源。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('culture')} className="btn-primary inline-flex items-center justify-center space-x-2">
              <span>深入了解</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('about')} className="btn-secondary">
              了解更多
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-dark-charcoal mb-4">我们的理念</h2>
            <p className="text-slate-gray max-w-2xl mx-auto">传承文化，创新实践，让每一滴雨水都成为社区的生命之源</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-feature elevation-1 hover:elevation-2">
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-dark-charcoal mb-3">{feature.title}</h3>
                <p className="text-slate-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-dark-charcoal mb-4">项目成果</h2>
            <p className="text-slate-gray">用数据说话，见证社区改变</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-soft-gray rounded-card hover-lift">
                <div className="text-4xl font-bold text-meta-blue mb-2">{stat.value}</div>
                <div className="text-slate-gray text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-dark-charcoal mb-4">我们的服务</h2>
            <p className="text-slate-gray">为您提供全方位的社区改造解决方案</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 bg-soft-gray rounded-card hover-lift">
                <div className="w-16 h-16 bg-meta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-meta-blue" />
                </div>
                <h3 className="text-lg font-semibold text-dark-charcoal mb-2">{service.title}</h3>
                <p className="text-slate-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">加入我们，共建韧性社区</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            无论您是社区工作者、设计师还是热心居民，我们都期待与您携手，让社区成为诗意栖居的绿色家园
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('contact')} className="bg-white text-meta-blue px-8 py-3 rounded-pill font-semibold hover:bg-gray-100 transition-colors">
              联系我们
            </button>
            <button onClick={() => onNavigate('culture')} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-pill font-semibold hover:bg-white/10 transition-colors">
              了解更多
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home