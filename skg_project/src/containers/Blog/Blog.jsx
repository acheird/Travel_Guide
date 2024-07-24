import "./blog.css";
import { Article } from "../../components";
import {
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
} from "../../assets";

const Blog = () => {
  return (
    <div className="app__blog section__padding" id="blog">
      <div className="app__blog-heading">
        <h2 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h2>
      </div>
      <div className="app__blog-container">
        <div className="app__blog-container_groupA">
          <Article
            imgUrl={article6}
            date="September 22, 2024"
            title="Thessaloniki International Film Festival!"
          />
          <Article
            imgUrl={article1}
            date="September 24, 2024"
            title="Festival Eptapyrgiou: Music, singing, opera and poetry!"
          />
        </div>
        <div className="app__blog-container_groupB">
          <Article
            imgUrl={article2}
            date="September 26, 2024"
            title="48 Hours in Thessaloniki: Louloudadika and Beyond"
          />
          <Article
            imgUrl={article3}
            date="September 27, 2024"
            title="From Olympus to Meteora: Day Trips from Thessaloniki"
          />
          <Article
            imgUrl={article4}
            date="September 28, 2024"
            title="Culinary Adventures: Thessaloniki’s Food Scene Unveiled"
          />
          <Article
            imgUrl={article5}
            date="September 29, 2024"
            title="Exploring Ancient Treasures: A Weekend Itinerary in Thessaloniki"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
