import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';

type LocalPost = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  description: string;
  isLocal: true;
};

type LegacyPost = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  description: string;
  notionUrl: string;
  isLocal: false;
};

type CombinedPost = LocalPost | LegacyPost;

function BlogSection() {
  const markdownPosts = getBlogPosts();
  const markdownSlugs = new Set(markdownPosts.map((p) => p.slug));

  // Combine and sort all posts by date
  const allPosts: CombinedPost[] = markdownPosts.map((post): LocalPost => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      categories: post.categories,
      description: post.description,
      isLocal: true,
    })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="blog" className="mb-16 scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">📝</span>
        <h2 className="text-xl font-semibold text-stone-100">
          Writing
        </h2>
      </div>
      <div className="space-y-2">
        {allPosts.map((post) =>
          post.isLocal ? (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-4 -mx-4 rounded-xl hover:bg-stone-800/50 transition-all"
            >
              <div className="flex justify-between items-start gap-4 mb-1">
                <h3 className="text-base font-medium text-stone-200 group-hover:text-amber-500 transition-colors">
                  {post.title}
                </h3>
                <span className="text-sm text-stone-500 whitespace-nowrap">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                  })}
                </span>
              </div>
              <p className="text-sm text-stone-400 line-clamp-2">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.categories.slice(0, 3).map((category) => (
                  <span
                    key={category}
                    className="px-2 py-0.5 bg-stone-800 text-stone-400 rounded text-xs"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </Link>
          ) : (
            <a
              key={post.slug}
              href={post.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 -mx-4 rounded-xl hover:bg-stone-800/50 transition-all"
            >
              <div className="flex justify-between items-start gap-4 mb-1">
                <h3 className="text-base font-medium text-stone-200 group-hover:text-amber-500 transition-colors">
                  {post.title}
                </h3>
                <span className="text-sm text-stone-500 whitespace-nowrap">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                  })}
                </span>
              </div>
              <p className="text-sm text-stone-400 line-clamp-2">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.categories.slice(0, 3).map((category) => (
                  <span
                    key={category}
                    className="px-2 py-0.5 bg-stone-800 text-stone-400 rounded text-xs"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </a>
          )
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-900">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-stone-950/50 pointer-events-none" />

      {/* Main Content */}
      <main className="relative max-w-2xl mx-auto px-6 py-16">
        {/* Profile Section */}
        <div className="mb-16">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-stone-800 shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Patrick Woodhead"
              width={80}
              height={80}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold text-stone-100 mb-2">
            Patrick Woodhead
          </h1>
          <p className="text-lg text-stone-400 mb-3">
            Founder & CEO @ <span className="text-amber-500 font-medium">Space Meridian</span>
          </p>
          <p className="text-stone-400 leading-relaxed">
            Building Filecoin Beam, the access layer for Filecoin. Previously Lab Lead at Protocol Labs.
          </p>
        </div>

        {/* Links Section */}
        <section id="connect" className="mb-16 scroll-mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🔗</span>
            <h2 className="text-xl font-semibold text-stone-100">
              Connect
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://twitter.com/patrickwoodhead"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="text-sm font-medium text-stone-300">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/patrick-woodhead/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-medium text-stone-300">LinkedIn</span>
            </a>
            <a
              href="https://github.com/geomatrick"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-medium text-stone-300">GitHub</span>
            </a>
            <a
              href="https://medium.com/@patrickwoodhead"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              <span className="text-sm font-medium text-stone-300">Medium</span>
            </a>
          </div>
        </section>

        {/* Papers Section */}
        <section id="research" className="mb-16 scroll-mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📄</span>
            <h2 className="text-xl font-semibold text-stone-100">
              Research & Publications
            </h2>
          </div>
          <div className="space-y-3">
            <a
              href="https://www.standard.co.uk/news/tech/understand-blockchain-part-one-background-double-spending-problem-emojis-a3793471.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 bg-stone-800/50 rounded-xl border border-stone-700 hover:border-amber-500 hover:shadow-md transition-all"
            >
              <h3 className="text-base font-medium text-stone-200 group-hover:text-amber-500 mb-1">
                How to understand blockchain using emojis
              </h3>
              <p className="text-sm text-stone-400">
                Published in the Evening Standard
              </p>
            </a>
            <a
              href="https://drive.google.com/file/d/12TjEZWt0eARq7lxRWFOIOITtdZoX17dy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 bg-stone-800/50 rounded-xl border border-stone-700 hover:border-amber-500 hover:shadow-md transition-all"
            >
              <h3 className="text-base font-medium text-stone-200 group-hover:text-amber-500 mb-1">
                Zero Knowledge Proofs In Lattice Based Cryptography
              </h3>
              <p className="text-sm text-stone-400">
                Research paper on zero knowledge proofs and lattice-based cryptographic systems
              </p>
            </a>
            <a
              href="https://drive.google.com/file/d/1gr2ry7d5_dDtgJloMWYyiBSgkystwF0_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 bg-stone-800/50 rounded-xl border border-stone-700 hover:border-amber-500 hover:shadow-md transition-all"
            >
              <h3 className="text-base font-medium text-stone-200 group-hover:text-amber-500 mb-1">
                Checker Network Whitepaper
              </h3>
              <p className="text-sm text-stone-400">
                Technical whitepaper for the Checker Network protocol
              </p>
            </a>
          </div>
        </section>

        {/* Talks Section */}
        <section id="talks" className="mb-16 scroll-mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🎤</span>
            <h2 className="text-xl font-semibold text-stone-100">
              Talks
            </h2>
          </div>
          <div className="space-y-2">
            {[
              { title: 'How the Spark Protocol Improves Data Retrieval', date: 'Jul 2024', url: 'https://youtu.be/jt1l5smkt0c' },
              { title: 'Filecoin Station', date: 'Jul 2024', url: 'https://www.youtube.com/watch?v=u1KVMJmDTew' },
              { title: 'Lightning Talk - Verifying Filecoin Retrievals at Scale', date: 'Dec 2023', url: 'https://www.youtube.com/watch?v=MhFUuJ4KWSs' },
              { title: 'Saturn & IPNI: Finding and fetching Web3 Content', date: 'Jun 2023', url: 'https://www.youtube.com/live/ba6P_zHi9mo?si=YOW1gTMGxkgHdk9j' },
              { title: 'Introduction to Retrieval Markets Summit', date: 'Jan 2023', url: 'https://www.youtube.com/watch?v=3H05wy8mnhE' },
              { title: 'Cryptoeconomics of Retrieval', date: 'Jun 2022', url: 'https://www.youtube.com/watch?v=BglpOHe4zPo' },
              { title: 'Filecoin Retrieval Markets', date: 'May 2022', url: 'https://www.youtube.com/watch?v=tyXwki8cBlg' },
              { title: 'Retrieval Markets Workshop: Intro to Saturn', date: 'May 2022', url: 'https://www.youtube.com/watch?v=WJSMMyh5yJo' },
            ].map((talk) => (
              <a
                key={talk.url}
                href={talk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 -mx-3 rounded-xl hover:bg-stone-800/50 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-stone-200 group-hover:text-amber-500 truncate">
                    {talk.title}
                  </h3>
                  <span className="text-sm text-stone-500">
                    {talk.date}
                  </span>
                </div>
                <svg className="w-4 h-4 text-stone-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection />
      </main>

      {/* Footer */}
      <footer className="relative max-w-2xl mx-auto px-6 py-8 border-t border-stone-800">
        <p className="text-center text-sm text-stone-500">
          © 2025 Patrick Woodhead
        </p>
      </footer>
    </div>
  );
}
