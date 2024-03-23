import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Post from "./Post";
function Page() {
    return (
        <main>
            <NavBar></NavBar>
            <Post imageUrl="https://via.placeholder.com/150" title="Post title" description="Description of your post/article" author="Panav Mhatre" />
            <Footer></Footer>
        </main>
    );
}

export default Page;