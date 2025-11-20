import Image from 'next/image'

const ReelSection = () => {
    return (
        <section className="min-h-dfull aspect-video relative">
            {/* bg-mage */}
            <Image
                src={'/images/reel-section.png'}
                alt="Any Platform Any video"
                fill
                style={{ objectFit: 'cover' }}
                className="-z-10"
            />

            {/* Main Content */}
            <div className="flex flex-col gap-6 items-center pt-24">
                <div className="font-(--font-Adieu) text-center flex flex-col items-center ">
                    <h1 className='text-3xl sm:text-6xl'>Any Platform, Any Quality</h1>
                    <p className='text-sm sm:text-lg font-thin'>YouTube, Instagram, TikTok... Get the highest resolution media instantly.</p>
                </div>
                <div className="grid grid-cols-3  gap-4">
                    <div className="d  gap-4">
                        <Image
                            src={'/images/Reel.png'}
                            alt="Any Platform Any video"
                            width={350}
                            height={350}
                            style={{ objectFit: 'cover' }}
                            className="col-span-1 row-span-2"
                        />

                        <Image
                            src={'/images/reel4.png'}
                            alt="Any Platform Any video"
                            width={350}
                            height={350}
                            style={{ objectFit: 'cover' }}
                            className="col-span-1"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Image
                            src={'/images/reel2.png'}
                            alt="Any Platform Any video"
                            width={450}
                            height={450}
                            style={{ objectFit: 'cover' }}
                            className="col-span-1 row-span-3"
                        />
                        <Image
                            src={'/images/reel5.png'}
                            alt="Any Platform Any video"
                            width={450}
                            height={450}
                            style={{ objectFit: 'cover' }}
                            className="col-span-1 "
                        />  </div>
                    <div className=" gap-4">
                        <Image
                            src={'/images/reel3.png'}
                            alt="Any Platform Any video"
                            width={380}
                            height={380}
                            style={{ objectFit: 'cover' }}
                            className="col-span-1 row-span-2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReelSection
