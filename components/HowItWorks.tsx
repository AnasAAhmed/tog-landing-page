export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#FFC803] overflow-x-hidden">
      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-20 py-8 md:py-16 lg:py-20">
        
        {/* GENIUS Title */}
        <div className="relative mb-8 md:mb-12 lg:mb-16">
          <h1 
            className="font-adieu text-[80px] sm:text-[120px] md:text-[160px] lg:text-[243px] font-normal leading-none tracking-[-0.04em]"
            style={{
              WebkitTextStroke: '5px #FD5A17',
              color: 'transparent',
            }}
          >
            GENIUS
          </h1>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
          
          {/* How it works? Card */}
          <div className="w-full lg:w-[363px] flex-shrink-0">
            <div 
              className="bg-[#FD5A17] rounded-xl border-2 border-black/50 p-8 md:p-10 lg:p-11"
              style={{ boxShadow: '8px 8px 0 0 #000' }}
            >
              <h2 className="font-guthen text-[42px] sm:text-[50px] md:text-[58px] leading-[39.25px] text-black mb-10 md:mb-12">
                How it works?
              </h2>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" fill="#FF5A19"/>
                      <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-questrial text-[17px] leading-[28px] tracking-[-0.4px] text-black">
                    Copy the URL of the video whichever you like.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" fill="#FF5A19"/>
                      <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-questrial text-[17px] leading-[28px] tracking-[-0.4px] text-black">
                    Paste that URL over the text box provided.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" fill="#FF5A19"/>
                      <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-questrial text-[17px] leading-[28px] tracking-[-0.4px] text-black">
                    Select any format (MP4, MP3) and resolution (4k, 1080p, 720p)
                  </p>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" fill="#FF5A19"/>
                      <path d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-questrial text-[17px] leading-[28px] tracking-[-0.4px] text-black">
                    Now you will see the Download button, simply Click on it
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What around the world? Card */}
          <div className="w-full lg:flex-1 relative">
            <div 
              className="bg-[#FD5A17] rounded-xl border-2 border-black/50 p-8 md:p-10 lg:p-14"
              style={{ boxShadow: '8px 8px 0 0 #000' }}
            >
              <h2 className="font-guthen text-[42px] sm:text-[50px] md:text-[58px] leading-[39.25px] text-black mb-10 md:mb-12">
                What around the world?
              </h2>

              {/* Blog Cards Container */}
              <div className="relative">
                <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                  
                  {/* Card 1 */}
                  <div className="flex-shrink-0 w-[258px] snap-start">
                    <div className="bg-black rounded-lg border border-black overflow-hidden">
                      <div className="bg-[#FFC803] p-9 border-b border-white">
                        <div className="aspect-[4/3] bg-white rounded-xl border-2 border-black overflow-hidden">
                          <img 
                            src="https://api.builder.io/api/v1/image/assets/TEMP/0c41184f4b6782dba6d1ed5db826384982e69337?width=363" 
                            alt="Blog thumbnail"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-7 bg-black">
                        <p className="font-poppins font-medium text-[18px] leading-[29.15px] tracking-[-0.71px] text-white text-center capitalize">
                          How to start blogging? Most efficient way to get reach.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex-shrink-0 w-[258px] snap-start">
                    <div className="bg-black rounded-lg border border-black overflow-hidden">
                      <div className="bg-[#FFC803] p-9 border-b border-white">
                        <div className="aspect-[4/3] bg-white rounded-xl border-2 border-black overflow-hidden">
                          <img 
                            src="https://api.builder.io/api/v1/image/assets/TEMP/21bba95a085f408b18bbf7f2e91153c2508911a6?width=363" 
                            alt="Blog thumbnail"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-7 bg-black">
                        <p className="font-poppins font-medium text-[18px] leading-[29.15px] tracking-[-0.71px] text-white text-center capitalize">
                          10 Reasons not to use groww for invetments.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex-shrink-0 w-[258px] snap-start">
                    <div className="bg-black rounded-lg border border-black overflow-hidden">
                      <div className="bg-[#FFC803] p-9 border-b border-white">
                        <div className="aspect-[4/3] bg-white rounded-xl border-2 border-black overflow-hidden">
                          <img 
                            src="https://api.builder.io/api/v1/image/assets/TEMP/60c9ab7f05e907e64b2ea4c410764418e3af095f?width=363" 
                            alt="Blog thumbnail"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-7 bg-black">
                        <p className="font-poppins font-medium text-[18px] leading-[29.15px] tracking-[-0.71px] text-white text-center capitalize">
                          A blog (contraction of weblog) is a web site with frequent
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Arrow Button */}
                <button 
                  className="absolute -bottom-6 right-0 lg:-right-6 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-[#FD5A17] border-2 border-black flex items-center justify-center hover:scale-105 transition-transform"
                  aria-label="Next articles"
                >
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30H45M45 30L32.5 17.5M45 30L32.5 42.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* DOWNLOADER Title */}
        <div className="relative">
          <h1 
            className="font-adieu text-[50px] sm:text-[80px] md:text-[100px] lg:text-[126px] font-normal leading-none tracking-[-0.04em]"
            style={{
              WebkitTextStroke: '4.63px #FD5A17',
              color: 'transparent',
            }}
          >
            DOWNLOADER
          </h1>
        </div>

      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
