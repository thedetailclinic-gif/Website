# What’s already done vs what you run locally

## Done on this machine

- Git repo initialized on **`main`**
- Remote: **`https://github.com/thedetailclinic-gif/Website.git`**
- Initial commit (**123 files**) — site code + `public/` assets
- **`.gitignore`** updated so you **don’t** upload:
  - `Pictures/` (~1.6GB), `*.mov`, `node_modules`, `.env`, `.next`, dev folders
- **`npm run build`** verified — production build succeeds

## You run (GitHub — one time)

In **Terminal** (on your Mac, not headless):

```bash
cd "/Users/macmini/Desktop/Detail Clinic"
git push -u origin main
```

If it asks for credentials, use a **GitHub Personal Access Token** as the password, or:

```bash
brew install gh
gh auth login
git push -u origin main
```

## You run (Vercel — you’re already logged in)

```bash
cd "/Users/macmini/Desktop/Detail Clinic"
npx vercel@latest link
npx vercel@latest env add AN_API_KEY production
npx vercel@latest --prod
```

Then domains + GoDaddy DNS per **`GO-LIVE.md`**.

**Optional:** In Vercel dashboard, **Connect Git** → `thedetailclinic-gif/Website` so every `git push` auto-deploys.
