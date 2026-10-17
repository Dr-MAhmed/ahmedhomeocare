# Ahmed Homeocare — website

Bilingual English/Urdu information website for Ahmed Homeopathic Clinic in Faisalabad. Built with Next.js, TypeScript, React, Lucide, and pnpm. Configured for static export and low-cost hosting.

## Live website
- Production: https://ahmedhomeocare.vercel.app/
- Health library: https://ahmedhomeocare.vercel.app/resources/
- FAQs: https://ahmedhomeocare.vercel.app/faq/
- Privacy notice: https://ahmedhomeocare.vercel.app/privacy/

## Included
- Responsive clinic homepage with English/Urdu toggle.
- Clinic contact link using WhatsApp number configured by the clinic: +92 303 5577306.
- Clinic hours and general area listing, with a reminder to confirm the exact address before travelling.
- Bilingual health education page, FAQ page, and privacy notice.
- Medical safety disclaimer, sitemap, and robots metadata route.
- No paid analytics, appointment system, patient database, or external video service is required.

## Requirements
- Node.js 22 LTS or another Next.js-supported LTS release
- pnpm 10+

## Run locally
```bash
pnpm install
pnpm dev
```
Open http://localhost:3000.

## Production build
```bash
pnpm build
```
The Next.js static export configuration in `next.config.ts` writes the deployable site to `out/`.

## Before treating the site as final
The website code is published, but the clinic must still verify factual details that cannot be established from the code:
1. Confirm the exact street address and whether the listed hours are still correct.
2. Verify both practitioners' qualifications, registration details, and experience statements before publishing them as verified credentials. The experience figures currently come from the clinic's supplied information.
3. Replace illustrated practitioner portraits with genuine approved photos if desired. Do not use generated or stock portraits as if they depict the practitioners.
4. Add only reviewed educational videos. Publish patient testimonials only with appropriate informed consent and privacy safeguards.
5. Review the privacy notice and medical content against applicable local requirements before adding forms, analytics, patient records, or other data collection.
6. The current live URL is a Vercel subdomain. Set a custom domain only after it has actually been registered and connected.

The site does not promise cures and should not be used to delay evidence-based or urgent medical care.

## Repository
https://github.com/Dr-MAhmed/ahmedhomeocare
