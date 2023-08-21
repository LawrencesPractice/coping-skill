// MuscleRelaxation.js

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const MuscleRelaxationWrapper = styled(motion.div)`
  padding: 20px;
  background: #f2f2f2;
  border-radius: 5px;
`;

const MuscleRelaxation = () => {
  return (
    <MuscleRelaxationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Muscle Relaxation</h1>
      <p>Muscle relaxation technique...</p>
    </MuscleRelaxationWrapper>
  );
};

export default MuscleRelaxation;