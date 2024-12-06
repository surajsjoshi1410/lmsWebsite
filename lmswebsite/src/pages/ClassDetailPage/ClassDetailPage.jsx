// src/pages/SubjectDetailsPage/SubjectDetailsPage.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPackageByClassId } from "../../api/packagesApi";
import {
  Container,
  Header,
  LoadingMessage,
  ErrorMessage,
  NoPackagesMessage,
  PackageGrid,
  PackageCard,
  PackageTitle,
  PackageImage,
  PackageDescription,
  PackageFeatures,
  PackagePrice,
  PackageMode,
  SubjectList,
  SubjectItem,
  BackButton,
} from "./ClassDetailPage.style";

const ClassDetailPage = () => {
  const { classId } = useParams(); // Get the class ID from the URL parameters
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [packages, setPackages] = useState([]);
  const [loadingPackages, setLoadingPackages] = useState(true);
  const [packagesError, setPackagesError] = useState(null);
const mode="normal";
  useEffect(() => {
    if (!classId) {
      setPackagesError(new Error("No class ID provided"));
      setLoadingPackages(false);
      return;
    }

    const fetchPackages = async () => {
        console.log("classId", classId);
      try {
        const packagesData = await getPackageByClassId(classId,mode);
        console.log("packagesData", packagesData);
        setPackages(packagesData);
        setLoadingPackages(false);
      } catch (error) {
        setPackagesError(error);
        setLoadingPackages(false);
      }
    };

    fetchPackages();
  }, [classId, mode]);

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  if (loadingPackages) {
    return (
      <Container>
        <LoadingMessage>Loading Packages...</LoadingMessage>
      </Container>
    );
  }

  if (packagesError) {
    return (
      <Container>
        <ErrorMessage>Error loading Packages: {packagesError?.message}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton onClick={handleBackClick}>← Back to Classes</BackButton>
      <Header>Packages Details for Class</Header>

      {packages.length === 0 ? (
        <NoPackagesMessage>No Packages found for this class.</NoPackagesMessage>
      ) : (
        <PackageGrid>
          {packages.map((pkg) => (
            <PackageCard key={pkg._id}>
              <PackageTitle>{pkg.package_name}</PackageTitle>
              {pkg.image && <PackageImage src={pkg.image} alt={pkg.package_name} />}
              <PackageDescription>{pkg.description}</PackageDescription>
              {pkg.features && pkg.features.length > 0 && (
                <div>
                  <strong>Features:</strong>
                  <PackageFeatures>
                    {pkg.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </PackageFeatures>
                </div>
              )}
              <PackagePrice>Price: ${pkg.price}</PackagePrice>
            
              {pkg.subject_id && pkg.subject_id.length > 0 && (
                <div>
                  <strong>Subjects:</strong>
                  <SubjectList>
                    {pkg.subject_id.map((subject) => (
                      <SubjectItem key={subject._id}>{subject.subject_name}</SubjectItem>
                    ))}
                  </SubjectList>
                </div>
              )}
            </PackageCard>
          ))}
        </PackageGrid>
      )}
    </Container>
  );
};

export default ClassDetailPage;
