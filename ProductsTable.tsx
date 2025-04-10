
import { useState } from "react";
import { Package, Search, Filter, MoreHorizontal, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductsTableProps = {
  className?: string;
};

// Sample product data
const products = [
  {
    id: "PRD001",
    name: "Premium Basmati Rice",
    category: "Groceries",
    price: 45.99,
    stock: 124,
    status: "In Stock",
  },
  {
    id: "PRD002",
    name: "Fresh Organic Milk",
    category: "Dairy",
    price: 12.50,
    stock: 57,
    status: "In Stock",
  },
  {
    id: "PRD003",
    name: "Almond Chocolate Cookies",
    category: "Bakery",
    price: 18.75,
    stock: 28,
    status: "Low Stock",
  },
  {
    id: "PRD004",
    name: "Extra Virgin Olive Oil",
    category: "Cooking",
    price: 39.99,
    stock: 62,
    status: "In Stock",
  },
  {
    id: "PRD005",
    name: "Premium Dates Pack",
    category: "Dried Fruits",
    price: 29.50,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "PRD006",
    name: "Organic Honey",
    category: "Natural",
    price: 32.00,
    stock: 18,
    status: "Low Stock",
  },
];

export const ProductsTable = ({ className }: ProductsTableProps) => {
  const [currentView, setCurrentView] = useState<'all' | 'low' | 'out'>('all');

  // Filter products based on current view
  const filteredProducts = products.filter(product => {
    if (currentView === 'all') return true;
    if (currentView === 'low') return product.status === 'Low Stock';
    if (currentView === 'out') return product.status === 'Out of Stock';
    return true;
  });

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'In Stock':
        return 'bg-green-50 text-green-600';
      case 'Low Stock':
        return 'bg-amber-50 text-amber-600';
      case 'Out of Stock':
        return 'bg-red-50 text-red-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className={cn(
      "glass-card rounded-xl p-6 w-full", 
      className
    )}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold">Products Overview</h3>
          <p className="text-sm text-gray-500">Manage your inventory</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-9 pl-9 pr-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => setCurrentView('all')}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                currentView === 'all' 
                  ? "bg-primary/10 text-primary" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              All
            </button>
            <button 
              onClick={() => setCurrentView('low')}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                currentView === 'low' 
                  ? "bg-amber-100 text-amber-600" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              Low Stock
            </button>
            <button 
              onClick={() => setCurrentView('out')}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                currentView === 'out' 
                  ? "bg-red-100 text-red-600" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              Out of Stock
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto -mx-6">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Product ID
                  <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Product Name
                  <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Category
                  <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Price
                  <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  Stock
                  <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex-shrink-0 mr-3 bg-gray-100 rounded-md flex items-center justify-center">
                      <Package className="h-4 w-4 text-gray-500" />
                    </div>
                    {product.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                  AED {product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={cn(
                    "px-2.5 py-1 text-xs font-medium rounded-full",
                    getStatusClass(product.status)
                  )}>
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-500 hover:text-gray-700">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
