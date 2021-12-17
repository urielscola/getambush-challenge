import React from 'react';
import { theme } from 'assets/styles';

import {
  Container,
  FlexDiv,
  Head,
  Header,
  Input,
  Typography,
} from 'components';
const Home = () => {
  return (
    <>
      <Head title="Home" />
      <Header>
        <Input
          type="text"
          placeholder="Search issues"
          name="search"
          onChange={(value) => console.log(value)}
        />
      </Header>
    </>
  );
};

export default Home;
