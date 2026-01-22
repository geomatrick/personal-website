---
title: "The Real Benefit of AI Coding Isn't Speed - It's Ownership and Security"
date: "2026-01-22"
categories: ["AI", "Cybersecurity"]
description: "How AI-assisted coding enables developers to own their full stack while moving fast, reducing dependency on third-party platforms and improving data sovereignty."
---
## TL;DR

What if the fastest way to build a website or application was also the most secure - without locking you in? I used to assume speed, convenience, and ownership were mutually exclusive. Then I migrated my entire personal website into my own repo in an afternoon using AI-generated code, and it unexpectedly changed how I think about data sovereignty and cybersecurity.

## Background

Over the past few months, I migrated my personal website from a Notion + Super setup to a Next.js site, using Claude Code to do most of the heavy lifting. I was genuinely surprised by how quickly - and accurately - it handled the process: taking my existing site and turning it into working code, pulling in all my blog content, and restyling everything to feel a bit more me.

We’re now seeing companies like Lovable grow extremely quickly by enabling people to “vibe code” full websites. For my personal site, the speed alone is incredible. But what stood out most wasn’t just velocity - it was how this approach changed my relationship to ownership, security, and trust.

## The Hidden Cost of Convenience

My blog originally lived on Medium. It was great for distribution - some posts I wrote in 2017 and 2018 reached thousands of readers within days. But over time, I became increasingly frustrated that I didn’t really own my content. My writing lived on Medium’s platform, not mine.

I then moved to Notion and Super. This felt like a step forward: my blog lived on my own domain, and the CMS setup let me leverage Notion’s excellent editor - LaTeX support, inline code, fast publishing - and move quickly from writing to a live post.

But once again, convenience came with trade-offs. I started to feel constrained by the lack of control over styling. I was using a Super template with some overrides, but it didn’t give me the fidelity I wanted. Something as subtle as word and paragraph spacing felt off, and fixing it properly would have required increasingly hacky workarounds.

You can see some of those overrides in the screenshot below.

![Super template CSS overrides](/blog/super-overrides.png)


More importantly, this was yet another platform involved in rendering my website and blog posts. And every additional platform introduces new data and security risks.

Eventually, I moved everything into my own personal website repository, built with Next.js. It didn’t have to be Next.js - it’s just a framework I know well, which made it easier to review and reason about the code Claude was generating. In fact, doing it in vanilla JS to reduce external dependencies could be an interesting next iteration.

What really stood out during this migration was how dramatically the trust assumptions and data ownership model changed.

Yes, my personal website is public. The content isn’t sensitive, and the repository is public on GitHub. But many CMS systems handle private, confidential data behind ACLs. Every CMS you adopt introduces external risk: data leaks, breaches, supply-chain attacks, or downtime.

To make this concrete: WordPress - one of the most widely used CMS platforms - has repeatedly been a large attack surface. In July 2023, a critical WooCommerce Payments vulnerability (CVE-2023-28121) was exploited in a campaign that peaked at 1.3 million attacks against 157,000 sites in a single day. In November 2024, another critical WordPress plugin vulnerability (CVE-2024-10924), installed on over 4 million sites, allowed attackers to bypass authentication entirely.

Zooming out, 2024 alone saw nearly 8,000 new WordPress vulnerabilities, a 34% increase year-over-year. Scale brings convenience - and risk.

## The Own-Your-Own-Code Solution

With Claude Code - or other modern code-writing LLMs - you can now own your solution end-to-end while still moving incredibly fast. Instead of relying on closed-source platforms, you can build directly on open-source libraries and protocols without sacrificing velocity.

For my website, I can inspect every dependency: how widely it's used, how actively it's maintained, and how battle-tested it is. I can run npm audit to surface known vulnerabilities and make informed trade-offs.

![npm audit output showing dependency vulnerabilities](/blog/npm-audit.png)

This matters because security through obscurity doesn’t work. Security through transparency, peer review, and critique is far stronger. That’s why cryptographic protocols are published openly and subjected to years of analysis before being trusted. You wouldn’t deploy a brand-new hash function that hadn’t survived public scrutiny - and the same principle applies here.

For a public personal website, the stakes are low. But when dealing with more sensitive data, owning the full stack gives individuals and companies far more control over how their data is handled - without giving up the speed that originally drove people toward CMSs and SaaS platforms.

## New Trust Assumptions

This approach does introduce new trust considerations.

First, deployment. Unless I fully self-host - owning hardware, networking, and operational overhead - I still need a platform like Vercel. The key difference is lock-in. I own my domain and my codebase, so switching providers is cheap. In practice, it’s mostly just a new GitHub Action.

This is what makes domain names so powerful. Chris Dixon touches on this in Read Write Own, where he argues that blockchains allow users to own their data rather than being locked into profit-seeking platforms. My takeaway here is simpler: you often don’t need a blockchain - you just need to avoid trading ownership for convenience or distribution.

Second, there’s Claude Code itself. It can read, process, and modify my repository. That means it becomes part of my threat model. I need to trust that it isn’t sending sensitive information back to Anthropic’s servers, and that the code it writes - including things like ACLs - is secure.

That question is still open.

## In Summary: The Trade-offs

Today, I can’t verify with certainty that Claude Code never transmits sensitive data. But I can use it defensively: avoiding secrets in the codebase, adding hooks to prevent it from reading sensitive files, and reviewing everything it writes just as rigorously as human-authored code.

I can also write extensive tests - with or without AI assistance - and treat AI-generated code as a powerful accelerator, not something to trust blindly. I probably wouldn’t yet build a highly sensitive private system with heavy reliance on Claude Code alone. But the pace of improvement is extraordinary, and it feels plausible that we’re only months away from tooling that’s secure enough for far more sensitive workloads.

For now, my website is public anyway - and I’m genuinely enjoying the increased sense of ownership over my writing and my code.

As AI collapses the cost of writing code, ownership - not convenience - becomes the real design decision.