import Hero from '@/components/Hero'
import { FloatingNav } from '@/components/ui/floating-navbar'
import React from 'react'
import RecentProjects from '@/components/RecentProjects'
import { navItems } from '@/data'
import WhatIDo from '@/components/WhatIDo'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const page = () => {

  return (
    <main className='relative bg-black'>
      <div className='max-w-7xl w-full mx-auto px-2'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <WhatIDo />
        <RecentProjects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default page