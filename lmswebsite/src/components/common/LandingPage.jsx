import React, { useEffect, useState } from "react";
import { fetchLandingPageData } from "../../api/landingPageApi";
import Header from "./landingPageComponents/Header";
import Banner from "./landingPageComponents/Banner";
import BenefitsSection from "./landingPageComponents/BenefitsSection";
import StudyMaterials from "./landingPageComponents/StudyMaterials";
import SingleCoursePerClass from "./landingPageComponents/SingleCoursePerClass";
import ExperiencedTeachers from "./landingPageComponents/ExperiencedTeachers";
import Why from "./landingPageComponents/Why";
// import TeachersSection from "./landingPageComponents/TeachersSection";
import FAQSection from "./landingPageComponents/FAQSection";
import Footer from "./landingPageComponents/Footer";
import Footer2 from "./landingPageComponents/Footer2";
import ExpertTeacherss from "./landingPageComponents/ExpertTeacherss";
import TestimonialsSection from "./landingPageComponents/TestimonialsSection";
import { PageContainer, LoadingMessage, ErrorMessage } from "./LandingPage.styles";

const LandingPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const landingPageData = await fetchLandingPageData();
        setData(landingPageData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>Error: {error}</ErrorMessage>;

  return (
    <PageContainer>
      <Header />
      <Banner />
      <BenefitsSection />
      <StudyMaterials />
      <SingleCoursePerClass />
      <Why />
      {/* <TeachersSection /> */}
      <ExpertTeacherss/>
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <Footer2 />
    </PageContainer>
  );
};

export default LandingPage;
