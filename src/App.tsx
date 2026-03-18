import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ICPPage from "./pages/ICP";
import OfferingsPage from "./pages/OfferingsPage";
import HydrogenServicesPage from "./pages/HydrogenServicesPage";
import VCFSubPage from "./pages/offerings/VCFSubPage";
import SolutionPage from "./pages/solutions/SolutionPage";
import SolutionsOverviewPage from "./pages/solutions/SolutionsOverviewPage";
import { useEffect } from "react";
import { useAnalyticsTracking } from "./hooks/useAnalyticsTracking";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const AnalyticsTracker = () => {
  useAnalyticsTracking();
  return null;
};

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <Chatbot />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/icp" element={<ICPPage />} />
            <Route path="/offerings" element={<OfferingsPage />} />
            <Route path="/offerings/hydrogen-services" element={<HydrogenServicesPage />} />
            <Route path="/offerings/:slug" element={<VCFSubPage />} />
            <Route path="/solutions" element={<SolutionsOverviewPage />} />
            <Route path="/solutions/:slug" element={<SolutionPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
