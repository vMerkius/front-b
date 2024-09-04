import BlogSidebar from "./blog-sidebar";
import blog_data from "../../data/blog-data";
import BlogItem from "./blog-item";
import BlogPagination from "./blog-pagination";

const BlogArea = () => {
  return (
    <section className="blog-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="blog-post-wrapper">
            {blog_data.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
            <div className="pagination__wrap">
              <BlogPagination />
            </div>
          </div>
          <div className="blog-post-sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
