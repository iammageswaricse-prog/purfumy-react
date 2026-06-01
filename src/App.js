
import Navbar from './components/navbar';
import Search from './components/search';
import Products from './components/product';
import About from './components/about';
import Footer from './components/footer';



function App(){
    return(
        <>
            <Navbar></Navbar>
            <Search></Search>
            <Products></Products>
            <About></About>
            <Footer></Footer>
        </>
    )
}
export default App;