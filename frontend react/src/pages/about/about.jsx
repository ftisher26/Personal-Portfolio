import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ErrorBoundary from "../../components/ErrorBoundary"
import "./about.css";

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <ErrorBoundary>
        <SkillsSection />
      </ErrorBoundary>
    </div>
  );
};