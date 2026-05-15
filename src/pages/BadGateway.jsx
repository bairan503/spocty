import { Home, AlertTriangle } from 'lucide-react'

const BadGateway = ({ pageName, onNavigate }) => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <span className="text-white/90 text-sm">🚧 502 Bad Gateway</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {pageName}
        </h1>
        
        <div className="text-8xl mb-6 flex justify-center">
          <AlertTriangle className="w-32 h-32 text-white/80" />
        </div>
        
        <p className="text-xl text-white/80 mb-4">
          服务暂时不可用
        </p>
        
        <p className="text-white/60 mb-8">
          该页面正在维护中，请稍后再试；或向网站管理员反馈该问题。
        </p>
        
        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>返回首页</span>
        </button>
      </div>
    </div>
  )
}

export default BadGateway
