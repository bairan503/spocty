import { History, Users, Award, Target, Leaf, Heart, Globe, Droplets, Shield, BookOpen } from 'lucide-react'

const About = ({ onNavigate }) => {
  const milestones = [
    { year: '2024', title: '项目启动', description: '阡陌海绵项目正式立项，团队深入研究传统梯田生态智慧' },
    { year: '2025', title: '政策对接', description: '精准对接设计西安城市更新试点、老旧小区改造等政府重点工作' },
    { year: '2025', title: '设计落地', description: '首个公益示范社区设计方案正式推出，打造"共生机簇"核心模块' },
    { year: '2026', title: '模式成型', description: '完成三大核心原型标准化，形成可复制推广的公益方法论' },
    { year: '2026+', title: '规模扩展', description: '立足西安，辐射关中城市群，预期打造5-8个公益标杆案例' },
  ]

  const prototypes = [
    {
      name: '滤渗带',
      description: '雨水经滤渗带净化下渗，转化为清洁水源，实现雨水的初步净化与渗透',
      icon: Droplets,
      color: 'bg-blue-500/10 text-blue-600'
    },
    {
      name: '弹性界面',
      description: '多余雨水由弹性界面临时调蓄（下沉广场），暴雨时溢流排入管网',
      icon: Shield,
      color: 'bg-teal-500/10 text-teal-600'
    },
    {
      name: '共生机簇',
      description: '清洁水源用于灌溉共生机簇（共享菜园），实现雨水资源化利用',
      icon: Leaf,
      color: 'bg-green-500/10 text-green-600'
    },
  ]

  const values = [
    { icon: Heart, title: '文化转译', desc: '将中华农耕文明中"天人合一""道法自然"的生态智慧进行创造性转化' },
    { icon: Users, title: '社区共生', desc: '通过居民参与实现共谋、共建、共管、共评、共享，打造社区命运共同体' },
    { icon: Globe, title: '生态优先', desc: '让雨水留下来、用起来，打造会呼吸的海绵社区，实现可持续发展' },
    { icon: Award, title: '公益创新', desc: '探索老旧小区改造新模式，为城市更新贡献可复制的公益解决方案' },
  ]

  const funding = [
    { source: '政府公益专项资金', percent: '40%', note: '西安市城市更新、老旧小区改造公益专项补助，单个项目可申请3-10万元' },
    { source: '社区公共维修基金', percent: '20%', note: '依据《西安市住宅专项维修资金管理办法》，用于公共区域公益改造' },
    { source: '居民小额公益众筹', percent: '15%', note: '问卷显示32.5%居民支持每户几十元自愿众筹，用于增强归属感' },
    { source: '公益基金会资助', percent: '15%', note: '万科公益基金会、千禾社区基金会等有社区治理公益专项支持' },
    { source: '公益服务支持', percent: '10%', note: '物业公司、爱心企业提供公益运维与物资支持' },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 bg-cover bg-center relative" style={{backgroundImage: `url('/images/aboutheader.jpg')`}}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 via-emerald-500/85 to-teal-400/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-300">关于我们</h1>
            <p className="text-xl text-white/80 mb-6">
              阡陌海绵致力于将中华传统生态智慧转化为现代社区解决方案
            </p>
            <p className="text-white/70">
              我们是一支公益创新团队，以"文化转译、生态优先、社区共生"为理念，通过老旧小区微更新与海绵城市建设，让每一滴雨水都成为社区的生命之源，让每一位居民都成为社区的守护者。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-meta-blue/10 text-meta-blue px-4 py-2 rounded-full mb-6">
                <History className="w-5 h-5" />
                <span className="font-medium">项目起源</span>
              </div>
              <h2 className="text-3xl font-bold text-dark-charcoal mb-6">缘起梯田智慧</h2>
              <div className="space-y-4 text-slate-gray">
                <p>
                  阡陌海绵项目源于一次对千年哈尼梯田的考察。当我们看到先民用"山有多高，水有多高"的智慧建造的梯田生态系统时，一个叩问油然而生：这种天人合一的生态智慧，能否转化为现代城市社区的解决方案？
                </p>
                <p>
                  经过深入研究，我们发现老旧小区面临的内涝、热岛效应、生物多样性减少等挑战，与传统智慧中蕴含的雨水管理、生态共生理念高度契合。于是，我们决定做一次跨时空的对话——将传统智慧进行创造性转化。
                </p>
                <p>
                  项目名称"阡陌海绵"寓意深远：阡陌代表中华农耕文明的田园脉络，海绵代表现代海绵城市的建设理念，二者结合，期望探索出一条文化传承与生态优先并重的社区改造之路。
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/aboutian.jpg"
                alt="梯田生态智慧"
                className="w-full h-80 object-cover rounded-card shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 bg-meta-blue text-white p-6 rounded-card shadow-elevated">
                <div className="text-4xl font-bold">2000+</div>
                <div className="text-sm opacity-80">年梯田智慧</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">三大核心原型</h2>
            <p className="text-slate-gray">功能联动、环环相扣，打造会呼吸的社区</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prototypes.map((prototype, index) => (
              <div key={index} className="bg-white rounded-card p-8 hover-lift">
                <div className={`w-16 h-16 ${prototype.color} rounded-xl flex items-center justify-center mb-6`}>
                  <prototype.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark-charcoal mb-3">{prototype.name}</h3>
                <p className="text-slate-gray">{prototype.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white rounded-card p-8">
            <h3 className="text-lg font-semibold text-dark-charcoal mb-4 text-center">雨水循环示意</h3>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-blue-500" />
                <span>雨水</span>
              </div>
              <span className="text-slate-gray">→</span>
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                <span>滤渗带净化下渗</span>
              </div>
              <span className="text-slate-gray">→</span>
              <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                <Leaf className="w-4 h-4 text-green-500" />
                <span>共生机簇灌溉</span>
              </div>
              <span className="text-slate-gray">→</span>
              <div className="flex items-center gap-2 bg-teal-50 px-3 py-1 rounded-full">
                <span>弹性界面调蓄</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">发展历程</h2>
            <p className="text-slate-gray">从构想到落地，我们一直在路上</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-meta-blue/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block bg-white rounded-card p-6 shadow-subtle ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                      <div className="text-meta-blue font-bold text-lg mb-2">{milestone.year}</div>
                      <div className="text-dark-charcoal font-semibold mb-1">{milestone.title}</div>
                      <div className="text-slate-gray text-sm">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-meta-blue rounded-full border-4 border-white shadow"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">多元筹资模式</h2>
            <p className="text-slate-gray">构建可持续的公益资金保障体系</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {funding.map((item, index) => (
              <div key={index} className="bg-white rounded-card p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-meta-blue mb-2">{item.percent}</div>
                <div className="font-semibold text-dark-charcoal mb-2 text-sm">{item.source}</div>
                <p className="text-slate-gray text-xs">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-card p-6 text-center">
            <p className="text-slate-gray">
              <strong>居民参与机制：</strong>老人仅需参与小额众筹或通过劳动贡献参与，无需支付高额费用。2023年西安市老旧小区改造补助资金超30亿元，配套充足。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">核心价值观</h2>
            <p className="text-slate-gray">我们坚守的理念与追求</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-soft-gray rounded-card p-6 text-center hover-lift">
                <div className="w-14 h-14 bg-meta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-meta-blue" />
                </div>
                <h3 className="text-lg font-semibold text-dark-charcoal mb-2">{value.title}</h3>
                <p className="text-slate-gray text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">使命与愿景</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-soft-gray rounded-card p-8">
              <div className="w-16 h-16 bg-meta-blue/10 rounded-card flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-meta-blue" />
              </div>
              <h3 className="text-xl font-semibold text-dark-charcoal mb-4">使命</h3>
              <p className="text-slate-gray">
                将中华传统生态智慧进行创造性转化，通过老旧小区微更新与海绵城市建设，让雨水成为社区的生命之源，让每一位居民都成为社区的守护者，实现文化传承与生态发展的双赢。
              </p>
            </div>
            <div className="bg-soft-gray rounded-card p-8">
              <div className="w-16 h-16 bg-cherry/10 rounded-card flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-cherry" />
              </div>
              <h3 className="text-xl font-semibold text-dark-charcoal mb-4">愿景</h3>
              <p className="text-slate-gray">
                让"先听听居民的想法""让雨水留下来、用起来""给昆虫留一点空间"成为像"要通电通水"一样自然而普遍的共识，使阡陌海绵成为被广泛接纳的社区建设哲学。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">加入我们的行列</h3>
          <p className="text-white/80 mb-6">无论您是社区工作者、设计师还是热心居民，我们都期待与您携手</p>
          <button onClick={() => onNavigate('contact')} className="bg-white text-meta-blue px-8 py-3 rounded-pill font-semibold hover:bg-gray-100 transition-colors">
            联系我们
          </button>
        </div>
      </section>
    </div>
  )
}

export default About