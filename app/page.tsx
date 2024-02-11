
import Navbar from './components/navbar'
import Billboard from './components/billboard'
import Announcement from './components/announcement'
import Features from './components/features'
import Tiles from './components/tiles'
import Messages from './components/message'
import Brands from './components/brands'
import Maps from './components/maps'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className=''>
      <Announcement/>
      <Navbar/>
      <Billboard/>
      <Features/>
      <Tiles/>
      <Features/>
      <Messages/>
      <Brands/>
      <Maps/>
      <Footer/>
    </div>
  )
}
