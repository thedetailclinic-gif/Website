# thedetailclinic.com → Vercel — your checklist

## Already done (on Vercel)

- [x] **`thedetailclinic.com`** added to project **detail-clinic**
- [x] **`www.thedetailclinic.com`** added
- [x] Latest good deploy is already **Production** (`detail-clinic-8fjhvq56f…`)

---

## What YOU must do (DNS) — ~5 minutes

Your domain uses **Cloudflare nameservers** (`clay.ns.cloudflare.com`, `ulla.ns.cloudflare.com`).  
**DNS is edited in Cloudflare**, not in GoDaddy. (GoDaddy is only where you bought the domain.)

### Step 1 — Open Cloudflare

1. Go to **[dash.cloudflare.com](https://dash.cloudflare.com)** and log in.
2. Click the zone **`thedetailclinic.com`**.

### Step 2 — DNS records

Open **DNS** → **Records**.

**Remove or fix** anything that conflicts:

- Old **A** on **`@`** or **`thedetailclinic.com`** pointing elsewhere (parking, old host).
- Old **A** or **CNAME** on **`www`** pointing elsewhere.

**Add (or edit to match exactly):**

| Type | Name | IPv4 / Target | Proxy status |
|------|------|----------------|--------------|
| **A** | **`@`** (or root) | **`76.76.21.21`** | **DNS only** (grey cloud ☁️) |
| **A** | **`www`** | **`76.76.21.21`** | **DNS only** (grey cloud) |

**Important:** For Vercel, **turn OFF “Proxied”** (orange cloud) for these records — use **DNS only**.  
Orange proxy often breaks Vercel SSL / routing.

Save.

### Step 3 — Wait & check

- SSL on Vercel usually works within **~15–60 minutes** after DNS propagates.
- Vercel → **detail-clinic** → **Settings** → **Domains** → both domains should show **Valid**.

Test: **https://thedetailclinic.com** and **https://www.thedetailclinic.com**

---

## If you insist on managing DNS only in GoDaddy

You would change the domain’s **nameservers** at GoDaddy from Cloudflare to **GoDaddy’s default** — then add the same **A** records there. That breaks Cloudflare-managed DNS until you recreate everything; only do this if you know you want GoDaddy DNS.

---

## GoDaddy (reference only)

**Domains** → **thedetailclinic.com** → if it says nameservers are Cloudflare, **editing DNS in GoDaddy will not change the live site** until nameservers point to GoDaddy.

---

## Short version

1. **Cloudflare** → **thedetailclinic.com** → **DNS**  
2. **A @ → 76.76.21.21** (DNS only)  
3. **A www → 76.76.21.21** (DNS only)  
4. Wait → open **https://thedetailclinic.com**
