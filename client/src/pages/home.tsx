import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, GraduationCap, Settings, FileText, Users } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTableau, SiSubstack, SiSpotify } from "react-icons/si";
import { Footer } from "@/components/footer";
import profileImage from "@assets/image_1767746781237.png";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PersonalProjectsSection } from "@/components/personal-projects-section";
import { LeadershipSection } from "@/components/leadership-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  const resources = [
    {
      title: "Tableau Portfolio",
      description: "Data visualizations",
      href: "https://public.tableau.com/app/profile/rezwan.islam4698/vizzes",
      icon: SiTableau,
      iconColor: "text-blue-400"
    },
    {
      title: "Substack",
      description: "Writing & insights",
      href: "https://substack.com/inbox/post/169076551",
      icon: SiSubstack,
      iconColor: "text-orange-400"
    },
    {
      title: "Podcast",
      description: "PM journey & Rocket internship",
      href: "https://open.spotify.com/episode/2pcqPSQeTCfmnsSgAyDvB8",
      icon: SiSpotify,
      iconColor: "text-green-400"
    },
    {
      title: "Unofficial Transcript",
      description: "4.0 GPA - Download PDF",
      href: "/attached_assets/SSR_TSRPT_1766519113256.pdf",
      icon: FileText,
      iconColor: "text-violet-400",
      download: true
    },
    {
      title: "GitHub",
      description: "Code repositories",
      href: "https://github.com/Rezwan3App",
      icon: FaGithub,
      iconColor: "text-gray-300"
    }
  ];

  const leadershipRoles = [
    {
      title: "Vice President",
      organization: "Data Science and Analytics Society (DSAS)",
      description: "Leading strategic communications and member engagement initiatives for the premier data science student organization.",
      color: "coral"
    },
    {
      title: "MBA Student Ambassador",
      organization: "Baruch College",
      description: "Featured on the Zicklin School of Business website, representing the MBA program and supporting prospective students through admissions and orientation.",
      color: "violet",
      link: "https://zicklin.baruch.cuny.edu/academic-programs/graduate/grad-admissions/graduate-student-ambassadors/"
    },
    {
      title: "City Tutor Mentor",
      organization: "The City Tutors",
      description: "Providing academic mentorship and tutoring support to students in STEM subjects and career development.",
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PersonalProjectsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
