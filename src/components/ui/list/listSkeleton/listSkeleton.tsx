export interface ListSkeleton {
    /**
     *  Count of the skeleton list items
     * */
    count: number;
}

export const ListSkeleton = (props: ListSkeleton) => {
    return (

        <div role="status" className="space-y-4 rounded animate-pulse dark:divide-gray-700 md:p-6">
            {Array(props.count).fill(0).map((e, index) => <div className="flex items-center justify-between bg-red-300 p-2 rounded-md shadow-sm" key={index}>
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>)}
            <span className="sr-only">Loading...</span>
        </div>

    );
}