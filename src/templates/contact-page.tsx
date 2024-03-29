import React from 'react';
import { graphql } from 'gatsby';
import ContactPageTemplate from '../components/ContactPageTemplate';
import Layout from '../components/Layout';
interface ContactPageProps {
  data?: {
    markdownRemark?: {
      frontmatter?: any;
    };
  };
}
const ContactPage: React.FunctionComponent<ContactPageProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Layout>
  );
};
export default ContactPage;
export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
      }
    }
  }
`;
