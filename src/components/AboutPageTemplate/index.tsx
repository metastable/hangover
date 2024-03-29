import React from 'react';
import Content from '../Content';
interface AboutPageTemplateProps {
  title: string;
  content?: string;
  contentComponent?: (...args: any[]) => any;
}
const AboutPageTemplate: React.FunctionComponent<AboutPageTemplateProps> = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <section className="hero is-primary is-bold is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h1 className="title">{title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPageTemplate;
