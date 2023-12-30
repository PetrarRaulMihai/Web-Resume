import { Link } from "react-router-dom";
import me from "../Images/me.png";
function General() {
  return (
    <div className="flex flex-col gap-4 px-10">
      <img className="rounded" src={me}></img>
      <div className="filter rounded p-3">
        <p>
          " Hey there! If you are wondering who am I ..., well I'm a
          thrill-seeking adventurer with a deep love for{" "}
          <Link to="moto" className="font-bold continuous-color-change">
            motorcycles
          </Link>{" "}
          and the freedom of the open road. I find solace in{" "}
          <Link to="hiking" className="font-bold continuous-color-change">
            hiking
          </Link>{" "}
          and pushing my limits while exploring nature's wonders. Sports are my
          source of peace, and also I enjoy the rush of competition and the
          discipline it brings.
        </p>
        <p>
          But I'm not just about physical pursuits. I'm also a lifelong learner.
          Coding has become my passion, as it allows me to constantly challenge
          myself and dive into the ever-changing world of technology. Oh, and
          I'm a big fan of{" "}
          <Link to="travel" className="font-bold continuous-color-change">
            traveling
          </Link>{" "}
          too—I can't resist immersing myself in different cultures and
          exploring new environments.
        </p>
        <p>
          When I'm not out and about, you might find me engrossed in a good
          book. Reading offers me a moment of tranquility and a chance to expand
          my horizons. But what truly excites me is engaging in quality
          conversations, that delve into a wide range of topics—from philosophy
          to current events.
        </p>
        <p>
          So, that's a bit about me. I'm Raul—the road warrior, the nature
          enthusiast, the sports lover, the code aficionado, the avid traveler,
          and the occasional bookworm. I embrace life's adventures, seek
          personal growth, and cherish meaningful connections with others. "
        </p>
      </div>
    </div>
  );
}

export default General;
