'use client'

import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import GrayButton from "@/components/atoms/button/GrayButton";

export default function IndexFormat(){

    return (
        <>
            <div style={{display: 'flex', flexDirection:'column', alignItems:"center", gap:"30px", width: '250px', height:"150px", marginTop: '10px'}}>
                <PrimaryButton style={{width:"100%"}} title={"프로젝트 보러가기"} onClick={() => {
                    window.location.href="/project"
                }}></PrimaryButton>
                <GrayButton style={{width: "100%", color:"gray"}} title={"로그인 하러가기"} onClick={()=>{
                    window.location.href="/login"
                }}></GrayButton>
            </div>

        </>
    )

}