import React from "react";
import blog1 from "../../../images/blogs/blog1.jpg";
import blog2 from "../../../images/blogs/blog2.jpg";
import blog3 from "../../../images/blogs/blog3.jpg";
const BlogPost = () => {
  return (
    <div className="blog-post">
      <div className="container">
        <div className="section-title">
          <h2>Blog Post</h2>
          <h3>Our Regular Blogs</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
            vel consequatur tempora atque blanditiis exercitationem incidunt,
            alias corporis quam assumenda dicta.
          </p>
        </div>
        <div className="row row-blog">
          <div className="single-blog">
            <div className="blog-img">
              <img src={blog1} alt="blog-img" />
            </div>
            <div className="content ">
              <ul className="ul-blog">
                <li className="li-blog">10 April 2020</li>
                <li className="li-blog">
                  <a href="/">By Admin</a>
                </li>
              </ul>
              <a href="/blog">
                <h3>Joe’s Company Software Development Case</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas in fugit minima modi perspiciatis nam aspernatur porro
              </p>
              <a className="line-btn" href="/info">
                Read More
              </a>
            </div>
          </div>
          <div className="single-blog">
            <div className="blog-img">
              <img src={blog2} alt="blog-img" />
            </div>
            <div className="content ">
              <ul className="ul-blog">
                <li className="li-blog">10 April 2020</li>
                <li className="li-blog">
                  <a href="/">By Admin</a>
                </li>
              </ul>
              <a href="/blog">
                <h3>Joe’s Company Software Development Case</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas in fugit minima modi perspiciatis nam aspernatur porro
              </p>
              <a className="line-btn" href="/info">
                Read More
              </a>
            </div>
          </div>
          <div className="single-blog">
            <div className="blog-img">
              <img src={blog3} alt="blog-img" />
            </div>
            <div className="content ">
              <ul className="ul-blog">
                <li className="li-blog">10 April 2020</li>
                <li className="li-blog">
                  <a href="/">By Admin</a>
                </li>
              </ul>
              <a href="/blog">
                <h3>Joe’s Company Software Development Case</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas in fugit minima modi perspiciatis nam aspernatur porro
              </p>
              <a className="line-btn" href="/info">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPost;
