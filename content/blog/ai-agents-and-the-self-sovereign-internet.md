---
title: "Everyone a Node: How AI Agents Are Delivering the Self-Sovereign Internet Web3 Couldn't"
date: "2026-03-06"
categories: ["AI", "Agents", "Decentralisation"]
description: "The original vision of the internet was peer-to-peer - every user a node, owning their own data. Web3 tried and failed to deliver it. AI agents and OpenClaw might actually get us there."
image: "/blog/ai-sovereign-internet/crab-ethernet.png"
---

## TL;DR

I spent years believing Web3 would deliver a more sovereign internet - one where individuals owned their own data, identity, and online presence. It hasn't yet. So far, it has honestly replaced one set of middlemen with another and added so much friction that most people just handed custody back to centralised services anyway.

Running OpenClaw recently reminded me of what that original vision actually felt like. A process running on my own hardware, acting on my behalf, storing my data. No platform in the middle.

AI agents might be the thing that actually gets us to that vision, not by rebuilding the internet from scratch, but by making it practical for ordinary people to run their own corner of it.

## The Original Vision

About a decade ago, I was drawn to Web3 because of its promise: a more equitable internet where individuals could own their data, identity, finances, and online presence, with no lock-in to platforms or applications. A decade on, I feel that - aside from a few pockets of purists who still care deeply about this - Web3 has lost sight of that vision. It hasn't made the internet more symmetric or peer-to-peer. If anything, it has continued to fleece the everyday user, often called the "retail investor." Right now it feels much more about the casino than the cause, and that's driving away the people who were in the space for the right reasons.

The internet's foundational architecture - RFC 791 and the early TCP/IP stack - didn't distinguish between clients and servers. Any node could send and receive. Tim Berners-Lee's original vision for the web was similarly symmetric: a read/write medium where individuals published and consumed in equal measure. What we ended up with was something very different. The economics of the web heavily favoured centralisation - it was simply cheaper and easier to have one company run the server than for millions of individuals to run their own. Convenience won. We became users of platforms rather than participants in a network. Signing up with a cloud provider to manage your email, your documents, your identity is frictionless. But what do you give away in the process?

When the AI boom started, I thought Web3 mattered more than ever. The big frontier labs would now be hoovering up everyone's data and would simply become the next generation of internet giants - a new set of entities with a disproportionate amount of power and influence. Don't get me wrong - that is a huge concern: Anthropic and OpenAI do have enormous influence now. But I've grown less convinced that Web3 is going to be the saviour here.

## Where Web3 Fell Short

Web3 was built on a genuinely compelling idea: use cryptography, distributed consensus and incentives to remove the need to trust any central party. In theory, you could own your identity, your data, and your assets without relying on any platform's continued goodwill.

In practice, it introduced enormous friction. Private key management has been an awful user experience. Gas fees made small interactions uneconomic and unpredictable. The infrastructure is expensive to run, slow to use, and required deep technical knowledge to navigate safely. The result was that most users delegated custody to exchanges and wallets, recreating exactly the trusted intermediaries they were supposed to escape.

Web3 replaced banks and platforms with a different set of centralised services. Self-sovereignty remained theoretical.

## What Web3 Got Right

It's worth separating Web3's execution from its original instincts, because the instincts were correct.

The belief that individuals should control their own data and identity is right. The insight that trustless protocols are more durable than trusted platforms is right. The mistake was assuming that token-driven networks and all their idiosyncrasies was the only path to get there - and that the promise of financial upside would sustain the movement long enough to solve the hard usability problems. Neither turned out to be true.

What was needed was a way to abstract the complexity away entirely, rather than forcing users to become fluent in it. That's exactly what AI agents offer.

## What AI Agents Change

The core barrier to a symmetric internet was never technical. The protocols existed. The barrier was cognitive and economic: running your own server required skills most people don't have, time most people won't spend, and a tolerance for friction that convenience-first platforms had trained out of us.

AI agents change the equation on all three fronts.

An agent can manage a personal server on your behalf - handling authentication, storage, routing, and uptime - without you needing to understand any of the underlying infrastructure. The overhead of running your own node collapses when you have a persistent process doing it for you. This isn't a marginal improvement. It's the difference between self-hosting being a hobby for engineers and it being something anyone can do. (One caveat is just the bills we may start having to pay for running these agents at scale.)

Identity is the clearest example. Today, your identity online is almost entirely mediated by platforms. You sign in with Google or Apple because managing your own credentials is too hard. An AI agent changes this: it can hold a private key on your device, respond to an authentication request from an app, and return a signed JWT - all without you ever seeing a cryptographic key directly. The security model is yours; the complexity is the agent's problem.

Data sovereignty follows the same logic. An agent can listen for updates to your centrally-stored data and maintain a local replica, in the same way that Git lets you clone a remote repository and work locally. You get the collaboration benefits of a central service without the lock-in. If the platform disappears or changes its terms, your data doesn't go with it.

And then there's something even more interesting: agent-to-agent communication via protocols like MCP means individuals can expose services and interact with others' services peer-to-peer, without either party needing to run traditional server infrastructure. Your agent talks to my agent. The network becomes symmetric again - not because we rebuilt the infrastructure from scratch, but because we put an intelligent layer on top of the infrastructure that already exists.

None of this requires the user to understand how any of it works. That is the point.

## OpenClaw's Role

A few weeks ago I gave OpenClaw a try. You can spin up an agent on your local computer - or a Mac Mini on your desk, which seems to be a popular approach for keeping things sandboxed and off your main machine. Once it's running, you connect it to something like Telegram and you can send your home device a job just by messaging your bot.

This suddenly felt like the old dream of everyone running their own server.

Technically it isn't quite that - without a fixed IP address, you'd need NAT traversal to accept inbound connections, and OpenClaw sidesteps this by polling Telegram for updates. So it remains a client in the strict sense. But one layer up, it's essentially a server: a persistent process running on your hardware, accepting tasks from authenticated senders, storing your data.

Right now only I can send my agent tasks, but it would be easy to extend access to others - which is exactly how peer-to-peer services would work in a more symmetric network.

If I have a process running on my own device, in my own home, creating and storing my data, acting on my behalf - and potentially managing access to financial services as the security matures - that feels closer to the original vision of the web than anything I came across in a decade of Web3.

## What Comes Next

I'm excited to see where OpenClaw and similar projects go. There are already so many things being built in this space - personal agents, local-first services, peer-to-peer data flows. The ecosystem is moving fast.

One honest caveat though: AI agents still make inference requests to the big frontier labs. In that sense, you're trading one form of trust for another - but the terms are different. You're not handing over your data to be monetised; you're using a service to power something you control. To get to truly sovereign computation, you'd need either powerful models running locally or private centralised inference. That's a real gap in the current architecture, and it's one I'm keeping a close eye on.

But the direction of travel feels right. The hope is that this movement holds both sovereignty and convenience as co-equal goals. Web3 purists prioritise decentralisation over usability. The risk for AI agents is the opposite - prioritising convenience so heavily that sovereignty becomes an afterthought. Getting that balance right is what will determine whether this time the vision actually lands.