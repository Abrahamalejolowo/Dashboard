'use client';

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Sidebar from '@/components/sidebar';
import StatCard from '@/components/stat-card';
import Header from '@/components/header';

const chartData = [
  { month: 'Jan', revenue: 4000, users: 2400, conversion: 2.4 },
  { month: 'Feb', revenue: 3000, users: 1398, conversion: 2.1 },
  { month: 'Mar', revenue: 2000, users: 9800, conversion: 2.29 },
  { month: 'Apr', revenue: 2780, users: 3908, conversion: 2.0 },
  { month: 'May', revenue: 1890, users: 4800, conversion: 2.21 },
  { month: 'Jun', revenue: 2390, users: 3800, conversion: 2.5 },
  { month: 'Jul', revenue: 3490, users: 4300, conversion: 2.1 },
];

const distributionData = [
  { name: 'Desktop', value: 45 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 20 },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen  text-gray-900">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <Header />

        <div className="p-8 space-y-8">
          {/* ================= KPI CARDS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="Total Revenue" value="$48,250" change="+12.5%" isPositive icon="📈" />
            <StatCard title="Active Users" value="12,485" change="+8.2%" isPositive icon="👥" />
            <StatCard title="Conversion Rate" value="2.43%" change="-0.3%" isPositive={false} icon="🎯" />
            <StatCard title="Avg Session" value="3m 24s" change="+5.1%" isPositive icon="⏱️" />
          </div>

        
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Revenue Trend */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.35}/>
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                      }}
                    />

                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#4f46e5"
                      strokeWidth={3}
                      fill="url(#revenueGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Device Split */}
            <Card>
              <CardHeader>
                <CardTitle>Device Split</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {distributionData.map((item, index) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.name}</span>
                      <span className="font-semibold">{item.value}%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          index === 0
                            ? 'bg-indigo-600'
                            : index === 1
                            ? 'bg-cyan-500'
                            : 'bg-amber-500'
                        }`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* ================= SECONDARY CHARTS ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* User Growth */}
            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#06b6d4"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                      activeDot={{ r: 7 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Conversion Rate */}
            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="conversion"
                      fill="#22c55e"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}