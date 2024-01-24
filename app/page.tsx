import Image from 'next/image'
import Navbar from './components/navbar'
import Billboard from './components/billboard'
import Announcement from './components/announcement'

export default function Home() {
  return (
    <div className=''>
      <Announcement/>
      <Navbar/>
      <Billboard/>


    </div>
  )
}
