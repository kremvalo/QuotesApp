import React from 'react';

import { MainWrapper, MainTitle, MainTitleDescription } from '../commonStyles';

const CreateQuoteScreen: React.FC = () => {
  return (
    <MainWrapper>
      <MainTitle>Client Info</MainTitle>
      <MainTitleDescription>
        You can see all quote information here
      </MainTitleDescription>
    </MainWrapper>
  );
};

export default CreateQuoteScreen;
