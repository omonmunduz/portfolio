import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: bottom 50% center;
  background-size: cover;
  height: 50vh;
  + * {
    margin-top: 0;
  }
`;
const TextBox = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
`;
const Bright = styled('span')`
  color: #dced31;
`;
const Vermillion = styled('span')`
  color: #c73e1d;
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "aron-yigin.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid}>
      <TextBox>
        <h4
          css={css`
            padding: 1rem;
            background-color: #fff;
            border-radius: 15px;
            @media (min-width: 900px) {
              transform: translateX(-170px);
            }
          `}
        >
          Hey, I'm <Vermillion>Omur</Vermillion>
          <Bright>bek</Bright> <Vermillion>Nazar</Vermillion>
          <Bright>ov</Bright> and I love <Vermillion>QA</Vermillion> and
          building beautiful websites.
        </h4>
      </TextBox>
    </ImageBackground>
  );
};
export default Hero;
