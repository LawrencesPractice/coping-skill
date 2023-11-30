import React from 'react';
import styled from 'styled-components';

// Define your styled components
const PackagesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px;
`;

const PackageCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  width: 300px;
  text-align: center;
`;

const PackageTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const PackagePrice = styled.p`
  font-size: 20px;
  color: #666;
`;

const PackageFeature = styled.li`
  font-size: 16px;
  color: #333;
`;

// Define your component
const Packages = () => {
  const packages = [
    {
      name: 'Basic',
      price: '$10/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    {
      name: 'Pro',
      price: '$20/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
    },
    {
      name: 'Premium',
      price: '$30/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
    }
  ];

  return (
    <PackagesContainer>
      {packages.map((pkg) => (
        <PackageCard key={pkg.name}>
          <PackageTitle>{pkg.name}</PackageTitle>
          <PackagePrice>{pkg.price}</PackagePrice>
          <ul>
            {pkg.features.map((feature, index) => (
              <PackageFeature key={index}>{feature}</PackageFeature>
            ))}
          </ul>
        </PackageCard>
      ))}
    </PackagesContainer>
  );
};

export default Packages;