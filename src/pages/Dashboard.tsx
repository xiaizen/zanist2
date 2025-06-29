import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  FileText, 
  Eye, 
  TrendingUp,
  Plus,
  Calendar,
  Award,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import StatsCard from '../components/StatsCard';
import Chart from '../components/Chart';
import RecentActivity from '../components/RecentActivity';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Articles',
      value: '156',
      change: '+12.5%',
      trend: 'up' as const,
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Total Views',
      value: '45,231',
      change: '+8.2%',
      trend: 'up' as const,
      icon: Eye,
      color: 'green'
    },
    {
      title: 'Active Users',
      value: '2,543',
      change: '+15.7%',
      trend: 'up' as const,
      icon: Users,
      color: 'purple'
    },
    {
      title: 'Monthly Growth',
      value: '23.1%',
      change: '+2.4%',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'red'
    }
  ];

  const recentArticles = [
    {
      id: '1',
      title: 'Quantum Computing Breakthrough: New Algorithms Show Promise',
      author: 'Dr. Sarah Chen',
      university: 'MIT',
      publishDate: '2024-01-15',
      views: 2340,
      status: 'published'
    },
    {
      id: '2',
      title: 'CRISPR 3.0: Stanford Scientists Achieve Unprecedented Precision',
      author: 'Prof. Jennifer Martinez',
      university: 'Stanford',
      publishDate: '2024-01-14',
      views: 1890,
      status: 'published'
    },
    {
      id: '3',
      title: 'Revolutionary Solar Cell Design Achieves 47% Efficiency',
      author: 'Dr. Michael Thompson',
      university: 'Caltech',
      publishDate: '2024-01-13',
      views: 1567,
      status: 'published'
    }
  ];

  const topCategories = [
    { name: 'Quantum Physics', articles: 25, growth: '+15%' },
    { name: 'Biotechnology', articles: 22, growth: '+12%' },
    { name: 'AI Research', articles: 18, growth: '+8%' },
    { name: 'Renewable Energy', articles: 16, growth: '+20%' },
    { name: 'Space Science', articles: 14, growth: '+5%' }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with Zanist.</p>
        </div>
        <Link
          to="/admin/articles"
          className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all duration-200 flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Essay</span>
        </Link>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Chart title="Article Views & Engagement" />
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <RecentActivity />
        </motion.div>
      </div>

      {/* Recent Articles & Top Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Articles</h3>
            <Link to="/admin/articles" className="text-red-600 hover:text-red-700 text-sm font-medium">
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {recentArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                    <span>{article.university}</span>
                    <span>•</span>
                    <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Top Categories</h3>
            <Link to="/categories" className="text-red-600 hover:text-red-700 text-sm font-medium">
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {topCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{category.name}</h4>
                  <p className="text-xs text-gray-500">{category.articles} articles</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-green-600">{category.growth}</span>
                  <div className="text-xs text-gray-500">growth</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/admin/articles"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
              <Plus className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Add New Essay</h4>
              <p className="text-sm text-gray-500">Create a new research article</p>
            </div>
          </Link>

          <Link
            to="/admin/users"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Manage Users</h4>
              <p className="text-sm text-gray-500">View and edit user accounts</p>
            </div>
          </Link>

          <Link
            to="/admin/analytics"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">View Analytics</h4>
              <p className="text-sm text-gray-500">Check performance metrics</p>
            </div>
          </Link>

          <Link
            to="/admin/settings"
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Site Settings</h4>
              <p className="text-sm text-gray-500">Configure site preferences</p>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;