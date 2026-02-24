'use client';

import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}

export default function StatCard({ 
  title, 
  value, 
  change, 
  isPositive, 
  icon 
}: StatCardProps) {
  return (
    <Card className="bg-card border-border">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{title}</p>
              <p className="text-2xl font-bold text-card-foreground mt-1">{value}</p>
            </div>
            <span className="text-3xl">{icon}</span>
          </div>
          
          <div className={`flex items-center gap-1 text-sm font-semibold ${
            isPositive ? 'text-emerald-500' : 'text-red-500'
          }`}>
            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {change}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
