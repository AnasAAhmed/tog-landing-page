'use client'
import Image from "next/image";
import MotionDiv from "../ui/MotionWrapper";
import SplitText from "../ui/split-effect";
import { useEffect, useRef, useState } from "react";

const ReelSection = () => {
  const sectionRef = useRef<any>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate scroll progress when section is in view
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
          setScrollPosition(progress * 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div ref={sectionRef} className="min-h-screen bg-[#FD5A17] max-sm:bg-[url('/images/reel-section-mob.png')] max-sm: bg-center bg-no-repeat bg-contain relative overflow-hidden">
      <div className="max-sm:hidden absolute top-56 left-0 right-0 pointer-events-none overflow-hidden h-3s2">
        <div
          className="text-[150px] md:text-[220px] font-bold whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-adieu)',
            transform: `translateY(${100- scrollPosition * 2}%)`,
            transition: 'transform 0.1s linear',
            WebkitTextStroke: '1px black',
            color: 'transparent',
          }}
        >
          GENIUS
        </div>
      </div>
      <div className="max-sm:hidden absolute bottom-56 left-24 right-0 pointer-events-none overflow-hidden hs-32">
        <div
          className="text-[100px] md:text-[150px] font-bold whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-adieu)',
            transform: `translateY(${120 - scrollPosition * 2}%)`,
            transition: 'transform 0.1s linear',
            WebkitTextStroke: '1px black',
            color: 'transparent',
          }}
        >
          DOWNLOADER
        </div>
      </div>
      <div className="container mx-auto px-4 py-11 lg:py-16 relative z-10">
        <div className="flex flex-col items-center gap-3 mb-8 lg:mb-12">

          <SplitText
            text={' Any Platform, Any Quality.'}
            mode={'words'}
            className={'text-black text-center font-adieu text-4xl sm:text-6xl lg:text-[58px] font-normal'}
            itemClassName="mx-[1px]"
            delayPerItem={0.03}
            duration={0.3}
            y={12}
          />
          <div style={{ fontFamily: 'var(--font-questrial)' }} >
            <SplitText
              text={'YouTube, Instagram, TikTok... Get the highest resolution media instantly.'}
              mode={'words'}
              className="text-black text-center font-questrial text-base sm:text-lg lg:text-[18px] font-light"
              itemClassName="mx-[1px]"
              delayPerItem={0.03}
              duration={0.3}
              y={12}
            />
          </div>
        </div>

        <div className="relative hisdden mb-12 lg:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 max-w-7xl mx-auto">
            <div className="lg:col-span-3 grid grid-cols-1 gap-4 lg:gap-5">

              <MotionDiv delay={0.1}>
                <div className="relative aspect-289/380 lg:aspect-289/380">
                  <Image
                    fill
                    src="/images/Reel.png"
                    alt="Samsung Presents"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </MotionDiv>

              <MotionDiv delay={0.3}>
                <div
                  style={{ boxShadow: "8px 8px 0 0 #FFC803" }}
                  className="border-gray-900 lg:border-2 rounded-2xl relative max-sm:mr-2 aspect-289/232 lg:aspect-210/226"
                >
                  <Image
                    fill
                    src="/images/reel4.png"
                    alt="Samsung Presents"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </MotionDiv>

            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4 lg:gap-5">

              <MotionDiv delay={0.5}>
                <div className="relative aspect-427/240 lg:aspect-427/240">
                  <Image
                    fill
                    src="/images/reel2.png"
                    alt="YouTube Music"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </MotionDiv>

              <MotionDiv delay={0.6}>
                <div className="relative aspect-427/370 lg:aspect-427/370">
                  <Image
                    fill
                    src="/images/reel5.png"
                    alt="Galaxy A"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </MotionDiv>

            </div>

            <div className="lg:col-span-4">
              <MotionDiv delay={0.8}>
                <div
                  style={{ boxShadow: "8px 8px 0 0 #FFC803" }}
                  className="rounded-2xl relative aspect-360/640 lg:aspect-360/660 border-gray-900 border-2"
                >
                  <Image
                    fill
                    src="/images/reel3.png"
                    alt="YouTube Shorts"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelSection;
