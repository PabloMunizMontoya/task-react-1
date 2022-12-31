/* in this section all the items are rendered */

import Layout from "./layouts/Layouts";
import Carousel from './components/Carousel/Carousel';
import Main from './components/Main/Main'

function App() {
    return (
        
            <Layout>
                <Main/>
                <Carousel/>
            </Layout>
            
        
    );
}

export default App;
