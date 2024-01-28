
import Navbar from './components/navbar'
import Billboard from './components/billboard'
import Announcement from './components/announcement'
import Features from './components/features'

export default function Home() {
  return (
    <div className=''>
      <Announcement/>
      <Navbar/>
      <Billboard/>
      <Features/>

    </div>
  )
}
