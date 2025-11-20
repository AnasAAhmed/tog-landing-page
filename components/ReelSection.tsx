import Image from "next/image";

const ReelSection = () => {
  return (
    <section className="relative bg-orange-600 bg-[url('/images/reel-section.png')] bg-no-repeat bg-cover w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/reel-section.png"
          alt="Any Platform Any video"
          fill
          priority
          className="object-cover object-center"
        />
      </div> */}

      {/* Main Content */}
      <div className="flex flex-col gap-8 items-center px-4 sm:px-8 lg:px-12 pt-24 pb-16">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold">
            Any Platform, Any Quality
          </h1>
          <p className="text-sm sm:text-lg mt-2 font-light">
            YouTube, Instagram, TikTok... Get the highest resolution media instantly.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">

          {/* Left Column */}
          <div className="grid grid-rows-2 gap-4">
            <Image
              src="/images/Reel.png"
              alt="Any Platform Any video"
              width={350}
              height={350}
              className="w-full h-auto object-cover rounded-lg"
            />
            <Image
              src="/images/reel4.png"
              alt="Any Platform Any video"
              width={350}
              height={350}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/reel2.png"
              alt="Any Platform Any video"
              width={450}
              height={450}
              className="w-full h-auto object-cover rounded-lg"
            />
            <Image
              src="/images/reel5.png"
              alt="Any Platform Any video"
              width={450}
              height={450}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-4">
            <Image
              src="/images/reel3.png"
              alt="Any Platform Any video"
              width={380}
              height={380}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReelSection;
