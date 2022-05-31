import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {
   const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'Marius', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Janina', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Pranas', id: 3 }
   ])
      return ( 
        <div className="home">
         <BlogList blogs={blogs} title="Visas sarasas"/>
            </div>
     );
}
 
export default Home;