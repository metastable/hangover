import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { HTMLContent } from '../components/Content';
import AboutPageTemplate from '../components/AboutPageTemplate';
import Layout from '../components/Layout';
interface AboutPageProps {
  data: {
    markdownRemark: {
      html: any;
      frontmatter: {
        title?: string;
        meta_title?: string;
        meta_description?: string;
      };
    };
  };
}
const AboutPage: React.FunctionComponent<AboutPageProps> = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name="description" content={post.frontmatter.meta_description} />
      </Helmet>
      <AboutPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
    </Layout>
  );
};
export default AboutPage;
export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`;
