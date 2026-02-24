'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from 'recharts';

const userBehaviorData = [
  { hour: '00:00', pageViews: 400, sessions: 240, bounceRate: 24 },
  { hour: '04:00', pageViews: 300, sessions: 139, bounceRate: 22 },
  { hour: '08:00', pageViews: 2000, sessions: 980, bounceRate: 29 },
  { hour: '12:00', pageViews: 2780, sessions: 1390, bounceRate: 20 },
  { hour: '16:00', pageViews: 1890, sessions: 948, bounceRate: 23 },
  { hour: '20:00', pageViews: 2390, sessions: 1195, bounceRate: 25 },
];

const sourceData = [
  { source: 'Organic', users: 4000 },
  { source: 'Paid', users: 3000 },
  { source: 'Direct', users: 2000 },
  { source: 'Referral', users: 2780 },
  { source: 'Social', users: 1890 },
];

const conversionData = [
  { day: 'Mon', conversions: 24 },
  { day: 'Tue', conversions: 32 },
  { day: 'Wed', conversions: 48 },
  { day: 'Thu', conversions: 52 },
  { day: 'Fri', conversions: 68 },
  { day: 'Sat', conversions: 43 },
  { day: 'Sun', conversions: 35 },
];

export default function AnalyticsPage() {
  return (
    <div className="flex h-screen  text-gray-900">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <Header />

        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-3xl text-white font-bold mb-2">Analytics</h1>
            <p className="text-gray-500">
              Detailed insights into your user behavior and engagement
            </p>
          </div>

          {/* ================= USER BEHAVIOR ================= */}
          <Card>
            <CardHeader>
              <CardTitle>User Behavior by Hour</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userBehaviorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pageViews"
                    stroke="#4f46e5"   // Indigo
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="sessions"
                    stroke="#06b6d4"   // Cyan
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* ================= BAR + SCATTER ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Traffic by Source */}
            <Card>
              <CardHeader>
                <CardTitle>Traffic by Source</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sourceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="source"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="users"
                      fill="#22c55e"  // Green
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Conversion Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Conversion Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="category" dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Scatter
                      name="Conversions"
                      data={conversionData}
                      fill="#f59e0b" // Orange
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* ================= KEY METRICS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Avg Session Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-indigo-600">
                  4m 32s
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  +2m 14s vs last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bounce Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-cyan-600">
                  24.3%
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  -3.2% vs last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pages / Session</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-green-600">
                  6.8
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  +0.4 vs last month
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
}