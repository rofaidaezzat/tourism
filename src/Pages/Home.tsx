import { About } from "./About"
import { TargetAudience } from "./TargetAudience"
import { Contact } from "./Contact"
import { FeaturedTrips } from "./FeaturedTrips"
import { Hero } from "./Hero"
import { Navbar } from "./Navbar"
import { Services } from "./Services"
import { Testimonials } from "./Testimonials"
import { WhyChooseUs } from "./WhyChooseUs"

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <div id="about">
          <About />
        </div>
        <TargetAudience />
        <div id="services">
          <Services />
        </div>
        <div id="packages">
          <FeaturedTrips />
        </div>
        <WhyChooseUs />
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  )
}
