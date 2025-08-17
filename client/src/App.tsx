import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Analytics from "@/pages/Analytics";

import ImprovedAnalytics from "@/components/ImprovedAnalytics";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useVisitTracker } from "@/hooks/useVisitTracker";
import { useAnalyticsEvents } from "@/hooks/useAnalyticsEvents";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/analytics" component={Analytics} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Track visits automatically
  useVisitTracker();
  // Track advanced analytics events
  useAnalyticsEvents();
  
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <GoogleAnalytics />
          <ImprovedAnalytics />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
