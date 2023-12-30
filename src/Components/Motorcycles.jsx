import { Link } from "react-router-dom";
import moto from "../Images/moto.png";
// sub section
function Motorcycles() {
  return (
    <div className="flex flex-col gap-4 px-10">
      <Link to="/">Back</Link>
      <img className="rounded" src={moto}></img>
      <div className="filter rounded p-3">
        <p>
          You know, when I was young, I spent so much time with my dad, helping
          him fix his old Dacia. Those moments taught me a lot about engines and
          mechanics. It was the perfect foundation for what was to come. Then,
          my dad bought me several bicycles, and I couldn't have been happier. I
          learned how to handle two wheels like a pro, cruising along beautiful
          roads with stunning views. Those were some unforgettable times.
        </p>
        <p>
          But let me tell you about a turning point. We were on a family
          holiday, driving on the highway, when suddenly, this gang of sports
          motorbikes zoomed past us like we were standing still. The sound of
          their exhausts gave me an adrenaline rush like never before. In that
          very moment, I knew I had to be part of that world. When I got my
          first job, you won't believe what I did. I bought a motorbike right
          away. It was a dream come true. But I wasn't about to ride without
          knowing what I was doing. That's when I enrolled in a Driving School
          to learn the ins and outs of riding safely and responsibly. And since
          then, my love for motorcycles has only grown stronger. Every day, I
          embrace the thrill of the ride, the freedom it gives me. From peaceful
          countryside roads to heart-pumping highway adventures, I've become one
          with my machine. It's an incredible feeling, you know? So, that's how
          it all started, and it's still going strong. My journey with
          motorcycles is an ever-evolving one. I'm always seeking new
          experiences, discovering new horizons. Riding brings me pure joy, and
          I can't wait to see where the road takes me next.
        </p>
      </div>
    </div>
  );
}

export default Motorcycles;
