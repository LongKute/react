import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  const stats = [
    { name: 'Total Users', value: '2,543', change: '+12.5%', icon: '👥' },
    { name: 'Revenue', value: '$45,231', change: '+8.2%', icon: '💰' },
    { name: 'Orders', value: '1,234', change: '+23.1%', icon: '📦' },
    { name: 'Growth', value: '18.5%', change: '+4.3%', icon: '📈' },
  ]

  const recentActivities = [
    { id: 1, action: 'New order received', time: '2 minutes ago', type: 'order' },
    { id: 2, action: 'Payment processed', time: '15 minutes ago', type: 'payment' },
    { id: 3, action: 'User registered', time: '1 hour ago', type: 'user' },
    { id: 4, action: 'Product updated', time: '2 hours ago', type: 'product' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span>Notifications</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back! 👋</h2>
          <p className="text-gray-600">Here's what's happening with your account today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{stat.icon}</div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.name}</h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Counter Card */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Interactive Counter</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-500">Live</span>
              </div>
            </div>
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6">
                <span className="text-5xl font-bold text-white">{count}</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => setCount(count - 1)}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <button
                  onClick={() => setCount(0)}
                  className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-gray-700 transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={() => setCount(count + 1)}
                  className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Click the buttons to interact with the counter
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                    {activity.type === 'order' && '📦'}
                    {activity.type === 'payment' && '💳'}
                    {activity.type === 'user' && '👤'}
                    {activity.type === 'product' && '📝'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
              View all activities →
            </button>
          </div>
        </div>

        {/* Tech Stack Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center space-x-4 mb-4">
              <img src={reactLogo} alt="React" className="w-12 h-12 animate-spin-slow" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">React</h3>
                <p className="text-sm text-gray-500">A JavaScript library for building user interfaces</p>
              </div>
            </div>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Learn more →
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center space-x-4 mb-4">
              <img src={viteLogo} alt="Vite" className="w-12 h-12" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Vite</h3>
                <p className="text-sm text-gray-500">Next generation frontend tooling</p>
              </div>
            </div>
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Learn more →
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
