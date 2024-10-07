import {useRuleStore} from "./hooks/useRuleStore.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {addNewConfigUrl, allConfigUrl, deleteConfigUrl, selectConfigUrl} from "./config.js";
import config from "tailwindcss/defaultConfig.js";

const RuleList = () => {
    const {setDefaultForRule, updateSelectedRule} = useRuleStore();
    const navigate = useNavigate();

    const [configs, setConfigs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(allConfigUrl);
                const data = await response.json();
                console.log(data);
                setConfigs(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching items:', error);
                setLoading(false);
            }
        };

        fetchItems();
    }, []);


    const addNew = () => {
        setDefaultForRule();
        navigate('/form');
    }

    const deleteConfig = async (featureName) => {
        try {
            const response = await fetch(deleteConfigUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({featureName: featureName}),
            });

            const result = await response.json();
            console.log('Server response:', result);

            setConfigs(configs.filter(config => config.featureName !== featureName));

        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    const selectRule = async (featureName) => {
        try {
            const response = await fetch(selectConfigUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({featureName: featureName}),
            });

            const result = await response.json();

            console.log('Server response:', result);
            window.location.href = result.message;

        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    const renderConfig = (config, index) => {
        return (
            <tr key={index}>
                <td className="px-4 py-3">{config.featureName}</td>
                <td className="px-4 py-3">
                    <div className="flex flex-wrap">
                        <button
                            onClick={() => {
                                updateSelectedRule(config);
                                navigate('/form');
                            }}
                            className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Edit
                        </button>
                        <button
                            onClick={() => {
                                deleteConfig(config.featureName);
                            }}
                            className="flex ml-[10px] text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Delete
                        </button>
                        <button
                            onClick={() => {
                                selectRule(config.featureName);
                            }}
                            className="flex ml-[10px] text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Select
                        </button>
                    </div>
                </td>
            </tr>
        );
    }

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
                <div className="px-5 py-24 w-full">
                    <div className="w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Feature Name</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 w-[400px]">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                             {configs.map((config, index) => renderConfig(config, index))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex mt-4 w-full mx-auto">
                        <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => addNew()}>Add New</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RuleList;