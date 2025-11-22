'use client'

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FFC803] flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        
        {/* Main 404 Card */}
        <div 
          className="bg-[#FD5A17] border-3 border-black rounded-2xl p-8 md:p-16 text-center"
          style={{ boxShadow: '12px 12px 0 0 #000' }}
        >
          {/* 404 Number */}
          <div 
            style={{ fontFamily: 'var(--font-ghuthen)' }}
            className="text-[120px] md:text-[180px] font-bold leading-none text-black mb-4"
          >
            404
          </div>

          {/* Heading */}
          <h1 
            style={{ fontFamily: 'var(--font-ghuthen)' }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
          >
            Page Not Found!
          </h1>

          {/* Description */}
          <p 
            style={{ fontFamily: 'var(--font-questrial)' }}
            className="text-lg md:text-xl text-black mb-8 opacity-90"
          >
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push('/')}
              className="bg-black text-white border-2 border-black rounded-xl px-8 py-4 font-bold text-lg hover:-translate-y-1 transition-transform w-full sm:w-auto"
              style={{ boxShadow: '6px 6px 0 0 #000' }}
            >
              Go Home
            </button>
            
            <button
              onClick={() => router.back()}
              className="bg-[#FFC803] text-black border-2 border-black rounded-xl px-8 py-4 font-bold text-lg hover:-translate-y-1 transition-transform w-full sm:w-auto"
              style={{ boxShadow: '6px 6px 0 0 #000' }}
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Quick Links Section */}
        <div 
          className="bg-black border-3 border-black rounded-2xl p-6 md:p-8 mt-8"
          style={{ boxShadow: '8px 8px 0 0 #000' }}
        >
          <h2 
            style={{ fontFamily: 'var(--font-ghuthen)' }}
            className="text-white text-2xl md:text-3xl font-bold mb-5 text-center"
          >
            Quick Links
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => router.push('/')}
              className="bg-[#FD5A17] border-2 border-white rounded-lg px-6 py-3 text-white font-semibold text-lg hover:-translate-y-1 transition-transform"
            >
              🏠 Home
            </button>
            
            <button
              onClick={() => router.push('/blogs')}
              className="bg-[#FD5A17] border-2 border-white rounded-lg px-6 py-3 text-white font-semibold text-lg hover:-translate-y-1 transition-transform"
            >
              📝 Blogs
            </button>
            
            <button
              onClick={() => router.push('/about')}
              className="bg-[#FD5A17] border-2 border-white rounded-lg px-6 py-3 text-white font-semibold text-lg hover:-translate-y-1 transition-transform"
            >
              👤 About
            </button>
            
            <button
              onClick={() => router.push('/contact')}
              className="bg-[#FD5A17] border-2 border-white rounded-lg px-6 py-3 text-white font-semibold text-lg hover:-translate-y-1 transition-transform"
            >
              📧 Contact
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}