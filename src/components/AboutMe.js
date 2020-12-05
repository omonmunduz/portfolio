import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ProfilePicture = styled(Img)`
  width: 400px;

  border-radius: 15px;
`;

const AboutMe = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "ssd.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <section
      css={css`
        padding: 1rem;
        width: 100%;
        height: 30vh;
        display: flex;
        flex-direction: column;
        @media (min-width: 900px) {
          flex-direction: row;
        }
      `}
    >
      <ProfilePicture fluid={image.sharp.fluid} />
      <article css={css``}>
        <h1>About me</h1>
        <p>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
      </article>
    </section>
  );
};
export default AboutMe;
