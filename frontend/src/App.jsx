import RuleForm from "./RuleForm.jsx";
import RuleList from "./RuleList.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RuleList/>}/>
                <Route path="/form" element={<RuleForm/>}/>
            </Routes>
        </Router>
    );
}

export default App
