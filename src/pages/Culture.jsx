import { History, Users, Droplets, Leaf, Heart, Shield, Sparkles, BookOpen, CheckCircle } from 'lucide-react'

const Culture = ({ onNavigate }) => {
  const principles = [
    {
      name: '共谋',
      description: '倾听居民心声，发现真实需求',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: '共建',
      description: '居民亲手参与，共同建造家园',
      icon: Sparkles,
      color: 'from-green-500 to-green-600'
    },
    {
      name: '共管',
      description: '组建守护联盟，实现长效管理',
      icon: Shield,
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: '共享',
      description: '共享收获成果，惠及每位居民',
      icon: Heart,
      color: 'from-emerald-500 to-emerald-600'
    },
  ]

  const policies = [
    { title: '国务院《关于全面推进城镇老旧小区改造工作的指导意见》', point: '完善类改造、居民参与、长效管理' },
    { title: '住建部《共同缔造活动指导意见》', point: '"五共"机制，四阶段工作坊完整覆盖' },
    { title: '国家卫健委《老年友好型社区创建通知》', point: '改善环境、丰富生活、鼓励参与' },
    { title: '西安2026政府工作报告', point: '改造32个老旧小区、331个城市更新项目' },
    { title: '西安社区嵌入式服务设施实施方案', point: '一社区一策、功能集成、盘活存量' },
  ]

  const workshopSteps = [
    { step: '1', title: '种菜心愿茶话会', desc: '发掘"社区种子"，了解居民真实需求与种植心愿' },
    { step: '2', title: '方案共议会', desc: '邀请居民参与设计讨论，共同制定《菜园认养公约》' },
    { step: '3', title: '亲手建造营', desc: '居民与志愿者一起动手建造，增进邻里感情' },
    { step: '4', title: '守护者联盟', desc: '组建自治组织，制定《轮值公约》，实现长效管理' },
  ]

  const socialValues = [
    { metric: '30-50%', label: '雨水径流峰值削减', desc: '一场20年一遇暴雨，80%以上产流量可被就地消纳' },
    { metric: '108%', label: '人均绿地增加', desc: '从1.2平方米提升至2.5平方米，让老人有处可去' },
    { metric: '50%+', label: '邻里互动提升', desc: '社区内"弱关系"网络密度提升，居民互助意愿增强' },
    { metric: '10-15%', label: '居民参与运维', desc: '形成30-50人的核心志愿者网络，共建美好家园' },
  ]

  const futurePlan = [
    { phase: '近期（1-3年）', goal: '立足西安', desc: '打造3-5个公益示范社区，累计服务居民超过3000户' },
    { phase: '中期（3-5年）', goal: '规模化复制', desc: '复制推广10-15个项目，培训认证50名以上公益社区韧性规划师' },
    { phase: '远期（5-10年）', goal: '成为共识', desc: '让理念成为社会共识，推动项目成果进入政策视野' },
  ]

  return (
    <div className="pt-16">
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/images/mxcultureheader.png')` }}>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">项目特色</h1>
            <p className="text-xl text-white/90">文化转译 · 生态优先 · 社区共生</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-meta-blue/10 text-meta-blue px-4 py-2 rounded-full mb-6">
                <History className="w-5 h-5" />
                <span className="font-medium">文化溯源</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">缘起梯田智慧</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  当我们仰望千年哈尼梯田，看到先民用"山有多高，水有多高"的智慧建造的生态系统时，一个叩问油然而生：这种"天人合一""道法自然"的生态智慧，能否转化为现代城市社区的解决方案？
                </p>
                <p>
                  苗族古歌中唱到："开田开到哪里，谷子就种到哪里"。梯田不仅是农业生产的场所，更是人与自然和谐共生的典范。我们希望将这种智慧进行创造性转化，让现代社区也能像梯田一样呼吸、一样韧性。
                </p>
                <p>
                  这不是简单的技术移植，而是一场跨越时空的对话——与中华先民"道法自然"的生存智慧对话，与当下城市"成长的烦恼"对话，也与未来对"诗意栖居"的普遍渴望对话。
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://neeko-copilot.bytedance.net/api/text2image?prompt=terraced%20fields%20traditional%20farming%20ecosystem%20green%20nature%20sustainable%20agriculture%20water%20management&image_size=portrait_4_3"
                alt="梯田智慧"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">2000+</div>
                <div className="text-sm opacity-80">年生态智慧</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-600 px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5" />
              <span className="font-medium">五共机制</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">共同缔造，缺一不可</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">通过"共谋、共建、共管、共评、共享"五共机制，让每一位居民都成为社区的守护者</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, index) => (
              <div key={index} className="relative bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`}></div>
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <item.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">政策依据</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">国家战略支撑</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {policies.map((policy, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-green-50 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{policy.title}</h3>
                    <p className="text-gray-600 text-xs">{policy.point}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">四阶段工作坊</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">让居民真正参与</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshopSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-full mb-6">
              <Leaf className="w-5 h-5" />
              <span className="font-medium">社会价值</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">可衡量、可感知的多维赋能</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialValues.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors">
                <div className="text-4xl font-bold text-green-600 mb-2">{value.metric}</div>
                <div className="font-semibold text-gray-900 mb-2">{value.label}</div>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-6">
              <Droplets className="w-5 h-5" />
              <span className="font-medium">未来展望</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">从"一个项目"到"一种生态"</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futurePlan.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-purple-600 font-semibold mb-2">{plan.phase}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.goal}</h3>
                <p className="text-gray-600">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">成为社区守护者</h3>
          <p className="mb-6">让最好的未来，孕育于今天我们共同选择并开始耕耘的土壤之中</p>
          <button onClick={() => onNavigate('contact')} className="bg-white text-meta-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            立即行动
          </button>
        </div>
      </section>
    </div>
  )
}

export default Culture