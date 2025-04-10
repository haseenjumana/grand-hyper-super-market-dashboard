
import { BarChart3, DollarSign, Package, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { Dashboard } from "@/components/layout/Dashboard";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { RecentSales } from "@/components/dashboard/RecentSales";
import { ProductsTable } from "@/components/dashboard/ProductsTable";

const Index = () => {
  return (
    <Dashboard>
      <div className="page-container p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Welcome to Grandhyder Dashboard</h1>
          <p className="text-gray-500">Here's what's happening with your supermarket today.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Revenue"
            value="AED 128,430"
            description="This month"
            icon={<DollarSign className="h-5 w-5 text-primary" />}
            trend={{ value: 12.5, isPositive: true }}
          />
          <StatsCard
            title="Total Sales"
            value="3,248"
            description="This month"
            icon={<ShoppingCart className="h-5 w-5 text-emerald-500" />}
            trend={{ value: 8.2, isPositive: true }}
          />
          <StatsCard
            title="Active Products"
            value="512"
            description="In stock"
            icon={<Package className="h-5 w-5 text-amber-500" />}
            trend={{ value: 4.1, isPositive: true }}
          />
          <StatsCard
            title="New Customers"
            value="128"
            description="This month"
            icon={<Users className="h-5 w-5 text-indigo-500" />}
            trend={{ value: 2.3, isPositive: false }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <SalesChart className="lg:col-span-2" />
          <RecentSales />
        </div>

        <div className="mb-8">
          <ProductsTable />
        </div>
      </div>
    </Dashboard>
  );
};

export default Index;
