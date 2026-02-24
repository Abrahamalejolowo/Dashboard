'use client';

import { useState } from 'react';
import { BarChart3, Settings, Users, TrendingUp, AlertCircle, Home, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // toggle for mobile

  const navItems = [
    { icon: <Home size={20} />, label: 'Overview', href: '/' },
    { icon: <TrendingUp size={20} />, label: 'Analytics', href: '/analytics' },
    { icon: <Users size={20} />, label: 'Customers', href: '/customers' },
    { icon: <BarChart3 size={20} />, label: 'Reports', href: '/reports' },
    { icon: <AlertCircle size={20} />, label: 'Alerts', href: '/alerts' },
  ];

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden flex max-[1100px]:pt-4 justify-between bg-sidebar text-sidebar-foreground pl-2 border-b border-sidebar-border">
        <div className=" gap-4 ">
          <div className="px-2 py-2 bg-blue-500 rounded-lg justify-center text-white font-bold">
            D
          </div>
          {/* <span className="font-bold text-lg">Dashboard</span> */}
        </div>
     <div className='mt-2'>
          <button onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:relative z-50 top-0 left-0 h-full w-54 bg-sidebar text-sidebar-foreground border-r border-sidebar-border p-6
          flex flex-col transition-transform transform lg:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
        `}
      >
        <div className="mb-8 hidden lg:flex">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
              D
            </div>
            <span className="text-lg font-bold text-sidebar-foreground">Dashboard</span>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={pathname === item.href}
              onClick={() => setOpen(false)} // close on mobile
            />
          ))}
        </nav>

        <div className="space-y-2 border-t border-sidebar-border pt-4">
          <NavItem
            icon={<Settings size={20} />}
            label="Settings"
            href="/settings"
            active={pathname === '/settings'}
            onClick={() => setOpen(false)}
          />
        </div>
      </aside>

      {/* Overlay for mobile */}
      {open && <div className="lg:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setOpen(false)} />}
    </>
  );
}

function NavItem({
  icon,
  label,
  href,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link href={href} onClick={onClick}>
      <button
        className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
          active
            ? 'bg-sidebar-primary text-sidebar-primary-foreground'
            : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
        }`}
      >
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </button>
    </Link>
  );
}