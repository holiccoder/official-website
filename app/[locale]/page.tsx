import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import TechStack from "@/components/TechStack"
import SocialMedia from "@/components/SocialMedia"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 bg-pattern">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Services />
      <TechStack />
      <SocialMedia />
      <Contact />
      <Footer />
    </main>
  )
}

