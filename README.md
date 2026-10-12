# Ahmed Homeocare — website starter

Fresh, bilingual English/Urdu starter for Ahmed Homeopathic Clinic. Built with Next.js, TypeScript, React, Lucide and pnpm. The first version is static-export friendly for low-cost hosting.

## Requirements
- Node.js 22 LTS or newer supported LTS
- pnpm 10+
- Git

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
The static website is generated into `out/`.

## Before publishing
1. Verify the clinic's official contact number, WhatsApp number, address, hours and doctor credentials.
2. Replace the placeholder WhatsApp number in `app/page.tsx`.
3. Add only real doctor photos and videos, with consent for patient testimonials.
4. Review all medical content for accuracy and local legal/advertising requirements. Do not promise guaranteed cures or advise delaying evidence-based care.
5. Configure the real domain after purchasing it; `ahmedhomeocare` is the chosen brand identifier, not a confirmed domain registration.

## GitHub
Create an empty repository named `ahmedhomeocare`, then:
```bash
git init
git add .
git commit -m "Initial Ahmed Homeocare website"
git branch -M main
git remote add origin https://github.com/Dr-MAhmed/ahmedhomeocare.git
git push -u origin main
```
If your GitHub username differs, change the remote URL. Do not create a README/license/gitignore on GitHub if you plan to push this existing starter as the first commit.
