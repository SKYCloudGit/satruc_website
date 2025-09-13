import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  Factory,
  CircuitBoard,
  Users,
  Building2,
  Store,
  Blocks,
  Globe,
  SmartphoneNfc,
  NotebookText,
  Container,
  Warehouse,
  Cog,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About",
      items: [
        { name: "Overview", icon: Building2 },
        { name: "Company Overview", href: "/about", icon: Factory },
        { name: "Our Team", href: "/about/ourteam", icon: Users },
        // { name: "Facilities", href: "/about/facility", icon: Factory },
      ],
    },
    {
      name: "Markets",
      items: [
        { name: "We Are Into", icon: Store },
        {
          name: "Industrial & Automation",
          href: "/markets/industrial-automation",
          icon: Factory,
        },
        {
          name: "Smart Living & Lifestyle",
          href: "/markets/smart-living",
          icon: SmartphoneNfc,
        },
      ],
    },
    {
      name: "Services",
      items: [
        { name: "Our Services", icon: Blocks },
        {
          name: "Research and Development",
          href: "/services/research-and-development",
          icon: NotebookText,
        },
        {
          name: "Quality Assurance",
          href: "/services/quality-assurance",
          icon: BadgeCheck,
        },
        {
          name: "Supply Chain Management",
          href: "/services/supply-chain-management",
          icon: Container,
        },
        {
          name: "Fullfillment & Logistics",
          href: "/services/fullfillment-logistics",
          icon: Warehouse,
        },
        {
          name: "Test Development",
          href: "/services/test-development",
          icon: ShieldCheck,
        },
        // {
        //   name: "PCB Manufacturing",
        //   href: "/services/pcb-manufacturing",
        //   icon: CircuitBoard,
        // },
        // {
        //   name: "Machining & Tooling",
        //   href: "/services/machining-tooling",
        //   icon: Cog,
        // },
      ],
    },
    { name: "Careers", href: "/careers" },
  ];

  const isHome = location.pathname === "/";
  const shouldUseDarkText = !isHome || isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        shouldUseDarkText
          ? "bg-gradient-radial from-black/80 via-black/90 to-black backdrop-blur-md py-4 shadow-sm text-black"
          : "bg-transparent py-6 text-white"
      )}
    >
      <div className="w-full px-4 md:px-6 relative z-50">
        <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className={cn(
                "flex items-center space-x-2 text-2xl font-bold tracking-tight transition-colors duration-300",
                shouldUseDarkText ? "text-black" : "text-white"
              )}
            >
              {/* <Globe className="w-6 h-6" style={{ color: "green" }} /> */}
              <span>SATRUC</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-2 relative z-50">
              {navLinks.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.items && setActiveDropdown(item.name)
                  }
                >
                  {item.items ? (
                    <button
                      className={cn(
                        "flex items-center text-sm font-medium px-4 py-2 uppercase hover:text-blue-600",
                        shouldUseDarkText ? "text-black" : "text-white"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "text-sm font-medium px-4 py-2 uppercase hover:text-satruc-600",
                        shouldUseDarkText ? "text-black" : "text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                className="ml-4 bg-orange-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition uppercase"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Dropdown */}
          {activeDropdown && (
            <div
              className={cn(
                "absolute -left-10 -right-10 top-full z-40 transition-colors duration-300",
                shouldUseDarkText
                  ? "bg-white/80 text-black"
                  : "bg-gradient-radial from-black/80 via-black/90 to-black backdrop-blur-md py-4 shadow-sm text-white",
                "backdrop-blur-md shadow-lg"
              )}
            >
              <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {navLinks
                  .find((item) => item.name === activeDropdown)
                  ?.items?.map((subItem) => {
                    const Icon = subItem.icon;
                    const isStatic = !subItem.href;

                    return isStatic ? (
                      <div
                        key={subItem.name}
                        className="flex items-center space-x-4 p-3 rounded-md cursor-default hover:bg-white/10"
                      >
                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span
                          className={cn(
                            "text-sm font-medium dance-text text-white transition-colors",
                            shouldUseDarkText ? "text-black" : "text-white"
                          )}
                        >
                          {subItem.name}
                        </span>
                      </div>
                    ) : (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center space-x-4 p-3 rounded-md hover:bg-white/10 transition-colors"
                      >
                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                          <Icon
                            className="w-5 h-5"
                            style={{ color: " green" }}
                          />
                        </div>
                        <span className="text-sm font-medium">
                          {subItem.name}
                        </span>
                      </Link>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden absolute top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-800 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[64px] bg-white/95 backdrop-blur-md transition-transform duration-300 z-40",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.items ? (
                <>
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === link.name ? null : link.name
                      )
                    }
                    className="w-full flex items-center justify-between text-lg font-medium text-gray-800"
                  >
                    {link.name}
                    <ChevronDown
                      className={`transition-transform ${
                        openMobileDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === link.name && (
                    <div className="mt-2 ml-4 space-y-2">
                      {link.items.map((sub) => {
                        const isStatic = !sub.href;
                        const Icon = sub.icon;
                        return isStatic ? (
                          <div
                            key={sub.name}
                            className="flex items-center text-base text-gray-800 cursor-default"
                          >
                            <Icon className="w-4 h-4 mr-2" />
                            <span className="dance-text">{sub.name}</span>
                          </div>
                        ) : (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center text-base text-gray-700 hover:text-blue-600"
                          >
                            <Icon className="w-4 h-4 mr-2" />
                            {sub.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 py-2"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="mt-6 bg-blue-600 text-white text-base font-medium rounded-md px-4 py-3 text-center"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
