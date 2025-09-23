import { useState } from "react";
import Index from "@/pages/Index";
import FeaturePage from "@/components/FeaturePage";
import PricingPage from "@/components/PricingPage";
import { Shield, Zap, Eye } from "lucide-react";

type Page = "home" | "feature" | "pricing";

interface FeatureData {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
}

export default function Router() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedFeature, setSelectedFeature] = useState<FeatureData | null>(null);

  const features = [
    {
      id: "intelligent-monitoring",
      title: "Intelligent Monitoring",
      description: "AI-powered surveillance and threat detection",
      icon: Shield,
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-600"
    },
    {
      id: "automated-workflows",
      title: "Automated Workflows", 
      description: "Streamline operations with intelligent automation",
      icon: Zap,
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      id: "real-time-insights",
      title: "Real-time Insights",
      description: "Advanced analytics and reporting",
      icon: Eye,
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600"
    }
  ];

  const handleFeatureClick = (featureId: string) => {
    const feature = features.find(f => f.id === featureId);
    if (feature) {
      setSelectedFeature(feature);
      setCurrentPage("feature");
    }
  };

  const handlePricingClick = () => {
    setCurrentPage("pricing");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setSelectedFeature(null);
  };

  if (currentPage === "feature" && selectedFeature) {
    return (
      <FeaturePage 
        feature={selectedFeature} 
        onBack={handleBackToHome}
      />
    );
  }

  if (currentPage === "pricing") {
    return (
      <PricingPage onBack={handleBackToHome} />
    );
  }

  return (
    <Index 
      onFeatureClick={handleFeatureClick}
      onPricingClick={handlePricingClick}
    />
  );
}