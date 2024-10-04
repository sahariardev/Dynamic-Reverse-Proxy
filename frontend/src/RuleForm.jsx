import {useState} from "react";

const RuleForm =  () => {

    const [rules, setRules] = useState([{url: '', host: ''}]);
    const [featureName, setFeatureName] = useState('');

    const addNewRule = () => {
        setRules([...rules, {url: '', host: ''}]);
    }

    const removeRule = (index) => {
        let data = [...rules];
        data.splice(index, 1);
        setRules(data);
    }
    const updateValue = (index, event) => {
        const newRules = [...rules];
        newRules[index][event.target.name] = event.target.value;

        setRules(newRules);
    }

    const generateRulesSection = () => {
        return (
            <div className="ruleContainer w-full">
                {
                    rules.map((rule, index) => ruleFormSection(rule, index))
                }
            </div>
        )
    }
    const ruleFormSection = (rule, index) => {
        return (
            <div className="flex flex-wrap" key={index} draggable>
                <div className="p-2 w-1/4">
                    <div className="relative">
                        <input type="text" id="url" name="url"
                               placeholder="URL Matcher"
                               value={rule.url}
                               onChange={(e) => updateValue(index, e)}
                               className="w-full bg-gray-100 bg-opacity-50 rounded
                                           border border-gray-300 focus:border-indigo-500 focus:bg-white
                                           focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700
                                           py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className="p-2 w-2/4">
                    <div className="relative">
                        <input type="text" id="host" name="host"
                               placeholder="Host"
                               value={rule.host}
                               onChange={(e) => updateValue(index, e)}
                               className="w-full bg-gray-100 bg-opacity-50
                                           rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2
                                           focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3
                                           leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className="p-2 w-1/4">
                    <div className="relative">
                        <button
                            onClick={(e) => removeRule(index)}
                            className="flex mx-auto text-white bg-indigo-500 border-0 py-2
                                 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Remove
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-2/4">
            <div className="">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-full">
                        <div className="relative">
                            <input type="text" id="featurName" name="featurName"
                                   placeholder="Feature Name"
                                   value={featureName}
                                   onChange={(e) => setFeatureName(e.target.value)}
                                   className="w-full bg-gray-100 bg-opacity-50 rounded
                                           border border-gray-300 focus:border-indigo-500 focus:bg-white
                                           focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700
                                           py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                    </div>

                    {generateRulesSection()}

                    <div className="p-2 w-0.5/4">
                        <button
                            onClick={(e) => addNewRule()}
                            className="flex text-white bg-indigo-500 border-0 py-2
                                 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Rule
                        </button>
                    </div>

                    <div className="p-2 w-0.5/4">
                        <button className="flex text-white bg-indigo-500 border-0 py-2
                                 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RuleForm;