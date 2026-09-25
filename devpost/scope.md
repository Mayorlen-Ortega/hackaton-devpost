---
doc: scope
status: approved
---

# Lost-to-Found Pet Matching for Coquimbo

A responsive local web platform that helps people who have lost a pet discover relevant found-pet reports through explainable, AI-assisted matching.

## The Unique Kernel
When a new found-pet report is created in the POC, the platform automatically compares it with lost-pet reports and surfaces possible connections that the owner might otherwise miss. Each suggestion explains its evidence across visual similarity, physical characteristics, geographic proximity, and compatible dates, while clearly leaving the final judgment to the person.

## Who It's For
A person in the Coquimbo region who has lost a pet and is trying to find it. Today they post photos across local Facebook and WhatsApp groups and manually monitor found-animal posts across scattered social networks, with no easy way to know whether a new report could be theirs.

Found-pet reporters are the second participant: they add a report that can become a possible match for an existing lost-pet report.

## The Core Loop
A person creates a lost-pet report with a photo and relevant details. A found-pet report is then added with its own photo, location, date, and characteristics. The platform compares the reports, surfaces a possible match on the lost-pet report, and shows the evidence so the person can open both reports side by side and make a judgment. The service is valuable when a new found report becomes relevant without the owner manually searching every listing.

## Inspiration & Identity
The project is grounded in local community support in Coquimbo, Chile. It should feel practical, trustworthy, humane, and clear rather than like a chatbot or an AI showcase. The interface should make the reports and match evidence easy to compare at a glance.

## Why This Matters to the Learner
The learner wants to build something with a real local-community purpose around animals and social good. They want to learn how to move from an idea through a scope, PRD, technical spec, and working POC with an AI coding agent. They are especially interested in making AI useful without making it the product itself, and in making its matching reasoning understandable.

## What "Working" Looks Like
In a one-minute demo, the user creates, or selects already available sample data for, a lost-pet report for a dog with a photo, name, color, markings, location, and date lost. They then create, or select, a found-pet report for a dog in the same region with a different photo, location, date, and basic characteristics. The system analyzes both and automatically shows a "Possible match" card on the lost report with the found photo, a similarity or match indication, and explanations for visual, physical, geographic, and date evidence. The user opens the suggestion and compares the reports side by side.

The compelling moment is seeing the new found-pet report surface as a relevant possible match instead of having the owner search through listings.

## The POC Boundary
- Responsive web experience for the Coquimbo region.
- Create and view lost-pet and found-pet reports with photos and the details needed for matching.
- Compare a small set of sample reports and surface a possible match automatically.
- Show an understandable evidence breakdown and a non-definitive similarity or match indication, without implying a calibrated statistical confidence score.
- Open a suggested match in a side-by-side comparison.
- Keep the matching process focused on the POC's meaningful AI role: combining image similarity with contextual signals such as characteristics, location, and dates.

## Later
- Real user accounts and contact workflows.
- Production notifications through email, SMS, WhatsApp, or push.
- Follow-up messages that ask whether a report is resolved and archive or update it.
- Broader geographic coverage beyond Coquimbo.
- Moderation, privacy controls, abuse prevention, and production-scale image or machine-learning infrastructure.

## Explicitly Cut
- Native mobile apps: the first version is a responsive web application.
- A chatbot as the main experience: the AI contributes through matching and evidence, not conversation.
- A complete production platform: deployment, accounts, and real notification delivery are unnecessary for the POC.
- Confirming that two reports refer to the same animal: the system only suggests a possible match and supports human judgment.
- Large-scale data and many advanced features: a small set of sample data is enough to prove the core loop within the hackathon.
