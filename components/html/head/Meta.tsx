import React from 'react';
import Head from 'next/head';

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: 'Ascended Krows Marketplace',
  keyword:
    'ascended krows, krows, moody krows, blockchain, crypto, crypto collectibles, crypto makretplace, cryptocurrency, digital items, market, nft, nft marketplace, non-fungible tokens, virtual asset, wallet',
  desc: 'The Ascended Krows NFT marketplace on top of Immutable X. Buy, sell, and discover new exclusive digital items.',
};

export default Meta;
