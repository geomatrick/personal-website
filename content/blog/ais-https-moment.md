---
title: "AI's HTTPS Moment"
date: "2026-03-17"
categories: ["AI", "Privacy", "Cryptography"]
description: "Every prompt you send to an AI model is visible to the provider. The first lab to change that will unlock entirely new markets."
---

# AI's HTTPS Moment

It seems to me that the first AI lab to offer e2e private inference will break the market open.

The history of the internet is full of moments where one player raised the floor on privacy or security, and the entire market had to follow.

In 2018, Chrome started marking HTTP sites as "Not Secure." Web admins who had been putting off HTTPS for years suddenly had a deadline. One browser's UI change became an industry mandate. Not because of regulation. Because users saw the warning and stopped trusting the site.

Apple shipped Touch ID in 2013. Within two years, every major Android offering had fingerprint auth. Passwords as the default auth method never recovered.

I also clearly recall when Whatsapp launched e2e encryption.

The pattern is always the same. One player makes the privacy feature the default. Everyone else scrambles.

AI inference is next.

Right now, sending in your prompt means sending data to someone else's server. You trust the infrastructure, its operators, the frontier lab and maybe other parties along the way.

For small companies, that's a calculated risk. For enterprises in regulated industries, it's often a blocker. For anything involving patient data, financial records, trade secrets, or model weights, it's a no-go.

The question has never been whether enterprises or individuals want their inference to be private. Everyone obviously does. The question has been whether it was technically feasible to have confidentiality at production speed and scale.

That constraint is fast disappearing.

Trusted Execution Environments (TEEs) now make it possible to run inference inside a hardware-isolated enclave. The computing happens and your data stays private. Not because you're trusting the provider's policies. Because TEE cryptography enforces it. TEEs are compatible with the latest CPUs, GPUs and now support multi GPU architectures.

But this isnt just about making enterprises happy. Let's point out that private inference is a huge win for the AI labs too.

When a lab runs inference on its own infrastructure, the weights are safe by default. But most enterprises don't want their data leaving their environment. I call this the inference standoff. Weights in one trust domain, data in another. Neither side will budge. So the lab faces a choice: turn down the enterprise deal, or find a way to deploy the model somewhere the customer controls.

That's historically been a painful tradeoff. Sending weights to a customer's data center means trusting their security posture. Weights are extraordinarily valuable. They represent years of compute, proprietary training decisions, and competitive advantage. Letting them sit unprotected on someone else's hardware is a significant exposure.

Private inference changes the calculus entirely.

If the weights are loaded inside a TEE on the customer's infrastructure, they are encrypted at rest, decrypted only inside the hardware enclave, and never exposed to the host system. The customer's data never leaves. The lab's weights never leave either, even though the compute is running on-prem.

This is what Anthropic described in their recent confidential inference research: model weights can be stored encrypted, decrypted at the trusted loader, and never released from there. The inference runs. Neither party has to trust the other. The hardware enforces it.

For AI labs, this is a distribution unlock. On-prem deployment stops being a liability and becomes a sales motion. Air-gapped environments, sovereign cloud requirements, regulated industries - all of these become reachable without giving up IP. A lab can let its model run on another provider's infrastructure without that provider being able to read the weights.

The lab extends its market. The enterprise gets compliance. Neither has to compromise.

The lab that ships this as a default, not a footnote, will do what Chrome did to HTTP.

They won't win because their model is better. They'll win because their model is the only one a compliance team will approve. The only one a CISO will sign off on. The only one that can touch the data that actually matters. And once one lab does it, the others will have to follow.



