'use client';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TiltedCard from '../components/TiltedCard/TiltedCard';
import BlurText from "../components/BlurText/BlurText";

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

export default function Collection() {
    return (
        <div>
            <Navbar />
            <div className="pt-[150px] text-black flex justify-center font-bold px-4 md:px-0 ">
                <BlurText
                    text="All Our Catalog Collections"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-[45px] mb-8"
                />
            </div>
            <div className="flex justify-center pt-[60px] animate-fadeIn pb-[100px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    <div className="max-w-[3000px]">
                        <TiltedCard
                            imageSrc="/assets/c1.jpeg"
                            altText="Tshirt Kissing Attitude white"
                            captionText="Tshirt Kissing Attitude white"
                            containerHeight="250px"
                            containerWidth="250px"
                            imageHeight="250px"
                            imageWidth="250px"
                            rotateAmplitude={25}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text font-bold text-center">
                                    Tshirt Kissing Attitude white
                                </p>
                            }
                        />
                        <div className="pt-5">
                            <p className="font-bold text-[#ff0000]">Rp.130.000</p>
                            <p><span className="font-bold">Bahan: </span> Cotton Combed 24s</p>
                            <p><span className="font-bold">Tersedia ukuran: </span>S / M / L / XL</p>
                        </div>
                    </div>
                    <div className="max-w-[300px]">
                        <TiltedCard
                            imageSrc="/assets/c2.jpeg"
                            altText="Tshirt Guardian of Souls black"
                            captionText="Tshirt Guardian of Souls black"
                            containerHeight="250px"
                            containerWidth="250px"
                            imageHeight="250px"
                            imageWidth="250px"
                            rotateAmplitude={25}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text font-bold text-center">
                                    Tshirt Guardian of Souls black
                                </p>
                            }
                        />
                        <div className="pt-5">
                            <p className="font-bold text-[#ff0000]">Rp.130.000</p>
                            <p><span className="font-bold">Bahan: </span> Cotton Combed 24s</p>
                            <p><span className="font-bold">Tersedia ukuran: </span>S / M / L / XL</p>
                        </div>
                    </div>
                    <div className="max-w-[300px]">
                        <TiltedCard
                            imageSrc="/assets/c3.jpeg"
                            altText="Tshirt Wild Soul red"
                            captionText="Tshirt Wild Soul red"
                            containerHeight="250px"
                            containerWidth="250px"
                            imageHeight="250px"
                            imageWidth="250px"
                            rotateAmplitude={25}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text font-bold text-center">
                                    Tshirt Wild Soul red
                                </p>
                            }
                        />
                        <div className="pt-5">
                            <p className="font-bold text-[#ff0000]">Rp.130.000</p>
                            <p><span className="font-bold">Bahan: </span> Cotton Combed 24s</p>
                            <p><span className="font-bold">Tersedia ukuran: </span>S / M / L / XL</p>
                        </div>
                    </div>
                    <div className="max-w-[300px]">
                        <TiltedCard
                            imageSrc="/assets/c4.jpeg"
                            altText="Tshirt Doomsday Rider white"
                            captionText="Tshirt Doomsday Rider white"
                            containerHeight="250px"
                            containerWidth="250px"
                            imageHeight="250px"
                            imageWidth="250px"
                            rotateAmplitude={25}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text font-bold text-center">
                                    Tshirt Doomsday Rider white
                                </p>
                            }
                        />
                        <div className="pt-5">
                            <p className="font-bold text-[#ff0000]">Rp.130.000</p>
                            <p><span className="font-bold">Bahan: </span> Cotton Combed 24s</p>
                            <p><span className="font-bold">Tersedia ukuran: </span>S / M / L / XL</p>
                        </div>
                    </div>
                    <div className="max-w-[300px] pt-[40px]">
                        <TiltedCard
                            imageSrc="/assets/c5.JPEG"
                            altText="Tshirt Doomsday Rider white"
                            captionText="Tshirt Doomsday Rider white"
                            containerHeight="250px"
                            containerWidth="250px"
                            imageHeight="250px"
                            imageWidth="250px"
                            rotateAmplitude={25}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text font-bold text-center">
                                    Tshirt Doomsday Rider white
                                </p>
                            }
                        />
                        <div className="pt-5">
                            <p className="font-bold text-[#ff0000]">Rp.130.000</p>
                            <p><span className="font-bold">Bahan: </span> Cotton Combed 24s</p>
                            <p><span className="font-bold">Tersedia ukuran: </span>S / M / L / XL</p>
                        </div>
                    </div>
                    <div className="max-w-[300px] pt-[40px]">
                        <TiltedCard
                            imageSrc="/assets/c6.JPEG"
                            altText="Tshirt Doomsday Rider white"
                            captionText="Tshirt Doomsday Rider white"
                            containerHeight="250px"
                            containerWidth="250px"
                            imageHeight="250px"
                            imageWidth="250px"
                            rotateAmplitude={25}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text font-bold text-center">
                                    Tshirt Doomsday Rider white
                                </p>
                            }
                        />
                        <div className="pt-5">
                            <p className="font-bold text-[#ff0000]">Rp.130.000</p>
                            <p><span className="font-bold">Bahan: </span> Cotton Combed 24s</p>
                            <p><span className="font-bold">Tersedia ukuran: </span>S / M / L / XL</p>
                        </div>
                    </div>
                    <div className="max-w-[300px] pt-[40px]">
                        <TiltedCard
                            imageSrc="/assets/comingsoon.svg"
                            altText="Comingsoon"
                            captionText="Comingsoon"
                            containerHeight="250px"
                            containerWidth="250px"
                            imageHeight="250px"
                            imageWidth="250px"
                            rotateAmplitude={25}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text font-bold text-center">

                                </p>
                            }
                        />
                        <div className="pt-5">
                            <p className="font-bold text-center">ComingSoon</p>
                        </div>
                    </div>
                    <div className="max-w-[300px] pt-[40px]">
                        <TiltedCard
                            imageSrc="/assets/comingsoon.svg"
                            altText="Comingsoon"
                            captionText="Comingsoon"
                            containerHeight="250px"
                            containerWidth="250px"
                            imageHeight="250px"
                            imageWidth="250px"
                            rotateAmplitude={25}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="tilted-card-demo-text font-bold text-center">

                                </p>
                            }
                        />
                        <div className="pt-5">
                            <p className="font-bold text-center">ComingSoon</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
