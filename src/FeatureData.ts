import {
  Factory,
  Users,
  CircuitBoard,
  Building2,
  Store,
  Blocks,
  NotebookText,
  SmartphoneNfc,
  BadgeCheck,
  Container,
  Warehouse,
  ShieldCheck,
  Cog,
} from "lucide-react";
import { FeatureItem } from "./types";
import path from "path";

// ✅ Titles for each group (used in FeatureGrid heading)
export const groupTitles: Record<string, string> = {
  about: "About",
  services: "Services",
  markets: "Markets",
};

// ✅ Actual feature group items for each section
export const featureGroups: Record<string, FeatureItem[]> = {
  about: [
    { label: "Company Overview", path: "/about", icon: Factory },
    { label: "Our Team", path: "/about/ourteam", icon: Users },
    // { label: "Facilities", path: "/about/facility", icon: Factory },
  ],
  markets: [
    {
      label: "Industrial Automation",
      path: "/markets/industrial-automation",
      icon: Factory,
    },
    {
      label: "Smart Living",
      path: "/markets/smart-living",
      icon: SmartphoneNfc,
    },
  ],
  services: [
    {
      label: "Research and Development",
      path: "/services/research-and-development",
      icon: NotebookText,
    },
    {
      label: "Quality Assurance",
      path: "/services/quality-assurance",
      icon: BadgeCheck,
    },
    {
      label: "Supply Chain Management",
      path: "/services/supply-chain-management",
      icon: Container,
    },
    {
      label: "Fulfillment & Logistics",
      path: "/services/fullfillment-logistics",
      icon: Warehouse,
    },
    {
      label: "Test Development",
      path: "/services/test-development",
      icon: ShieldCheck,
    },
    // { label: "PCB Manufacturing", path: "/services/pcb-manufacturing", icon: CircuitBoard },
    // { label: "Machining & Tooling", path: "/services/machining-tooling", icon: Cog },
  ],
};
