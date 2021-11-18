import React from 'react';
import '../styles/Section.css';

export default function Section() {
  return (
    <section class="column">    
        <h3>NFT Collect - Collaboration</h3>
        {/* <a href="https://nftc-collect.herokuapp.com/" img src="./assets/images/ntfc_image.png"
                class="image1" alt="NFTC"></a> */}
        <link rel="nft-collect" href="%PUBLIC_URL%/ntfc_image.png" />
    </section>     

  );
}
