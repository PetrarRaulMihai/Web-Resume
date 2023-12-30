import { Link } from "react-router-dom";
import hiking from "../Images/hiking.jpg";
// sub section
function Hiking() {
  return (
    <div className="flex flex-col gap-4 px-10">
      <Link to="/">Back</Link>
      <img className="rounded" src={hiking}></img>
      <div className="filter rounded p-3">
        <p>
          Hiking is not just a hobby for me; it's a profound passion that has
          woven itself into the very core of my being. The allure of hiking lies
          in its unique ability to combine physical challenge, a deep connection
          with nature, and the opportunity for personal growth. First and
          foremost, hiking provides a welcome escape from the frenetic pace of
          modern life. The tranquility of the great outdoors, the rustling of
          leaves, the chirping of birds, and the scent of pine needles in the
          crisp mountain air act as a soothing balm for my soul. It's a
          therapeutic experience that allows me to recharge, clear my mind, and
          find solace amidst the chaos of the world.
        </p>
        <p>
          Hiking isn't just about conquering mountains; it's about conquering
          personal limitations. The physical challenges it presents, from steep
          ascents to rugged terrain, demand endurance, strength, and unwavering
          determination. With each step I take, I push my boundaries, proving to
          myself that I can overcome obstacles and achieve what might seem
          insurmountable.
        </p>
      </div>
    </div>
  );
}

export default Hiking;
