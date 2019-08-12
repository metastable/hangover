import React from 'react';
import Content from '../Content';
import { Link } from 'gatsby';

import { paramCase } from 'change-case';

interface ArticleTemplateProps {
  title?: string;
  content?: string;
  contentComponent?: (...args: any[]) => any;
  cover?: string;
  meta_title?: string;
  meta_description?: string;
  tags: any;
}
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars,camelcase,@typescript-eslint/camelcase
const ArticleTemplate: React.FunctionComponent<ArticleTemplateProps> = ({ content, contentComponent, cover, meta_title, meta_desc, tags, title, }) => {
  const PostContent = contentComponent || Content;
  return (
    <div>
      <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
      <img src={cover} alt={title} />
      <PostContent content={content} />
      <div style={{ marginTop: `4rem` }}>
        <h4>Tags</h4>
        <ul className="taglist">
          {tags && tags.length
            ? tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${paramCase(tag)}/`}>{tag}</Link>
                </li>
              ))
            : null}
        </ul>
      </div>
      <hr />
    </div>
  );
};
export default ArticleTemplate;
