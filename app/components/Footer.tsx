import Image from 'next/image';
import instagram from '@/public/assets/instagram.svg';
import tiktok from '@/public/assets/tiktok.svg';
import gmail from '@/public/assets/gmail.svg';

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-center py-6 animate-fadeIn">
            <p className="text-sm text-gray-600">Thanks For Visiting</p>
            <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} JACKDULS. All rights reserved.
            </p>
            <div className='flex justify-center items-center mt-[5px]'>
                <a href="https://www.instagram.com/zakyprmbda/" target="_blank" rel="noopener noreferrer">
                    <Image
                        className='m-2 transition-all duration-300 transform hover:scale-110 hover:opacity-60 hover:filter hover:brightness-125'
                        src={instagram}
                        alt="Instagram"
                        width={27}
                        height={27}
                    />
                </a>
                <a href="https://www.tiktok.com/@jackduls.official" target="_blank" rel="noopener noreferrer">
                    <Image
                        className='m-2 transition-all duration-300 transform hover:scale-110 hover:opacity-60 hover:filter hover:brightness-125'
                        src={tiktok}
                        alt="TikTok"
                        width={27}
                        height={27}
                    />
                </a>
                <a href="/contact#contact" target="_blank" rel="noopener noreferrer">
                    <Image
                        className='m-2 transition-all duration-300 transform hover:scale-110 hover:opacity-60 hover:filter hover:brightness-125'
                        src={gmail}
                        alt="Gmail"
                        width={27}
                        height={27}
                    />
                </a>
            </div>
        </footer>
    );
}
