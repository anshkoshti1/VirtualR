import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import WorkFlow from "./components/WorkFlow"
import Createacc from "./Navbar/Createacc"
import Signin from "./Navbar/Signin"

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
