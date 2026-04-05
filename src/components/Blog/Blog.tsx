import BlogCardGroup from "./Components/BlogCardGroup";
import BlogCard from "./Components/BlogCard";
import BlogHeader from "./Components/BlogHeader";
import { blogPosts} from "../../data/blogs.ts";

export default function Blog() {
    return (
    <>
      <BlogHeader />
      <div>
        <BlogCardGroup>
            {
                blogPosts.map((blog,i) => (
                <BlogCard
                    index={i + 1}
                    title={blog.title}
                    link={blog.link}
                    description={blog.description}
                    img={blog.img}
                />
                ))
            }
        </BlogCardGroup>
      </div>
    </>
  );
}
