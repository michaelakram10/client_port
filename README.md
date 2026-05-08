# Yousef Basem — Portfolio

A clean, hardware-aesthetic personal portfolio built with pure HTML, CSS, and JavaScript.
No frameworks, no build tools — just three files ready to go live in minutes.

---

## 🗂️ Project Structure

```
portfolio/
├── index.html    ← All page content and structure
├── styles.css    ← All styles, themes, and animations
├── script.js     ← Typewriter, scroll-spy, animations
└── README.md     ← This file
```

---

## 🚀 How to Deploy to GitHub Pages (Step by Step)

### Step 1 — Create a GitHub Account

If you don't have one, go to [github.com](https://github.com) and sign up for free.

---

### Step 2 — Create a New Repository

1. Click the **+** icon (top right) → **New repository**
2. Name it exactly: `your-username.github.io`
   - Example: if your GitHub username is `yousefbasem`, name it `yousefbasem.github.io`
   - This special name makes GitHub Pages serve it as your main site at `https://yousefbasem.github.io`
3. Set visibility to **Public**
4. Leave everything else as default → Click **Create repository**

---

### Step 3 — Download and Install Git (if not already installed)

- **Windows**: Download from [git-scm.com](https://git-scm.com/download/win) and install
- **Mac**: Open Terminal and run `git --version` — it will prompt you to install if missing
- **Linux**: Run `sudo apt install git`

Verify it works:
```bash
git --version
```

---

### Step 4 — Clone Your New Repository Locally

Open a terminal (Command Prompt / PowerShell / Terminal) and run:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io
```

Replace `YOUR-USERNAME` with your actual GitHub username.

This creates a folder on your computer. Navigate into it:

```bash
cd YOUR-USERNAME.github.io
```

---

### Step 5 — Add the Portfolio Files

Copy the three portfolio files into the cloned folder:

```
your-username.github.io/
├── index.html
├── styles.css
└── script.js
```

You can do this by dragging and dropping files in File Explorer / Finder,
or by running (from inside the folder):

```bash
cp /path/to/index.html .
cp /path/to/styles.css .
cp /path/to/script.js  .
```

---

### Step 6 — Commit and Push

```bash
# Stage all files
git add .

# Commit with a message
git commit -m "Initial portfolio launch"

# Push to GitHub
git push origin main
```

> If your default branch is called `master` instead of `main`, use `git push origin master`.

---

### Step 7 — Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io`
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar under "Code and automation")
4. Under **Source**, select **Deploy from a branch**
5. Choose branch: **main** (or master), folder: **/ (root)**
6. Click **Save**

GitHub will now build and deploy your site. This takes **1–3 minutes**.

---

### Step 8 — Visit Your Live Site 🎉

Open your browser and go to:

```
https://YOUR-USERNAME.github.io
```

That's it — your portfolio is live!

---

## ✏️ How to Customize Your Portfolio

All personal content is in `index.html`. Here are the key spots to update:

### Your Name & Hero Text
```html
<!-- In the hero section -->
<h1>Yousef <span>Basem.</span></h1>
```

### Social Links (LinkedIn & GitHub)
Search for `<!-- TODO:` in `index.html` and replace `#` with your real URLs:
```html
<a href="https://linkedin.com/in/YOUR-PROFILE" ...>
<a href="https://github.com/YOUR-USERNAME" ...>
```

### Email & Phone
```html
<a href="mailto:YOUR-EMAIL@gmail.com">YOUR-EMAIL@gmail.com</a>
<a href="tel:+20YOUR-NUMBER">(+20) YOUR-NUMBER</a>
```

### Adding New Projects
Copy an existing `<article class="project-card">` block and change the content.

### Changing Colors
Open `styles.css` and edit the CSS variables at the top:
```css
:root {
  --amber: #f0a500;   /* Main accent (gold) */
  --green: #2ddc82;   /* Secondary accent (green) */
  --bg:    #090d0c;   /* Page background */
}
```

---

## 🔄 Updating the Site After Changes

Every time you make changes, run these three commands from inside the folder:

```bash
git add .
git commit -m "Describe what you changed"
git push origin main
```

Your live site updates automatically within 1–2 minutes.

---

## 🛠️ Running Locally (Preview Before Publishing)

To preview the site locally without a server, simply open `index.html` in your browser.

For a more accurate local preview (especially if you add images or fetch requests later),
install [VS Code](https://code.visualstudio.com) and the
[Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer),
then right-click `index.html` → **Open with Live Server**.

---

## 📋 Checklist Before Going Live

- [ ] Replace LinkedIn `#` with your real LinkedIn URL
- [ ] Replace GitHub `#` with your real GitHub URL
- [ ] Confirm your email and phone number are correct
- [ ] Update the copyright year in the footer if needed
- [ ] Add any new projects you've built
- [ ] Test on mobile (use browser DevTools → device toolbar)

---

## 📄 License

Feel free to use, modify, and share this portfolio template.
Built and designed by Yousef Basem Eldesouky."# client_port" 
