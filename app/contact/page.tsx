'use client';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FallingText from '../components/FallingText/FallingText';
import BlurText from "../components/BlurText/BlurText";

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

export default function Contact() {
    const hoverIntensity = 0.15;
    return (
        <div >
            <Navbar />
            <div className="flex flex-col justify-center items-center animate-fadeIn pt-[150px] text-black px-4 md:px-0">
                <BlurText
                    text="Kami di sini jika Anda membutuhkan kami"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-[24px] sm:text-[37px] mb-8 font-bold text-center"
                />
                <p className="max-w-[900px] text-center pb-[10px] px-4">Kami senang mendengar dari Anda! Apakah Anda memiliki pertanyaan tentang koleksi kami, membutuhkan bantuan dengan pesanan, atau ingin memberikan umpan balik? Tim kami siap membantu.</p>
            </div>

            {/* Contact Info Section */}
            <div className="contact-section pt-[80px] animate-fadeIn justify-center items-center flex flex-wrap gap-8 px-4 md:px-0">
                <div className="info-card text-center max-w-[300px] w-full p-4">
                    <h3 className="text-lg font-bold pb-[10px]">Domisicile</h3>
                    <p>Surabaya</p>
                </div>
                <div className="border-l border-black h-full mx-4 hidden md:block"></div>
                <div className="info-card text-center max-w-[300px] w-full p-4">
                    <h3 className="text-lg font-bold pb-[10px]">Phone Number</h3>
                    <p className="break-words">+6285940487295</p>
                </div>
                <div className="border-l border-black h-full mx-4 hidden md:block"></div>
                <div className="info-card text-center max-w-[300px] w-full p-4">
                    <h3 className="text-lg font-bold pb-[10px]">Email</h3>
                    <p>jeckduls.gmail.com</p>
                </div>
            </div>

            {/* Contact Form Section */}
            <div id="contact" className="flex flex-col justify-center items-center pt-[80px] pb-[80px] animate-fadeIn px-4">
                <h1 className="text-[24px] sm:text-[37px] font-bold text-center text-black pb-[20px]">Kirim Pesan Kepada Kami</h1>
                <p className="pb-[40px]">Gunakan formulir di bawah ini untuk mengirimkan pesan kepada kami</p>

                <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
                    <form action="https://formspree.io/f/mjkrzdwn " method="POST">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                            <input
                                name="Email"
                                id="email"
                                type="email"
                                required
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={4}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 focus:outline-none font-bold"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Falling Text */}
            <FallingText
                text={`Nyaman menarik praktis elegan simpel efisien memukau keren berkelas memadai hebat menyenangkan berkualitas menarik menawan fungsional stylish modern elegan bersih luar biasa memadai istimewa mempesona keren inovatif trendy berkelas luar biasa dinamis hebat penuh warna sempurna terpercaya luar biasa memikat menarik.`}
                highlightWords={["elegan", "menarik", "menawan", "simpel", "efisien", "memukau", "keren", "trendy"]}
                highlightClass="highlighted"
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                fontSize="20px"
                mouseConstraintStiffness={0.1}
            />

            <Footer />
        </div>
    );
}