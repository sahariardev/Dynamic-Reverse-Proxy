import {useState} from "react";
import RuleForm from "./RuleForm.jsx";
import RuleList from "./RuleList.jsx";

function App() {
    return (
        <div className="container mx-auto pt-24 w-full">
            <div>
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Config</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">If the user does not select any feature,
                        the feature named 'default' will be automatically used to handle the user's request. Rule Order decides the priority</p>
                </div>
            </div>
            <div className="mx-auto flex md:flex-row flex-col items-center">
                <RuleList/>
                <RuleForm/>
            </div>
        </div>

    );
}

export default App
