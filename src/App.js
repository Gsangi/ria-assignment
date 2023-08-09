import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./containers/Home"
import PokemonDirectory from "./containers/PokemonDirectory";
import NoMatchPage from "./containers/NoMatchPage";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<><Header/><Home/></>}/>
                <Route path="/Home" element={<><Header/><PokemonDirectory/></>}/>
                <Route path="/PokemonDirectory" element={<><Header/><PokemonDirectory/></>}/>
                <Route path="*" element={<NoMatchPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
