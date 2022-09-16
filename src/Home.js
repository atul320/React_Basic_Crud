import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div><h1>Loading...</h1></div>}
            {blogs && <BlogList blogs={blogs} title="All blog posts" />}
        </div>
    );
};

export default Home;
