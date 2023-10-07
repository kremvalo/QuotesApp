import React from 'react';

import {
  Wrapper,
  WrapperRow,
  WrapperMainInformationRow,
  CustomText,
} from './styles';

interface IProps {
  date: string;
  name: string;
  lastname: string;
  address: string;
}

const ClientInfo: React.FC<IProps> = ({ date, name, lastname, address }) => {
  return (
    <Wrapper>
      <WrapperMainInformationRow>
        <WrapperRow>
          <CustomText>Name:</CustomText>
          <CustomText>{name}</CustomText>
        </WrapperRow>
        <WrapperRow>
          <CustomText>Lastname: </CustomText>
          <CustomText>{lastname} </CustomText>
        </WrapperRow>
      </WrapperMainInformationRow>
      <WrapperRow>
        <CustomText>Direction: </CustomText>
        <CustomText>{date}</CustomText>
      </WrapperRow>
      <WrapperRow>
        <CustomText>Address: </CustomText>
        <CustomText>{address}</CustomText>
      </WrapperRow>
      <WrapperRow />
    </Wrapper>
  );
};

export default ClientInfo;
