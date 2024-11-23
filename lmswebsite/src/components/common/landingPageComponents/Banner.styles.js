import styled from "styled-components";
import { media } from "../../../style/theme/theme"; 

export const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    min-height: 100vh;
    position: relative;
`;

export const InnerContainer = styled.div`
    width: 80%;
    background-color: #ffcce0;
    position: relative;
`;

export const Wave = styled.div`
    position: absolute;
    bottom: -1vh;
    width: 100%;
    height: 30vh;
    background-color: #ff4081;
    clip-path: path("M0,6 C240,320 480,0 720,80 C960,160 1200,64 1440,120 L1440,300 L0,300 Z");
`;

export const SliderItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const BannerImage = styled.img`
    display: block;
    margin: auto;
    width: 85%; /* Increase width */
    height: 400px; /* Set a specific height */
    max-height: 400px; /* Increase max-height if needed */
    object-fit: cover;
    position: relative; /* Ensure it interacts with z-index */
    z-index: 1; /* Place it behind slick-dots and CoursesBackground */
    border-radius: 0px 0px 20px 20px;

    ${media.xl`
        width: 80%;
        height: 350px;
    `}

    ${media.md`
        width: 90%;
        height: 300px;
    `}

    ${media.xs`
        width: 100%;
        height: 250px;
    `}
`;


export const BannerText = styled.p`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #000;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.2rem;
    text-align: center;
    width: 80%;

    ${media.md`
        font-size: 1rem;
        padding: 8px 16px;
    `}

    ${media.xs`
        font-size: 0.9rem;
        padding: 6px 12px;
    `}
`;

export const CoursesBackground = styled.div`
    position: relative;
    background-color: white;
    width: 80%;
    margin: -32px auto;
    border-radius: 20px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 10; /* Ensure it appears above the banner image */


    ${media.md`
        width: 50%;
        margin: 20px auto;
    `}

    ${media.xs`
        width: 60%;
        margin: 10px auto;
    `}
`;

export const CoursesTitle = styled.h2`
    margin: 20px;
    text-align: center; /* Center the title text */

    ${media.md`
        margin: 10px;
    `}

    ${media.xs`
        margin: 5px;
    `}
`;

export const CoursesSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;

    ${media.md`
        flex-direction: column;
        align-items: center; /* Center items in smaller screens */
    `}
`;

export const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.bgColor || "#ffb6c1"}; /* Default to #ffb6c1 if bgColor is not provided */
    transition: transform 0.2s;
    flex: 1 1 calc(20% - 20px);
    max-width: calc(20% - 20px);
    box-sizing: border-box;
    text-align: center;

    ${media.md`
        flex: 1 1 60%; /* Set a wider width at medium screens to prevent overflow */
        max-width: 60%;
        margin: 10px 0;
    `}

    ${media.xs`
        flex: 1 1 100%; /* Full width on extra small screens */
        max-width: 100%;
        margin: 5px 0;
    `}
`;

export const StatsSection = styled.div`
    position: relative;
    padding-top: 40px;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 2vh;
    flex-wrap: wrap;
`;

export const CardStatistics = styled.div`
    background-color: white;
    color: rgb(192, 0, 144);
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const StyledSliderDots = styled.div`
    .slick-dots {
        position: absolute;
        bottom: 50px; /* Adjust as needed */
        z-index: 10; /* Ensure it appears above the banner image */
    }

    .slick-dots li button:before {
        color: white; /* Change dot color */
        font-size: 12px;
    }
`;