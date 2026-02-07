
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Prizes from '../components/Prizes'
import Tracks from '../components/Tracks'
import Timelines from '../components/TimeLines'
import Rules from '../components/Rules'
import FAQs from '../components/FAQs'
import Footer from '../components/Footer'





const Landing = () => {
  return (
    <div className=' bg-black '>
      <Navbar />
      <Hero />
      <About/>
      <Tracks/>
      <Prizes/>
      <Timelines/>
      <Rules/>
      <FAQs/>
      <Footer/>

    </div>
  )
}

export default Landing






