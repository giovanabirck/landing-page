import Image from "next/image";
import PrimaryButton from "@/ components/PrimaryButton";
import SecondaryButton from "@/ components/SecondaryButton";
import Spline from "@splinetool/react-spline";
import SubscribeButton from "@/ components/SubscribeButton";
import Link from "next/link";


export default function Home() {
  return (
    <main className={`flex flex-col`}>
      <header className="head">
        <Image
          src={`vanplan-logo.svg`}
          width={150}
          height={50}
          alt="logo"
        />
        <PrimaryButton content="Sign Up"/>
      </header>

      <div className="hero">
        <h1>VanPlan helps you to forecast your fun — rain or shine</h1>
        <div className="cta__container">
          <PrimaryButton content="Download Today"/>
          <SecondaryButton content="Learn More"/>
        </div>
        <div className="hero__spline">
          <Spline scene="https://prod.spline.design/TdVTYyVvgwA3f7D8/scene.splinecode" />
        </div>
      </div>

      <div className="divider"></div>

      <div className="why">
        <div>
          <h2>Why VanPlan?</h2>
          <p>
            Choosing VanPlan for your trip planning isn't just about picking an app, it's about 
            embracing an adventure that matches your needs. VanPlan stands out because it's 
            designed with the nomad spirit in mind: it offers a personalized, detailed 
            planning tools that cares about the experiences you crave along the way.
          </p>
        </div>
        <div className="why__spline">
          <Spline scene="https://prod.spline.design/QqEypw-OReM2U0MB/scene.splinecode" />
        </div>
      </div>

      <div className="pricing">
        <h2>Choose the right plan for you!</h2>
        <div className="spline__pricing">
          <Spline scene="https://prod.spline.design/cRL376KOEecC6kvD/scene.splinecode" />
        </div>
      </div>

      <div className="subscribe">
        <h2>Subscribe to Newsletter</h2>
        <div className="subscribe__input">
          <input type="text" placeholder="youremail@email.com"></input>
          <SubscribeButton content="Subscribe"/>
        </div>
      </div>

      <footer>
        <p>© Giovana Birck</p>
        <Link className="link" href="https://github.com/giovanabirck/landing-page">github.com/giovanabirck/landing-page</Link>
      </footer>

    </main>
  );
}
