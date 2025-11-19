import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-orange">
      {/* Header */}
      <header className="bg-orange-600 px-4 py-2 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-[rgba(255,88,1,0.04)] backdrop-blur-sm">
            <div className="flex items-center justify-between px-6 md:px-20 py-4">
              {/* Logo */}
              <div className="shrink-0">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4c2d0856bbd3c15ad06ffb4717d7124dd9d662c7?width=107"
                  alt="Genius"
                  className="h-16 md:h-[70px] w-auto"
                />
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8 lg:gap-12">
                <a
                  href="#how-it-works"
                  className="font-sans text-sm font-normal text-black tracking-wide hover:opacity-70 transition-opacity"
                >
                  How it works
                </a>
                <a
                  href="#blogs"
                  className="font-sans text-sm font-normal text-black tracking-wide hover:opacity-70 transition-opacity"
                >
                  Blogs
                </a>
                <a
                  href="#faqs"
                  className="font-sans text-sm font-normal text-black tracking-wide hover:opacity-70 transition-opacity"
                >
                  FAQs
                </a>
              </nav>

              {/* CTA Button */}
              <button className="rounded-lg bg-black px-5 py-2.5 font-body text-sm md:text-[15px] font-normal text-white tracking-wide hover:bg-gray-900 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-s[url('/images/hero.png')] bg-orange-600 pt-32 md:pt-40 pb-16 md:pb-24 psx-4">
        <div className="mxs-7xl">
          <div className="absolute top-20 md:top-24 left-4 md:left-16 w-20 md:w-28 h-20 md:h-28 opacity-90">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/85fa9220401187cfbeda46a21a794011c871c9d0?width=212"
              alt=""
              className="w-full h-full object-contain rotate-23"
            />
          </div>

          <div className="absolute top-8 md:top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-24 md:h-32 opacity-90">
            <img
              src="/icons/insta.png"
              alt=""
              className="w-full h-full object-contain -rotate-14"
            />
          </div>

          <div className="absolute top-12 md:top-8 right-4 md:right-24 w-24 md:w-32 h-24 md:h-32 opacity-90">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2831e714da31e3f221ab034d710d996d57ab8f63?width=233"
              alt=""
              className="w-full h-full object-contain rotate-14"
            />
          </div>

          <div className="absolute bottom-0 left-[550px] w-32 md:w-48 h-32 md:h-48 opacity-90">
            <img
              src="/icons/d-arrow.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>  <div className="absolute top-12 md:top-24 rigssht-4 md: right-0 w-32 md:w-48 h-32 md:h-48 opacity-90">
            <img
              src="/icons/d-arrow2.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>  <div className="absolute top-36 md:top-48 left-4 md:right-24 w-32 md:w-48 h-32 md:h-48 opacity-90">
            <img
              src="/icons/d-arrow3.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>


          <div className="absolute bottom-32 md:bottom-24 left-8 md:left-32 w-20 md:w-28 h-20 md:h-28 opacity-90">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4dc98feb856acdb1a57e4f9150636ebc3ba3e9e2?width=218"
              alt=""
              className="w-full h-full object-contain -rotate-13"
            />
          </div>

          <div className="absolute bottom-16 md:bottom-8 right-8 md:right-24 w-32 md:w-48 h-20 md:h-32 opacity-90">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/19c7a409ceb4e0350714f7e9b782bd5e7416afeb?width=388"
              alt=""
              className="w-full h-full object-contain rotate-18"
            />
          </div>

          {/* Main content */}
          <div style={{ fontFamily: 'Caveat' }} className="relative z-10 text-center max-w-5xl mx-auto">
            {/* Main heading */}
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[112px] font-semibold text-black leading-[0.95] tracking-wide mb-4 md:mb-6 [text-shadow:1px_1px_0_#000]">
              One Tool. Every Video.
              <br />
              Zero Trouble.
            </h1>

            {/* Subheading */}
            <p className="font-body text-base md:text-lg text-black leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
              Download videos from YouTube, Instagram, TikTok, Facebook and more
              — fast, clean, and always in HD
            </p>

            {/* Download form */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 max-w-2xl mx-auto">
              <button
                // onClick={handleDownload}
                className="w-full sm:w-auto rounded bg-black px-12 py-5 font-body text-lg md:text-xl font-normal text-white hover:bg-gray-900 transition-colors"
              >
                Download
              </button>

              <div className="relative w-full sm:flex-1">
                <input
                  type="text"
                  placeholder="Paste your link"
                  // value={url}
                  // onChange={(e) => setUrl(e.target.value)}
                  className="w-full rounded border-2 border-black outline-none bg-transparent px-8 py-5 font-sans text-lg text-black placeholder:text-black/60 focus:outline-none"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-black bg-transparent p-2.5 hover:bg-black/5 transition-colors">
                  <Search className="w-6 h-6 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad-free support section */}
      <section className="bg-black px-4 py-10 md:py-12 text-center">
        <p className="font-sans text-sm md:text-base text-white leading-relaxed mb-6">
          We dislike ads as much as you. Please help us making the website
          ad-free, while continuing to provide high quality service.
        </p>
        <button className="inline-flex items-center justify-center rounded border border-brand-gray-dark bg-white px-9 py-3 hover:bg-gray-100 transition-colors">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e4a17037ada580d488b9c663105db0ef663c6011?width=392"
            alt="Buy me a coffee"
            className="h-10"
          />
        </button>
      </section>

      {/* Any Platform section */}
      <section className="px-4 py-16 md:py-24">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/3bf3bd9e5ed483440300a6b8aa0317083e53ff29?width=2560"
          alt="Any Platform, Any Quality"
          className="w-full max-w-7xl mx-auto"
        />
      </section>

      {/* How it works / Blogs section */}
      <section className="px-4 pb-16 md:pb-24">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/48789abd1329682477ff6e7f69606fa7a7f4742f?width=2560"
          alt="How it works and Blog section"
          className="w-full max-w-7xl mx-auto"
        />
      </section>

      {/* Footer */}
      <footer className="bg-black px-4 md:px-20 py-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            {/* Logo and social links */}
            <div className="flex flex-col gap-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7520c3912f2cf5fcd4f81fe3cd6ff3c3fd821013?width=126"
                alt="GENIUS"
                className="h-20 w-auto"
              />
              <div className="flex items-center gap-6 md:gap-7">
                <a
                  href="#"
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="currentColor"
                  >
                    <path d="M11.002 6.82961C8.14074 6.82961 5.83276 9.13809 5.83276 12.0001C5.83276 14.8621 8.14074 17.1705 11.002 17.1705C13.8634 17.1705 16.1714 14.8621 16.1714 12.0001C16.1714 9.13809 13.8634 6.82961 11.002 6.82961ZM11.002 15.3615C9.153 15.3615 7.64135 13.854 7.64135 12.0001C7.64135 10.1461 9.14851 8.6386 11.002 8.6386C12.8556 8.6386 14.3628 10.1461 14.3628 12.0001C14.3628 13.854 12.8511 15.3615 11.002 15.3615ZM17.5886 6.6181C17.5886 7.2886 17.0486 7.8241 16.3828 7.8241C15.7125 7.8241 15.1772 7.2841 15.1772 6.6181C15.1772 5.95211 15.717 5.41211 16.3828 5.41211C17.0486 5.41211 17.5886 5.95211 17.5886 6.6181ZM21.0123 7.8421C20.9359 6.2266 20.5669 4.79561 19.3837 3.61661C18.2049 2.43762 16.7743 2.06862 15.1591 1.98762C13.4945 1.89312 8.50516 1.89312 6.84053 1.98762C5.2299 2.06412 3.79923 2.43312 2.616 3.61212C1.43276 4.79111 1.06834 6.22211 0.987362 7.8376C0.892884 9.5026 0.892884 14.4931 0.987362 16.1581C1.06385 17.7735 1.43276 19.2046 2.616 20.3835C3.79923 21.5626 5.2254 21.9316 6.84053 22.0125C8.50516 22.1071 13.4945 22.1071 15.1591 22.0125C16.7743 21.936 18.2049 21.567 19.3837 20.3835C20.5624 19.2046 20.9314 17.7735 21.0123 16.1581C21.1068 14.4931 21.1068 9.50709 21.0123 7.8421ZM18.8618 17.9446C18.5108 18.8265 17.8316 19.506 16.9452 19.8616C15.618 20.3881 12.4687 20.2665 11.002 20.2665C9.53546 20.2665 6.38163 20.3836 5.05894 19.8616C4.17714 19.5105 3.49779 18.8311 3.14237 17.9446C2.61599 16.6171 2.73746 13.4671 2.73746 12.0001C2.73746 10.5331 2.62049 7.3786 3.14237 6.05561C3.49329 5.17361 4.17264 4.49411 5.05894 4.13861C6.38614 3.61212 9.53546 3.73362 11.002 3.73362C12.4687 3.73362 15.6225 3.61661 16.9452 4.13861C17.8271 4.48961 18.5063 5.16911 18.8618 6.05561C19.3882 7.3831 19.2667 10.5331 19.2667 12.0001C19.2667 13.4671 19.3882 16.6215 18.8618 17.9446Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label="Threads"
                >
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="currentColor"
                  >
                    <path d="M15.8958 11.1965C15.7994 11.1512 15.7015 11.1074 15.6023 11.0656C15.4296 7.93667 13.6908 6.14536 10.771 6.12703C10.7578 6.12695 10.7447 6.12695 10.7314 6.12695C8.98509 6.12695 7.53266 6.85989 6.63869 8.19362L8.24445 9.27668C8.91228 8.28043 9.96034 8.06805 10.7323 8.06805C10.7412 8.06805 10.7501 8.06805 10.7589 8.06813C11.7202 8.07416 12.4457 8.34899 12.9152 8.88494C13.2569 9.27513 13.4855 9.81433 13.5986 10.4948C12.7463 10.3524 11.8245 10.3086 10.8391 10.3641C8.06309 10.5213 6.27849 12.1132 6.39834 14.3251C6.45917 15.4471 7.02766 16.4124 7.99902 17.0429C8.82031 17.576 9.87802 17.8367 10.9774 17.7777C12.4292 17.6994 13.5681 17.1548 14.3626 16.1589C14.9661 15.4027 15.3477 14.4227 15.5163 13.1877C16.2081 13.5983 16.7208 14.1386 17.004 14.788C17.4856 15.8921 17.5137 17.7062 16.0081 19.1853C14.6891 20.481 13.1034 21.0415 10.7071 21.0589C8.04904 21.0394 6.03874 20.2013 4.7317 18.5676C3.50776 17.0378 2.87522 14.8281 2.85161 12C2.87522 9.17184 3.50776 6.96218 4.7317 5.43239C6.03874 3.79868 8.04901 2.96052 10.7071 2.9411C13.3845 2.96067 15.4299 3.80286 16.7869 5.44446C17.4523 6.24948 17.954 7.26184 18.2848 8.44222L20.1665 7.94859C19.7656 6.49567 19.1348 5.24367 18.2764 4.20535C16.5366 2.10077 13.9921 1.02236 10.7137 1H10.7005C7.42876 1.02228 4.9128 2.10479 3.22257 4.21742C1.7185 6.0974 0.942656 8.71325 0.916586 11.9923L0.916504 12L0.916586 12.0077C0.942656 15.2867 1.7185 17.9027 3.22257 19.7826C4.9128 21.8952 7.42876 22.9777 10.7005 23H10.7137C13.6225 22.9802 15.6728 22.2314 17.362 20.5721C19.5718 18.4013 19.5053 15.6803 18.7769 14.0099C18.2543 12.8121 17.2581 11.8391 15.8958 11.1965ZM10.8734 15.8394C9.65683 15.9067 8.39285 15.3698 8.33052 14.2197C8.28433 13.367 8.94772 12.4154 10.9481 12.3021C11.1772 12.2891 11.402 12.2828 11.6228 12.2828C12.3494 12.2828 13.0292 12.3522 13.6472 12.485C13.4167 15.3155 12.0646 15.775 10.8734 15.8394Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="currentColor"
                  >
                    <path d="M15.6479 13.2605L16.1857 9.61081H12.8238V7.24241C12.8238 6.24392 13.2934 5.27064 14.7991 5.27064H16.3275V2.16331C16.3275 2.16331 14.9405 1.91675 13.6144 1.91675C10.8458 1.91675 9.03605 3.66479 9.03605 6.82923V9.61081H5.9585V13.2605H9.03605V22.0834H12.8238V13.2605H15.6479Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label="YouTube"
                >
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="currentColor"
                  >
                    <path d="M20.1377 6.97438C20.0568 6.65757 19.9017 6.36456 19.6851 6.1195C19.4686 5.87445 19.1969 5.68439 18.8925 5.565C15.9465 4.42719 11.2578 4.4375 11 4.4375C10.7422 4.4375 6.05344 4.42719 3.1075 5.565C2.80308 5.68439 2.5314 5.87445 2.3149 6.1195C2.09839 6.36456 1.94324 6.65757 1.86226 6.97438C1.63969 7.83204 1.375 9.39954 1.375 12C1.375 14.6005 1.63969 16.168 1.86226 17.0256C1.94312 17.3426 2.0982 17.6358 2.31472 17.881C2.53125 18.1262 2.80298 18.3164 3.1075 18.4358C5.92969 19.5247 10.3469 19.5625 10.9433 19.5625H11.0567C11.6531 19.5625 16.0729 19.5247 18.8925 18.4358C19.197 18.3164 19.4687 18.1262 19.6852 17.881C19.9018 17.6358 20.0569 17.3426 20.1377 17.0256C20.3604 16.1663 20.625 14.6005 20.625 12C20.625 9.39954 20.3604 7.83204 20.1377 6.97438ZM13.8007 12.5604L10.3632 14.9666C10.2603 15.0386 10.1398 15.0811 10.0145 15.0894C9.88928 15.0978 9.76406 15.0718 9.65259 15.014C9.54113 14.9563 9.44753 14.8691 9.38208 14.7619C9.31663 14.6549 9.2818 14.5318 9.28125 14.4063V9.59375C9.28125 9.46799 9.31581 9.34464 9.38107 9.23714C9.44634 9.12964 9.53984 9.04209 9.65149 8.98405C9.76305 8.92601 9.88836 8.89968 10.0139 8.90793C10.1393 8.91619 10.2602 8.9587 10.3632 9.03086L13.8007 11.4371C13.8912 11.5005 13.965 11.5848 14.0159 11.6827C14.0669 11.7807 14.0935 11.8895 14.0935 12C14.0935 12.1105 14.0669 12.2193 14.0159 12.3173C13.965 12.4153 13.8912 12.4995 13.8007 12.5629V12.5604Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label="Pinterest"
                >
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="currentColor"
                  >
                    <path d="M21.0829 12.2205C21.0461 17.6974 16.5786 22.1807 11.1028 22.2349C10.2556 22.2438 9.4107 22.1461 8.58787 21.9441C8.53837 21.9317 8.4918 21.9097 8.45082 21.8794C8.40983 21.8489 8.37525 21.8108 8.34904 21.767C8.32283 21.7233 8.30551 21.6748 8.29808 21.6243C8.29066 21.5738 8.29326 21.5223 8.30574 21.4729L9.1434 18.1231C9.96043 18.5326 10.8617 18.7457 11.7756 18.7456C15.3628 18.7456 18.2422 15.5024 17.9621 11.633C17.8861 10.6286 17.5937 9.65262 17.1049 8.77197C16.6161 7.89132 15.9426 7.12688 15.1305 6.53111C14.3184 5.93535 13.387 5.52237 12.4003 5.32054C11.4135 5.11871 10.3948 5.1328 9.41409 5.36185C8.4333 5.59089 7.5137 6.02947 6.71841 6.64747C5.92312 7.26547 5.27097 8.04826 4.80674 8.94209C4.34252 9.83592 4.07721 10.8196 4.02901 11.8256C3.98082 12.8317 4.1509 13.8363 4.52755 14.7704C4.56669 14.8679 4.6252 14.9563 4.69954 15.0305C4.77389 15.1047 4.86251 15.163 4.96006 15.2018C5.0576 15.2408 5.16203 15.2594 5.26699 15.2567C5.37197 15.2541 5.47532 15.2301 5.57075 15.1863C5.75277 15.0981 5.89426 14.9437 5.96633 14.7547C6.0384 14.5657 6.03562 14.3563 5.95855 14.1693C5.66867 13.4423 5.53937 12.6612 5.57953 11.8796C5.61968 11.098 5.82834 10.3343 6.1912 9.64084C6.55406 8.94739 7.06254 8.34059 7.68181 7.86202C8.30107 7.38345 9.01647 7.04442 9.77902 6.86818C10.5415 6.69193 11.3331 6.68262 12.0996 6.84089C12.8661 6.99916 13.5892 7.32128 14.2195 7.78515C14.8499 8.24902 15.3725 8.8437 15.7516 9.52842C16.1306 10.2131 16.3572 10.9718 16.4157 11.7522C16.6232 14.7122 14.4641 17.1943 11.7756 17.1943C10.985 17.1939 10.2094 16.978 9.53216 16.5699L10.9767 10.7894C11.0227 10.5913 10.9889 10.383 10.8828 10.2095C10.7767 10.036 10.6066 9.91109 10.4093 9.86175C10.212 9.81242 10.0031 9.84258 9.82788 9.94574C9.65252 10.0489 9.52474 10.2168 9.47203 10.4132L6.86796 20.8311C6.85382 20.8878 6.82704 20.9406 6.78961 20.9855C6.7522 21.0304 6.70511 21.0663 6.65187 21.0904C6.59863 21.1146 6.54061 21.1264 6.48217 21.125C6.42373 21.1235 6.36636 21.1089 6.31437 21.0821C4.66952 20.219 3.29508 18.9183 2.34267 17.3234C1.39027 15.7285 0.896936 13.9015 0.917098 12.044C0.97527 6.57966 5.44181 2.11973 10.903 2.06932C12.241 2.05642 13.5682 2.30996 14.8072 2.81518C16.0462 3.32039 17.1723 4.06716 18.1198 5.01198C19.0672 5.9568 19.8172 7.08076 20.3259 8.31835C20.8347 9.55594 21.092 10.8824 21.0829 12.2205Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="currentColor"
                  >
                    <path d="M18.8425 1.91675H3.15724C1.91924 1.91675 0.916504 2.91948 0.916504 4.15748V19.8427C0.916504 21.0807 1.91924 22.0834 3.15724 22.0834H18.8425C20.0804 22.0834 21.0832 21.0807 21.0832 19.8427V4.15748C21.0832 2.91948 20.0804 1.91675 18.8425 1.91675ZM6.22482 17.6019C5.44392 17.6019 4.81091 16.969 4.81091 16.1881V11.1721C4.81203 10.3923 5.44504 9.75935 6.22482 9.75935C7.00572 9.75935 7.63872 10.3923 7.63872 11.1732V16.1892C7.63872 16.969 7.00572 17.6019 6.22482 17.6019ZM6.17552 8.3219C5.31172 8.3219 4.73472 7.74603 4.73472 6.97746C4.73472 6.20888 5.3106 5.63302 6.27075 5.63302C7.13456 5.63302 7.71155 6.20888 7.71155 6.97746C7.71155 7.74603 7.13568 8.3219 6.17552 8.3219ZM16.3541 17.6019C15.5989 17.6019 14.9861 16.9891 14.9861 16.234V13.3154C14.9861 12.1301 14.2568 12.0001 13.9834 12.0001C13.7101 12.0001 12.7981 12.0393 12.7981 13.3154V16.234C12.7981 16.9891 12.1852 17.6019 11.43 17.6019H11.3393C10.5842 17.6019 9.97134 16.9891 9.97134 16.234V11.1732C9.97134 10.3923 10.6044 9.75935 11.3852 9.75935C12.1661 9.75935 12.7992 10.3923 12.7992 11.1732C12.7992 11.1732 13.1151 9.75935 15.2617 9.75935C16.6274 9.75935 17.722 10.854 17.722 13.3154V16.234C17.722 16.9891 17.1092 17.6019 16.3541 17.6019Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="font-sans text-xs text-white">
              © 2025 Genius Downloader
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
