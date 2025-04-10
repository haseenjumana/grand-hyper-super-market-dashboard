
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  BarChart3, 
  Package, 
  Users, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Store
} from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarProps = {
  isMobile: boolean;
};

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/products",
    icon: Package,
  },
  {
    title: "Sales",
    href: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const Sidebar = ({ isMobile }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Automatically collapse sidebar on mobile
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 h-full z-40 transition-all duration-300 ease-in-out",
        collapsed ? "w-[72px]" : "w-[240px]"
      )}
    >
      <div className="h-full glass-card border-r border-gray-100 flex flex-col overflow-hidden shadow-sm">
        <div className="flex items-center h-16 px-4">
          {!collapsed && (
            <div className="flex-1 flex items-center">
              <Store className="h-6 w-6 text-primary" />
              <span className="ml-2 font-bold text-lg">Grandhyder</span>
            </div>
          )}
          {collapsed && (
            <div className="flex-1 flex justify-center">
              <Store className="h-6 w-6 text-primary" />
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        </div>

        <nav className="flex-1 py-5 px-3">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      collapsed ? "justify-center" : "",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    <item.icon
                      className={cn("h-5 w-5", 
                        isActive ? "text-primary" : "text-gray-500"
                      )}
                    />
                    {!collapsed && <span className="ml-3">{item.title}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {!collapsed && (
          <div className="p-4 border-t border-gray-100">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Grandhyder Markets LLC</p>
              <p className="text-xs font-medium">Dubai, UAE</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
