import { getBlogPosts } from '@/lib/blog';

const SITE_URL = 'https://geomatrick.io';

export async function GET() {
  const posts = getBlogPosts();

  const blogEntries = posts
    .map(
      (post) =>
        `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.description}`
    )
    .join('\n');

  const llmsTxt = `# Patrick Woodhead

> Founder & CEO @ Space Meridian. Previously Lab Lead @ Protocol Labs. Expertise in Mathematics, Cryptography, Engineering, and Design.

Patrick Woodhead is a technologist and writer focused on cryptography, decentralized systems, and AI. He writes about zero knowledge proofs, blockchain, privacy-preserving computation, and the intersection of AI with data sovereignty.

## Blog

${blogEntries}

## Research & Publications

- [How to understand blockchain using emojis](https://www.standard.co.uk/tech/blockchain-emojis-bitcoin-patrick-woodhead-a3754866.html): Published in the Evening Standard
- [Zero Knowledge Proofs In Lattice Based Cryptography](https://drive.google.com/file/d/1BYSZ2hJqnP-SIxs0UWp5DHXhD0NIIHQO/view): Research paper on lattice-based ZKPs
- [Checker Network Whitepaper](https://drive.google.com/file/d/1suiJzSRx4PN0lB2sdxBxCVRSTIyK_i0b/view): Technical whitepaper for the Checker Network

## Talks

- [How the Spark Protocol Improves Data Retrieval](https://www.youtube.com/watch?v=W-fFCoXjV_M): Jul 2024
- [Filecoin Station](https://www.youtube.com/watch?v=qOrgTgEoqXQ): Jul 2024
- [Lightning Talk - Verifying Filecoin Retrievals at Scale](https://www.youtube.com/watch?v=BT95oeq08LU): Dec 2023
- [Saturn & IPNI: Finding and fetching Web3 Content](https://www.youtube.com/watch?v=cmKaF9wbBgQ): Jun 2023
- [Introduction to Retrieval Markets Summit](https://www.youtube.com/watch?v=NhB3Kp-aeas): Jan 2023
- [Cryptoeconomics of Retrieval](https://www.youtube.com/watch?v=sHi-btoEbQo): Jun 2022
- [Filecoin Retrieval Markets](https://www.youtube.com/watch?v=a-gNiOCEbcc): May 2022
- [Retrieval Markets Workshop: Intro to Saturn](https://www.youtube.com/watch?v=bOBHbqvwNak): May 2022

## Connect

- [Twitter](https://twitter.com/patrickwoodhead)
- [LinkedIn](https://linkedin.com/in/patrick-woodhead/)
- [GitHub](https://github.com/geomatrick)
- [Medium](https://medium.com/@patrickwoodhead)

## Feed

- [RSS Feed](${SITE_URL}/feed.xml)
`;

  return new Response(llmsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
