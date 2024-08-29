'use client'

import styled from "styled-components";
import HamburgerSvg from "../../../../public/icons/Hamburger.svg"
import {GRAY_1, PRIMARY_3} from "@/constant/color";

export const HamburgerIcon = styled(HamburgerSvg)`
    path {
        stroke: ${GRAY_1};
        fill: ${GRAY_1};
    }

    &:hover {
        path {
            stroke: ${PRIMARY_3};
            fill: ${PRIMARY_3};
        }
    }

`

