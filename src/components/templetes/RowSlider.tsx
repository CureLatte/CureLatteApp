import SliderArrow from "@/components/organisms/SliderArrow";
import {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";

export default function RowSlider({contentList}:any){

    const [allCnt, setAllCnt] = useState(contentList.length);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 0, //  Intersection Observer의 옵션, 0일 때는 교차점이 한 번만 발생해도 실행, 1은 모든 영역이 교차해야 콜백 함수가 실행.
        });
        // 최하단 요소를 관찰 대상으로 지정함
        const observerTarget = document.getElementById("observer");
        // 관찰 시작
        if (observerTarget) {
            observer.observe(observerTarget);
        }


    }, []);

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
            console.log('updatePage =====>', page)
            setPage((prevPage) => prevPage + 1);
        }
    };

    const ContentAnimationStyle= styled.div`
        
        
        @keyframes moveRight {
            100% {
                scroll-margin-left: 200px;
            }       
            
        }
    `

    const animation = keyframes`
          100%{
            scroll-margin-left: 100px;
          }
        `;


    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: "10px",
        }}>

            <SliderArrow style={{rotate: "180deg" }} onClick={() => {
                const container = window.document.getElementById("container")
                if(!container){
                    return
                }

                container.scrollBy({
                    left: -300,
                    behavior:"smooth"
                })
                
            }}/>
            <ContentAnimationStyle id={"container"} style={{
                overflow:"hidden",
                display: "flex",
                flexDirection:"row",
                flexWrap:"nowrap",
                gap: "40px",
            }}>
                {contentList.map((content: any) => {
                    return content
                })}

                <div id="observer" style={{height: "10px"}}></div>
            </ContentAnimationStyle>
            <SliderArrow style={{}} onClick={() => {
                const container = window.document.getElementById("container")
                if(!container){
                    return
                }

                container.scrollBy({
                    left: 300,
                    behavior:"smooth"
                })
            }}/>

        </div>
    )
}