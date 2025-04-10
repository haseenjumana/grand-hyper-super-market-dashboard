
import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/components/ui/use-toast";
import { exportFullProject } from "@/utils/exportFullProject";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DashboardProps {
  children: ReactNode;
}

export const Dashboard = ({ children }: DashboardProps) => {
  const isMobile = useIsMobile();
  const [isExporting, setIsExporting] = useState(false);

  const handleShare = () => {
    // Get the current URL
    const url = window.location.href;
    
    // Copy to clipboard
    navigator.clipboard.writeText(url).then(() => {
      toast({
        title: "Link copied to clipboard",
        description: "You can now share this link with others",
      });
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        title: "Failed to copy link",
        description: "Please try again",
        variant: "destructive",
      });
    });
  };
  
  const handleExportFullProject = async () => {
    setIsExporting(true);
    try {
      await exportFullProject();
      toast({
        title: "Export successful",
        description: "The full project code has been downloaded as a ZIP file",
      });
    } catch (error) {
      console.error("Export failed:", error);
      toast({
        title: "Export failed",
        description: "There was an error exporting the project code",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isMobile={isMobile} />
      <div className="flex flex-col flex-1 overflow-hidden ml-[72px] md:ml-[240px]">
        <Header onShare={handleShare} />
        <main className="flex-1 overflow-y-auto">
          <div className="page-container">
            <div className="flex justify-end mb-4">
              <Button
                onClick={handleExportFullProject}
                disabled={isExporting}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                <span>{isExporting ? "Exporting..." : "Export Complete Source Code"}</span>
              </Button>
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
