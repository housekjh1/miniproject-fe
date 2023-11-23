import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import KakaoMapDetail from './KakaoMapDetail';
import KakaoMapError from "./KakaoMapError";

const Test1 = () => {
    const area = useParams().area;
    const search = useRef();
    const [data, setData] = useState();
    const [mapTag, setMapTag] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}api/test/${area}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem("jwt")
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const datas = await response.json();
                setData(datas);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (data && data.length > 0) {
                clearInterval(intervalId);
                setMapTag(<KakaoMapDetail data={data} />);
            } else {
                clearInterval(intervalId);
                setMapTag(<KakaoMapError />);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [data]);

    const handleClick = async (e) => {
        e.preventDefault();
        window.location.href = `/test1/${search.current.value}`;
    }

    return (
        <div>
            <div className="flex flex-col">
                <div>
                    <form className="flex flex-col md:flex-row justify-center items-center">
                        <div className="w-auto md:w-[15rem] mx-2">
                            <input ref={search} type="text" id="search" name="search" placeholder="장소를 검색하세요." defaultValue={area && area} />
                        </div>
                        <div className="mx-2 mb-3.5">
                            <button className="p-1 px-2 bg-blue-500 hover:bg-blue-600 font-bold text-sm text-blue-300 hover:text-white" onClick={handleClick}>검색</button>
                        </div>
                    </form>
                </div>
                <div>
                    {mapTag}
                </div>
            </div>
        </div>
    );
}

export default Test1;
