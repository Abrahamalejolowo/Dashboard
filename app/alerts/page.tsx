'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import { AlertCircle, CheckCircle, Clock, Trash2 } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'Critical',
    title: 'High Server Load',
    message: 'CPU usage has exceeded 85% for the past 5 minutes',
    time: '5 minutes ago',
    status: 'active',
  },
  {
    id: 2,
    type: 'Warning',
    title: 'Unusual Traffic Spike',
    message: 'Traffic increased by 45% compared to baseline',
    time: '32 minutes ago',
    status: 'active',
  },
  {
    id: 3,
    type: 'Warning',
    title: 'Low Disk Space',
    message: 'Available disk space is below 10GB',
    time: '2 hours ago',
    status: 'active',
  },
  {
    id: 4,
    type: 'Info',
    title: 'Backup Completed',
    message: 'Daily backup completed successfully',
    time: '5 hours ago',
    status: 'resolved',
  },
  {
    id: 5,
    type: 'Info',
    title: 'System Update',
    message: 'Security patches have been applied',
    time: '1 day ago',
    status: 'resolved',
  },
];

const getAlertColor = (type: string) => {
  switch (type) {
    case 'Critical':
      return 'bg-red-100 text-red-700 border-red-300';
    case 'Warning':
      return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    case 'Info':
      return 'bg-blue-100 text-blue-700 border-blue-300';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-300';
  }
};

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'Critical':
    case 'Warning':
      return <AlertCircle size={20} />;
    case 'Info':
      return <Clock size={20} />;
    default:
      return <CheckCircle size={20} />;
  }
};

export default function AlertsPage() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Alerts</h1>
            <p className="text-muted-foreground">System notifications and monitoring alerts</p>
          </div>

          {/* Alert Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-500">3</p>
                  <p className="text-sm text-muted-foreground mt-2">Active Alerts</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-yellow-500">2</p>
                  <p className="text-sm text-muted-foreground mt-2">Warnings</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-500">2</p>
                  <p className="text-sm text-muted-foreground mt-2">Resolved</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts List */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Recent Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg border flex items-start justify-between ${getAlertColor(alert.type)}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        {getAlertIcon(alert.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{alert.title}</h3>
                        <p className="text-sm mt-1">{alert.message}</p>
                        <p className="text-xs mt-2 opacity-75">{alert.time}</p>
                      </div>
                    </div>
                    <button className="text-current hover:opacity-75 transition-opacity">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
