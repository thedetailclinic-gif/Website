# Go live with your domain on GoDaddy

Your site is **Next.js** with a server API (`/api/an-token`). **GoDaddy’s normal web hosting (cPanel / “Linux Hosting”) does not run Node.js**, so you cannot upload this project there like a PHP site.

You have two realistic options:

---

## Option A — Recommended: Domain on GoDaddy, site on **Vercel**

Keep paying GoDaddy for **thedetailclinic.com** (or your domain). Host the app on **Vercel** (free tier is enough for many sites; made for Next.js). Visitors only see your GoDaddy domain.

### Fastest: Vercel CLI (no GitHub needed)

Good if you want **live in minutes from the terminal**. You still set **GoDaddy DNS once** in the browser (no practical all-CLI option there).

```bash
npm i -g vercel
cd "/Users/macmini/Desktop/Detail Clinic"
vercel login
vercel              # first deploy (preview); answer prompts
vercel env add AN_API_KEY production   # paste your key
vercel --prod       # production URL, e.g. *.vercel.app
```

Then: **Vercel dashboard → Domains** → add your domain → copy DNS into **GoDaddy → DNS** (same as step 3 below).

---

### Alternative: GitHub + Vercel website

### 1. Put the code on GitHub

If this folder isn’t in git yet:

```bash
cd "/Users/macmini/Desktop/Detail Clinic"
git init
echo "node_modules/
.next/
.env
.env*.local" >> .gitignore
git add .
git commit -m "Initial commit"
```

Create a new repo on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (GitHub login is easiest).
2. **Add New Project** → import your GitHub repo.
3. Framework: **Next.js** (auto-detected). Deploy.
4. After deploy: **Project → Settings → Environment Variables**  
   Add **`AN_API_KEY`** = your real key (same as local `.env`).  
   Redeploy if the first build failed without it.

### 3. Connect your GoDaddy domain

1. Vercel: **Project → Settings → Domains** → add `thedetailclinic.com` and `www.thedetailclinic.com`.
2. Vercel will show **exact DNS records** to add.
3. GoDaddy: **My Products → your domain → DNS** (or **Manage DNS**).

Typical setup (confirm against what Vercel shows):

| Type | Name | Value |
|------|------|--------|
| **A** | `@` | Vercel’s IP (shown in Vercel, often `76.76.21.21`) |
| **CNAME** | `www` | `cname.vercel-dns.com` |

Remove conflicting old **A**/**CNAME** records for `@` and `www` if GoDaddy had parked defaults.

DNS can take **15 minutes to 48 hours** to propagate.

### 4. HTTPS

Vercel issues **SSL automatically** once DNS is correct. No extra certificate purchase needed on GoDaddy for the Vercel-hosted site.

---

## Option B: **GoDaddy VPS** (you manage the server)

If you specifically want the app running on GoDaddy infrastructure:

1. Buy a **VPS** from GoDaddy (Linux, e.g. Ubuntu).
2. Install **Node.js 20+**, clone your repo, run `npm ci && npm run build && npm start` (or use **PM2** to keep `next start` running).
3. Put **Nginx** in front as reverse proxy to `localhost:3000`.
4. Point your domain’s **A record** to the VPS IP; use **Let’s Encrypt** for HTTPS.

This is more work and you handle updates, security, and backups yourself.

---

## Summary

| Plan | Works for this Next.js app? |
|------|-----------------------------|
| GoDaddy shared / cPanel hosting | **No** (no Node server) |
| **GoDaddy domain + Vercel** | **Yes** (recommended) |
| GoDaddy VPS + Node + Nginx | **Yes** (advanced) |

If you tell us whether you’re using **Vercel** or **VPS**, we can narrow steps (e.g. exact GoDaddy DNS screenshots flow).
