import React from 'react';
import { FacebookShareButton, TwitterShareButton, FacebookShareCount, FacebookIcon, TwitterIcon } from 'react-share';
import config from '../../../config';
import './styles.scss';

interface ShareProps {
  title: string;
  slug: string;
  excerpt: string;
  mobile?: boolean;
}

const Share: React.FunctionComponent<ShareProps> = ({ title, slug, excerpt, mobile = false }) => {
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
  const url = config.siteUrl + realPrefix + slug;
  const iconSize = mobile ? 36 : 48;
  const filter = count => (count > 0 ? count : '');
  return (
    <div className="social-links">
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={excerpt}>
        <FacebookIcon round size={iconSize} />
        <FacebookShareCount url={url}>{count => <div className="share-count">{filter(count)}</div>}</FacebookShareCount>
      </FacebookShareButton>
    </div>
  );
};
export default Share;
