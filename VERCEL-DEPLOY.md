# Deploy on Vercel (pick one path)

Your app needs **`AN_API_KEY`** on Vercel (same value as local `.env`).

---

## Path A — Connect GitHub (auto-deploy on every push) — **recommended**

1. Open **[vercel.com/new](https://vercel.com/new)** and sign in (same account you used for `vercel login`).

2. **Import Git Repository** → find **`thedetailclinic-gif/Website`**  
   - If it’s not listed: **Adjust GitHub App Permissions** / **Configure GitHub App** and allow access to that repo, then refresh.

3. **Configure Project**
   - **Framework Preset:** Next.js (auto)
   - **Root Directory:** `./` (leave default)
   - **Build Command:** `next build` (default)
   - **Output:** default (Next handles it)

4. **Environment Variables** (expand **Environment Variables** before clicking Deploy):
   - **Name:** `AN_API_KEY`  
   - **Value:** your key (from local `.env`)  
   - Check **Production**, **Preview**, and **Development** as you like (at least **Production**).

5. Click **Deploy**. Wait for the build (~2–5 min first time; large repo may take longer).

6. **Custom domain:** Project → **Settings** → **Domains** → add `thedetailclinic.com` / `www` → set DNS at GoDaddy per **`GO-LIVE.md`**.

After this, every **`git push`** to **`main`** triggers a new production deploy.

---

## Path B — CLI only (no Git auto-deploy)

Run on your Mac in the project folder:

```bash
cd "/Users/macmini/Desktop/Detail Clinic"
npx vercel@latest link          # link to new or existing Vercel project
npx vercel@latest env add AN_API_KEY production
npx vercel@latest env add AN_API_KEY preview   # optional
npx vercel@latest --prod
```

Then add domains in the dashboard or:

```bash
npx vercel@latest domains add YOURDOMAIN.com YOUR_VERCEL_PROJECT_NAME
```

---

## After deploy

| Check | Where |
|-------|--------|
| Live URL | Vercel project → **Deployments** → open latest |
| Env vars | **Settings** → **Environment Variables** |
| Logs | Deployment → **Building** / **Functions** logs |

If **build fails** (timeout / LFS): use **Path A** so Vercel clones from GitHub; if it still times out, we can trim repo size or use a deploy branch without `Pictures/`.

---

## Commit `.vercelignore` (optional but good)

```bash
git add .vercelignore VERCEL-DEPLOY.md
git commit -m "chore: Vercel deploy notes + vercelignore"
git push origin main
```

(Path A will pick this up on the next push.)
