import { useEffect } from "react";

const KakaoMap = () => {
    
    useEffect(() => {
        const mapScript = document.createElement('script');

        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&autoload=false`;

        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');
                const mapOption = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3, // 지도의 확대 레벨
                };
                new window.kakao.maps.Map(mapContainer, mapOption);
            });
        };
        mapScript.addEventListener('load', onLoadKakaoMap);
    }, []);

    return (
        <div>
            <div id="map" className="h-[31.125rem] sm:h-[27.625rem] md:h-[24.875rem] rounded-lg"></div>
        </div>
    )
}

export default KakaoMap
