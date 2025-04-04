
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-medical-500 text-white p-1.5 rounded-lg">
              <Brain className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-medical-600 to-medical-800 bg-clip-text text-transparent">
              BrainScan
            </span>
          </Link>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <div className="flex flex-col gap-4 mt-8">
                  <Link to="/" className={`block px-4 py-2 rounded-md hover:bg-gray-100 ${isActive('/') ? 'bg-medical-50 text-medical-800 font-medium' : ''}`}>
                    Home
                  </Link>
                  <Link to="/dashboard" className={`block px-4 py-2 rounded-md hover:bg-gray-100 ${isActive('/dashboard') ? 'bg-medical-50 text-medical-800 font-medium' : ''}`}>
                    Dashboard
                  </Link>
                  <Link to="/get-started" className={`block px-4 py-2 rounded-md hover:bg-gray-100 ${isActive('/get-started') ? 'bg-medical-50 text-medical-800 font-medium' : ''}`}>
                    Get Started
                  </Link>
                  <Link to="/about" className={`block px-4 py-2 rounded-md hover:bg-gray-100 ${isActive('/about') ? 'bg-medical-50 text-medical-800 font-medium' : ''}`}>
                    About
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-1">
            <Link to="/">
              <Button variant={isActive('/') ? "default" : "ghost"} className={isActive('/') ? "bg-medical-600 text-white" : "text-medical-700 hover:text-medical-900 hover:bg-medical-50"}>
                Home
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant={isActive('/dashboard') ? "default" : "ghost"} className={isActive('/dashboard') ? "bg-medical-600 text-white" : "text-medical-700 hover:text-medical-900 hover:bg-medical-50"}>
                <LayoutDashboard className="mr-1 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link to="/get-started">
              <Button variant={isActive('/get-started') ? "default" : "ghost"} className={isActive('/get-started') ? "bg-medical-600 text-white" : "text-medical-700 hover:text-medical-900 hover:bg-medical-50"}>
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button variant={isActive('/about') ? "default" : "ghost"} className={isActive('/about') ? "bg-medical-600 text-white" : "text-medical-700 hover:text-medical-900 hover:bg-medical-50"}>
                About
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
