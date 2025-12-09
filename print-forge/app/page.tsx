import Image from "next/image";
import HeroImage from "../public/hero-image-square.png"



export default function Home() {
  return (
    <main className="home-cont">
        <aside className="home-info-cont">
          <p className="top-txt">Your go-to platform for 3D printing files</p>
          <h1>Discover what’s possible with 3D printing</h1>
          <p className="btm-txt">Join our community of creators and explore a vast library of user-submitted models.</p>
          <button>Browse models</button>
        </aside>
        <Image src={HeroImage} alt="home image" className="home-img" />
    </main>
  )
}
