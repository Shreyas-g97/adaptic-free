import Navbar from "./Navbar";
import useStore from "../results";

const Loading = () => {
    const query = useStore.useQueryStore(state => state.query);
    return (
        <>
            <Navbar sidebar={true}/>
            <div className="h-screen z-50 flex flex-col justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                <h2 className="text-2xl text-gray-900 mt-4">Retrieving relevant papers...</h2>
            </div>
        </>
    );
};

export default Loading;
