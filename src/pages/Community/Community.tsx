import React from "react";
import "./Community.css";


const posts = [
  {
    id: 1,
    user: "Rahul Sharma",
    avatar: "👨‍💻",
    title: "My Vintage Camera Collection",
    description:
      "Started collecting classic cameras. Added a rare 1980s film camera today!",
    likes: 120,
    comments: 24,
  },

  {
    id: 2,
    user: "Ananya Patel",
    avatar: "👩‍🎨",
    title: "Rare Coin Discovery",
    description:
      "Found an amazing antique coin from my grandfather's collection.",
    likes: 98,
    comments: 18,
  },

  {
    id: 3,
    user: "Arjun Kumar",
    avatar: "🧑‍🚀",
    title: "Collector Meetup",
    description:
      "Had an amazing meetup with collectors and shared our collections.",
    likes: 150,
    comments: 35,
  },
];



function Community() {


  return (

    <div className="community">


      {/* HERO */}

      <section className="community-hero">


        <span>
          🌎 Collector Community
        </span>


        <h1>
          Connect With Collectors
        </h1>


        <p>
          Share your collections, discover new items,
          and interact with passionate collectors.
        </p>


      </section>





      {/* CREATE POST */}

      <div className="create-post">


        <h2>
          Share Your Collection
        </h2>


        <textarea

          placeholder="Write something about your collection..."

        />


        <button>
          Create Post
        </button>


      </div>





      {/* POSTS */}

      <div className="posts-container">


        {
          posts.map((post)=>(


            <div 
              className="post-card"
              key={post.id}
            >


              <div className="post-user">


                <div className="avatar">

                  {post.avatar}

                </div>


                <div>

                  <h3>
                    {post.user}
                  </h3>

                  <small>
                    Collector
                  </small>

                </div>


              </div>





              <h2>
                {post.title}
              </h2>


              <p>
                {post.description}
              </p>





              <div className="post-actions">


                <button>
                  ❤️ {post.likes}
                </button>


                <button>
                  💬 {post.comments}
                </button>


                <button>
                  🔗 Share
                </button>


              </div>



            </div>


          ))
        }


      </div>


    </div>

  );

}


export default Community;