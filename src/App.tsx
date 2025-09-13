
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Suppliers from "./pages/Suppliers";
import Careers from './pages/CareerPage';
import OurTeam from "./pages/OurTeam";
import Facility from "./pages/Facility";
import IndustrialAutomation from "./pages/IndustrialAutomation";
import SmartLiving from "./pages/SmartLiving";
import QualityAssurence from "./pages/QualityAssurance";
import FullfillmentLogistics from "./pages/FullfillmentLogistics";
import SupplyChain from "./pages/SupplyChain";
import TestDevlopment from "./pages/TestDevlopement";
import Pcb from "./pages/Pcb";
import MachineTooling from "./pages/MachineTooling";
import ScrollToTop from "@/components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RandD from "./pages/RandD";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element= {<Careers/>}/>
          <Route path="/suppliers" element= {<Suppliers/>}/>
          <Route path="/about/ourteam" element={<OurTeam />} />
          {/* <Route path="/about/facility" element={<Facility />} /> */}
          <Route path="/markets/industrial-automation" element={<IndustrialAutomation />} />
          <Route path="/markets/smart-living" element={<SmartLiving />} />
          <Route path= "/services/research-and-development" element = {<RandD/>}/>
          <Route path="/services/quality-assurance" element={<QualityAssurence />} />
          <Route path="/services/supply-chain-management" element={<SupplyChain />} />
          <Route path="/services/fullfillment-logistics" element={<FullfillmentLogistics />} />
          <Route path="/services/test-development" element={<TestDevlopment />} />
          <Route path="/services/pcb-manufacturing" element={<Pcb />} />
          <Route path="/services/machining-tooling" element={<MachineTooling />} />
          <Route path = "/privacy-policy" element = {<PrivacyPolicy/>} />


          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
