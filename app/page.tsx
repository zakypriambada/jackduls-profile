import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CircularGallery from './components/CircularGallery/CircularGallery';




export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-black animate-fadeIn ">
        <CircularGallery bend={3} textColor="black" borderRadius={0.10} />
      </div>
      <div className="flex flex-col justify-center items-center pt-6 pb-20 text-black px-4 md:px-0">
        <h1 className="text-[40px] font-extrabold text-center">JACKDULS</h1>
        <p className="max-w-[900px] text-center pt-[10px]">Tempat di mana gaya urban bertemu dengan kreativitas tanpa batas. Temukan koleksi t-shirt eksklusif kami, dirancang untuk mereka yang berani tampil beda di jalanan. Dengan kualitas bahan premium dan desain yang edgy, Jackduls hadir untuk mengekspresikan jiwa bebas dan attitude lewat fashion. Jelajahi katalog kami dan temukan gaya yang menonjol di setiap langkahmu.</p>
      </div>

      <Footer />
    </div>
  );
}
