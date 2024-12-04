import React from "react";
import { fetchLandingPageData } from "../../../../../../api/landingPageApi";
import Header from "../../../../../../Main/Components/header/Header";
import Mode from "../../../../pages/demomodeupdate/Mode/Mode";
import OneToOneExpertTeachers from "../../../../pages/demomodeupdate/Mode/OneExpertTeacher/OneToOneExpertTeachers";
import OneToOneStudentTestimonial from "../../../../pages/demomodeupdate/Mode/OneStudentTestinomial/OneToOneStudentTestimonial";
import Footer from "../../../../../../Main/Components/Footer/Footer";

const MidwayOnetoOne = () => {
  const [apiData, setApiData] = React.useState();

  React.useEffect(() => {
    const apiCaller = async () => {
      const response = await fetchLandingPageData();
      setApiData(response);
    };
    apiCaller();
  }, []);

  return (
    <div>
      <Header />
      <Mode />
      {apiData && (
        <>
          <OneToOneExpertTeachers data={apiData.experienceTeachers} />
          <OneToOneStudentTestimonial data={apiData.testimonials} />
        </>
      )}
      <OneToOneContact />
      <Footer />
    </div>
  );
};

export default MidwayOnetoOne;
