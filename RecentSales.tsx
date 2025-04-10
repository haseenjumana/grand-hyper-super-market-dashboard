
import { cn } from "@/lib/utils";

type RecentSalesProps = {
  className?: string;
};

// Mock data for recent transactions
const recentSales = [
  {
    id: 1,
    customer: "Ahmed Al-Farsi",
    email: "ahmed@example.com",
    amount: "AED 450.00",
    status: "completed",
    date: "Today, 2:30 PM",
  },
  {
    id: 2,
    customer: "Fatima Hassan",
    email: "fatima@example.com",
    amount: "AED 1,290.00",
    status: "processing",
    date: "Today, 11:30 AM",
  },
  {
    id: 3,
    customer: "Mohammed Ali",
    email: "mohammed@example.com",
    amount: "AED 590.00",
    status: "completed",
    date: "Yesterday, 3:45 PM",
  },
  {
    id: 4,
    customer: "Layla Rahman",
    email: "layla@example.com",
    amount: "AED 890.00",
    status: "completed",
    date: "Yesterday, 1:30 PM",
  },
  {
    id: 5,
    customer: "Omar Khan",
    email: "omar@example.com",
    amount: "AED 350.00",
    status: "failed",
    date: "May 20, 5:30 PM",
  },
];

export const RecentSales = ({ className }: RecentSalesProps) => {
  return (
    <div className={cn(
      "glass-card rounded-xl p-6 w-full", 
      className
    )}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Recent Sales</h3>
          <p className="text-sm text-gray-500">Latest customer transactions</p>
        </div>
        <button className="text-xs font-medium text-primary hover:underline">
          View All
        </button>
      </div>
      
      <div className="overflow-hidden">
        <div className="overflow-y-auto max-h-[320px] pr-2 -mr-2">
          {recentSales.map((sale) => (
            <div 
              key={sale.id} 
              className="flex items-center justify-between py-3 first:pt-0 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-medium">
                  {sale.customer.substring(0, 1)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{sale.customer}</p>
                  <p className="text-xs text-gray-500">{sale.email}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{sale.amount}</p>
                <p className="text-xs text-gray-500">{sale.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
