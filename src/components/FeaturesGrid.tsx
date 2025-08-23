import { useLocation, Link } from "react-router-dom";
import { featureGroups, groupTitles } from "../FeatureData";
import { LucideIcon } from "lucide-react";

interface FeatureItem {
  label: string;
  path: string;
  icon: LucideIcon | string;
}

export default function FeatureGrid() {
  const location = useLocation();
  const path = location.pathname;

  let group: keyof typeof featureGroups = "about";
  if (path.startsWith("/services")) group = "services";
  else if (path.startsWith("/markets")) group = "markets";
  else if (path.startsWith("/about")) group = "about";

  const features: FeatureItem[] = featureGroups[group] || [];
  const groupTitle = groupTitles[group];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-slate-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold text-satruc-accent-600 uppercase tracking-widest">
            Navigate {groupTitle}
          </h3>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const isActive = path === feature.path;
            const Icon = feature.icon;
            const showArrow = isActive && index < features.length - 1;

            return (
              <div key={feature.path} className="relative flex items-center">
                <Link
                  to={feature.path}
                  className={`flex items-center justify-between px-5 py-4 border rounded-md transition-all shadow-sm hover:shadow-md w-full bg-white ${
                    isActive
                      ? "border-satruc-accent-600 shadow-lg bg-satruc-accent-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {typeof Icon === "string" ? (
                      <img src={Icon} alt={feature.label} className="w-6 h-6" />
                    ) : (
                      <Icon className="w-6 h-6 text-satruc-accent-600" />
                    )}
                    <span className="font-semibold text-gray-800 text-sm">
                      {feature.label}
                    </span>
                  </div>
                </Link>

                {showArrow && (
                  <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 text-satruc-accent-600 text-3xl animate-blink z-10">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
