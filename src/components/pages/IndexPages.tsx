import CenterModalTemplate from "@/components/templetes/CenterModalTemplate";
import React from "react";
import HomeTemplate from "@/components/templetes/HomeTemplate";
import IndexFormat from "@/components/organisms/IndexFormat";

export default function IndexPages(){


    return (
        <>
            <HomeTemplate>
                <CenterModalTemplate>
                    <IndexFormat></IndexFormat>
                </CenterModalTemplate>
            </HomeTemplate>
        </>
    )
}