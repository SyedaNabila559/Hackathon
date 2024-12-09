import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      
      <main className="max-w-[1440px] mx-auto px-6 md:px-16 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-[#252B42] text-base font-bold tracking-wider">
                CONTACT US
              </h2>
              <h1 className="text-[#252B42] text-5xl md:text-6xl font-bold leading-tight">
                Get in touch today!
              </h1>
              <p className="text-[#737373] text-xl">
                We know how large objects will act, but things on a small scale
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-[#252B42] text-xl font-bold">
                Phone ; +451 215 215
              </p>
              <p className="text-[#252B42] text-xl font-bold">
                Fax : +451 215 215
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-[#FFF2F3] rounded-full transform scale-125 translate-x-1/4"></div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#977DF4] rounded-full"></div>
            <div className="absolute bottom-1/4 left-0 w-12 h-12 bg-[#977DF4] rounded-full opacity-30"></div>
            <Image
              src="/placeholder.svg"
              alt="Happy family shopping"
              width={600}
              height={600}
              className="relative z-10"
              priority
            />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
