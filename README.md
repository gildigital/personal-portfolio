# Gil Martinez — Portfolio

Personal site of **Gil Martinez**, a semiconductor **Equipment Engineer** specializing in
**dry etch** and **high-vacuum** toolsets. The site presents plasma etch process & hardware
troubleshooting, RF/bias tuning, ESC/dechuck and chamber recovery work, PM development, and
fleet sustaining across multiple OEM platforms — backed by a physics background and a
first-author publication in *Soft Matter*.

Live: <https://gilmartinez.org>

---

## Tech

- **Frontend:** React, TypeScript, Tailwind CSS, [shadcn/ui](https://ui.shadcn.com/)
- **Build:** Vite
- **Backend:** Node.js (contact form via Brevo SMTP)
- **Hosting:** Vercel

## Sections

- **Hero** — positioning, animated wafer graphic, headline metrics
- **Capabilities** — plasma/dry etch, high vacuum, RF/bias & process, tool reliability + OEM platforms
- **Experience** — Skorpios (equipment engineering), USAF (precision hardware), USD (research)
- **Selected Work** — equipment case studies (problem → action → result)
- **Research** — *Soft Matter* publication and quantitative analysis
- **Contact** — equipment & process engineering opportunities

## Run locally

```bash
git clone https://github.com/gildigital/personal-portfolio.git
cd personal-portfolio
npm install
npm run dev
```

## Deploy

Push to `main`; Vercel auto-builds (Vite settings auto-detected).

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```
