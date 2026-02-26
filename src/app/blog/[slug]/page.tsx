import { notFound } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import MermaidDiagram from '@/components/MermaidDiagram';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 hover:underline mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-gray-700">{children}</li>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded text-sm font-mono">
                    {children}
                  </code>
                ),
                pre: ({ children }) => {
                  const child = React.Children.toArray(children)[0] as React.ReactElement<{ className?: string; children?: React.ReactNode }>;
                  if (child?.props?.className?.includes('language-mermaid')) {
                    return <MermaidDiagram chart={String(child.props.children).trim()} />;
                  }
                  return (
                    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg overflow-x-auto mb-4">
                      {children}
                    </pre>
                  );
                },
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-600 my-4">
                    {children}
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-amber-600 hover:text-amber-700 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-gray-200">
        <p className="text-center text-sm text-gray-500">
          © 2026 Patrick Woodhead. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
