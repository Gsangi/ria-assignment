import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./containers/Home"
import PokemonDirectory from "./containers/PokemonDirectory";
import NoMatchPage from "./containers/NoMatchPage";
import Header from "./components/Header";
import Legendary from "./containers/Legendary";
import {QueryClient, QueryClientProvider} from "react-query"

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<><Header/><Home/></>}/>
                    <Route path="/Home" element={<><Header/><PokemonDirectory/></>}/>
                    <Route path="/PokemonDirectory" element={<><Header/><PokemonDirectory/></>}/>
                    <Route path="/legendaries" element={<><Header/> <Legendary/></>}/>
                    <Route path="*" element={<NoMatchPage/>}/>
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
