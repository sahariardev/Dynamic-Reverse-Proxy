
const RuleList = () => {
    return (
        <div className="px-5 py-24 w-full">
            <div className="w-full mx-auto overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Rule Name</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 w-[400px]">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="px-4 py-3">default</td>
                        <td className="px-4 py-3">
                            <div className="flex flex-wrap">
                                <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Edit</button>
                                <button className="flex ml-[10px] text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Delete</button>
                                <button className="flex ml-[10px] text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Select</button>
                            </div>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex mt-4 w-full mx-auto">
                <button class="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add New</button>
            </div>
        </div>
    )
}

export default RuleList;