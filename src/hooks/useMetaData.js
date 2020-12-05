import { useStaticQuery, graphql } from 'gatsby';

const useMetaData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
export default useMetaData;
