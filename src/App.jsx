import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { navItems } from "./nav-items";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Navbar isLoggedIn={isLoggedIn} username={username} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/auth"
              element={
                <Auth
                  setIsLoggedIn={setIsLoggedIn}
                  setUsername={setUsername}
                />
              }
            />
            {navItems.map(({ to, page: PageComponent }) => (
              <Route
                key={to}
                path={to}
                element={
                  <PageComponent
                    setIsLoggedIn={setIsLoggedIn}
                    setUsername={setUsername}
                  />
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;