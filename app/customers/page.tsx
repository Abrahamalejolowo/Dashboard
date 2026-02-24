'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import { Mail, Phone, MapPin, MoreVertical } from 'lucide-react';

const customers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    status: 'Active',
    joinDate: '2024-01-15',
    totalSpent: '$12,450',
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '+1 (555) 234-5678',
    location: 'New York, NY',
    status: 'Active',
    joinDate: '2024-02-03',
    totalSpent: '$8,920',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    email: 'emily.r@example.com',
    phone: '+1 (555) 345-6789',
    location: 'Austin, TX',
    status: 'Inactive',
    joinDate: '2023-11-20',
    totalSpent: '$5,680',
  },
  {
    id: 4,
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    phone: '+1 (555) 456-7890',
    location: 'Seattle, WA',
    status: 'Active',
    joinDate: '2024-01-08',
    totalSpent: '$15,230',
  },
  {
    id: 5,
    name: 'Jennifer Lee',
    email: 'jen.lee@example.com',
    phone: '+1 (555) 567-8901',
    location: 'Boston, MA',
    status: 'Active',
    joinDate: '2024-03-10',
    totalSpent: '$3,450',
  },
];

export default function CustomersPage() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Customers</h1>
            <p className="text-muted-foreground">Manage and view all your customers</p>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Customer List</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Location</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Total Spent</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Join Date</th>
                      <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="py-3 px-4 text-card-foreground font-medium">{customer.name}</td>
                        <td className="py-3 px-4 text-card-foreground">{customer.email}</td>
                        <td className="py-3 px-4 text-card-foreground">{customer.location}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            customer.status === 'Active' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-gray-200 text-gray-700'
                          }`}>
                            {customer.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-card-foreground font-semibold">{customer.totalSpent}</td>
                        <td className="py-3 px-4 text-card-foreground">{customer.joinDate}</td>
                        <td className="py-3 px-4 text-center">
                          <button className="text-muted-foreground hover:text-card-foreground transition-colors">
                            <MoreVertical size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
