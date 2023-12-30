import { Link } from "react-router-dom";
import egypt from "../Images/egypt.png";
// sub section
function Travel() {
  return (
    <div className="flex flex-col gap-4 px-10">
      <Link
        className="w-16 text-center rounded font-semibold filter hover:bg-gray-500"
        to="/"
      >
        Back
      </Link>
      <img className="rounded" src={egypt}></img>
      <div className="filter rounded p-3">
        {" "}
        <p>
          Traveling the world, for me, is not just a mere pastime or a fleeting
          interest; it is a profound passion that permeates every fiber of my
          being. It is a hobby that feeds my soul, expands my horizons, and
          nourishes my thirst for adventure. As I embark on journeys across
          continents, I discover the inherent beauty and diversity that this
          world has to offer, creating memories that will last a lifetime. To
          travel is to open the doors to a vast tapestry of cultures,
          traditions, and landscapes. It is an invitation to immerse oneself in
          unfamiliar surroundings, to wander through bustling city streets and
          traverse untrodden paths. Every step I take, every new destination I
          encounter, I am enriched with experiences that teach me valuable
          lessons about the world and its inhabitants
        </p>
        <p>
          In the grand scheme of life, our time on this planet is limited. Each
          passing moment is an opportunity to explore, to learn, and to grow.
          Traveling offers a gateway to self-discovery, unveiling facets of our
          own character that may have remained concealed within the confines of
          routine. It challenges us to adapt to unfamiliar situations, fostering
          resilience and broadening our perspective on life. Beyond personal
          growth, traveling facilitates connections with people from different
          walks of life. It serves as a catalyst for understanding and empathy,
          bridging cultural divides and highlighting our shared humanity.
        </p>
      </div>
    </div>
  );
}

export default Travel;
