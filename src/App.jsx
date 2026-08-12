import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiAssistantModal } from './components/AiAssistantModal';

export default function App() {
  const [aiModalOpen, setAiModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Header Navigation */}
      <Header onOpenAiModal={() => setAiModalOpen(true)} />

      {/* Main Page Content */}
      <main>
        <HeroSection onOpenAiModal={() => setAiModalOpen(true)} />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* RAG AI Assistant Modal */}
      <AiAssistantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />

    </div>
  );
}
