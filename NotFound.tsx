
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md glass-card rounded-xl p-12 text-center animate-fade-in">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl font-medium mb-6">Page not found</p>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className={cn(
            "inline-flex items-center justify-center px-5 py-2.5 font-medium rounded-lg",
            "bg-primary text-white hover:bg-primary/90 transition-colors"
          )}
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
