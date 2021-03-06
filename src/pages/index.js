import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';

export default () => {
  return (
    <>
      <Hero />
      <Layout>
        <AboutMe />
      </Layout>
    </>
  );
};
