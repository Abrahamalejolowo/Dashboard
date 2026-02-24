'use client';

import { Search, Bell, Settings, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      
      {/* Left Section */}
      <div className="flex items-center gap-3">
        
        {/* Mobile menu button (optional if you connect to sidebar) */}
       
        <div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-card-foreground">
            Overview
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 hidden sm:block">
            Welcome back! Here's your performance data.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        
        {/* Search (hidden on small, visible from md) */}
        <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
          <Search size={18} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-32 lg:w-48 text-card-foreground placeholder-muted-foreground"
          />
        </div>

        {/* Notification */}
        <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Settings (hide on very small screens if needed) */}
        <button className="hidden sm:flex p-2 hover:bg-muted rounded-lg transition-colors">
          <Settings size={20} />
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
          JD
        </div>
      </div>
    </header>
  );
}