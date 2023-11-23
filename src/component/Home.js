import { useEffect, useRef, useState } from "react";
import KakaoMapMain from './KakaoMapMain';

const Home = () => {

    const search = useRef();
    const [data, setData] = useState();

    useEffect(() => {

        search.current.focus();

    }, [])

    const handleClick = async (e) => {

        e.preventDefault();
        window.location.href = `/test1/${search.current.value}`;
    }

    return (
        <div>
            <div className="flex flex-col">
                <div>
                    <form className="flex flex-col sm:flex-row justify-center items-center">
                        <div className="w-auto sm:w-[15rem] mx-2">
                            <input ref={search} type="text" id="search" name="search" placeholder="장소를 검색하세요." />
                        </div>
                        <div className="mx-2 mb-3.5">
                            <button className="p-1 px-2 bg-blue-500 hover:bg-blue-600 font-bold text-sm text-blue-300 hover:text-white" onClick={handleClick}>검색</button>
                        </div>
                    </form>
                </div>
                <div>
                    <KakaoMapMain />
                </div>
            </div>
        </div>
    );
}

export default Home
