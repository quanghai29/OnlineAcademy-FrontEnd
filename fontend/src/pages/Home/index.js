import React from 'react';
import Layout from '../../layout/Layout';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <p>Hello, I'm Home</p>
      </div>
    </Layout>
  );
};

export default Home;
