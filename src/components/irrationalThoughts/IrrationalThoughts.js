// IrrationalThoughts.js

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const IrrationalThoughtsWrapper = styled(motion.div)`
  padding: 20px;
  background: #f2f2f2;
  border-radius: 5px;
`;

const IrrationalThoughts = () => {
  return (
    <IrrationalThoughtsWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Irrational Thoughts</h1>
      <p>Irrational thoughts technique...</p>
    </IrrationalThoughtsWrapper>
  );
};

export default IrrationalThoughts;