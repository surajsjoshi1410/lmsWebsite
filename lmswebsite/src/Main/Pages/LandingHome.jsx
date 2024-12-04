import React from "react";
import { fetchLandingPageData } from "../../api/landingPageApi";
import Header from "../Components/header/Header"; // Import Header component
import Banner from "../Components/Banner/Banner";
import Benefits from "../Components/Benefits/Benefits";
import ExploreMaterial from "../Components/ExploreMaterial/ExploreMaterial";
import ChooseUs from "../Components/ChooseUs/ChooseUs";
import ExpertTeachers from "../Components/ExpertTeachers/ExpertTeachers";
import StudentTestimonial from "../Components/StudentTestimonial/StudentTestimonial";
import FAQSection from "../Components/FAQ/FAQSection"; // Import FAQSection
import Footer from "../Components/Footer/Footer"; // Import Footer component

export default function LandingHome() {
  const [apiData, setApiData] = React.useState();

  React.useEffect(() => {
    const apiCaller = async () => {
      const response = await fetchLandingPageData();
      setApiData(response);
    };
    apiCaller();
  }, []);

  return (
    <>
      <Header /> {/* Add Header at the top */}
      {apiData && (
        <>
          <Banner
            data={{
              banners: apiData.banners,
              stats: apiData.Stats,
              courses: apiData.courses,
            }}
          />
          <Benefits data={apiData.benefits} />
          <ExploreMaterial data={apiData.courses} />
          <ChooseUs data={apiData.chooseUs} />
          <ExpertTeachers data={apiData.experienceTeachers} />
          <StudentTestimonial data={apiData.testimonials} />
          <FAQSection data={apiData.faqs} /> {/* Passing FAQ data */}
        </>
      )}
      <Footer /> {/* Add Footer here */}
    </>
  );
}
