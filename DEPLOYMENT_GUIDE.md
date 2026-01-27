# 🚀 Step-by-Step Deployment Guide
## Deploy Your Couples Therapy App to Vercel in 5 Minutes

This guide will walk you through deploying your app **completely free** with no technical experience required!

---

## ✅ What You'll Need

1. **5 minutes of time**
2. **A free Vercel account** (we'll create this together)
3. **A free Anthropic API key** (we'll get this together)
4. **This couples-therapy-app folder**

**Total Cost**: $0.00 (completely free!)

---

## 📋 Step 1: Get Your Anthropic API Key (2 minutes)

Your app uses Claude AI to generate the personalized profiles. Here's how to get your API key:

1. **Go to**: https://console.anthropic.com/

2. **Sign up** for a free account
   - Use your email address
   - Verify your email
   - You'll get **$5 in free credits** to start!

3. **Create an API Key**:
   - Once logged in, look for "API Keys" in the left sidebar
   - Click **"Create Key"**
   - Give it a name like "Couples Therapy App"
   - Click **"Create Key"**

4. **Copy your key**:
   - It will look something like: `sk-ant-api03-xxx...`
   - **IMPORTANT**: Copy this entire key and save it somewhere safe
   - You won't be able to see it again!

✅ **Done!** Keep this key handy - you'll need it in Step 3.

---

## 📋 Step 2: Create Your Vercel Account (1 minute)

Vercel will host your website for free and give you a URL to share.

1. **Go to**: https://vercel.com/signup

2. **Sign up** using one of these options:
   - GitHub account (recommended if you have one)
   - GitLab account
   - Bitbucket account
   - Email address

3. **Complete verification** if prompted

✅ **Done!** You now have a Vercel account.

---

## 📋 Step 3: Deploy Your App (2 minutes)

Now the fun part - let's get your app live!

### Method A: Direct Upload (Easiest - No GitHub Needed)

1. **Prepare your folder**:
   - Make sure the entire `couples-therapy-app` folder is on your computer
   - Note where it's located (Desktop, Downloads, etc.)

2. **Go to Vercel Dashboard**:
   - Visit: https://vercel.com/dashboard
   - Click the **"Add New..."** button (top right)
   - Select **"Project"**

3. **Import your project**:
   - Look for "Import Git Repository" section
   - Instead, scroll down and you'll see **"Or, import from a template"**
   - Actually, just drag and drop your entire `couples-therapy-app` folder onto the page
   - Or click **"Browse"** to select it from your computer

4. **Configure your project**:
   - **Project Name**: Give it a name (e.g., "relationship-insights" or "couples-therapy")
     - This will become your URL: `your-name.vercel.app`
   - **Framework Preset**: Should auto-detect "Next.js" ✅
   - **Root Directory**: Leave as `./`

5. **Add Environment Variables** (CRITICAL):
   - Click **"Environment Variables"** to expand that section
   - Add a new variable:
     - **Key**: `ANTHROPIC_API_KEY`
     - **Value**: Paste your API key from Step 1
   - Click **"Add"**

6. **Deploy**:
   - Click the big **"Deploy"** button
   - Wait 1-2 minutes while Vercel builds your site
   - You'll see a fun animation and progress updates

7. **Success! 🎉**
   - When complete, you'll see a success screen
   - Click **"Visit"** to see your live site
   - Your URL will be: `https://your-project-name.vercel.app`

✅ **Your app is now LIVE!** Share the URL with friends!

### Method B: Via GitHub (Better for Updates)

If you want to be able to make changes later:

1. **Create a GitHub account** at https://github.com/signup

2. **Create a new repository**:
   - Click the **"+"** icon (top right) → "New repository"
   - Name it (e.g., "couples-therapy-tool")
   - Choose Public or Private
   - Click **"Create repository"**

3. **Upload your code**:
   - Click **"uploading an existing file"**
   - Drag and drop ALL files from `couples-therapy-app` folder
   - Click **"Commit changes"**

4. **Connect to Vercel**:
   - Go back to https://vercel.com/dashboard
   - Click **"Add New..."** → "Project"
   - Click **"Import Git Repository"**
   - Select your repository
   - Add environment variable: `ANTHROPIC_API_KEY` = your key
   - Click **"Deploy"**

✅ **Done!** Future updates: just push to GitHub and Vercel auto-deploys.

---

## 🎯 Testing Your App

1. **Visit your URL**: `https://your-project-name.vercel.app`

2. **Test it out**:
   - Enter your name
   - Go through a few questions
   - Generate a profile

3. **Share with friends!**
   - Just send them your Vercel URL
   - They can use it immediately
   - No downloads or sign-ups needed

---

## 💰 Cost Breakdown

| Item | Cost |
|------|------|
| Vercel Hosting | **FREE** (unlimited) |
| Vercel Domain | **FREE** (`.vercel.app` subdomain) |
| Anthropic API | **$5 FREE credits** then ~$0.20 per profile |
| Custom Domain | **Optional** - $10-15/year if you want `yourname.com` |

**Typical usage**: With $5 free credits, you can generate **~25-30 profiles** for free!

---

## 🎨 Optional: Add a Custom Domain

Want `mycoolapp.com` instead of `.vercel.app`?

1. **Buy a domain**:
   - [Namecheap](https://www.namecheap.com/) - $8-12/year
   - [Google Domains](https://domains.google/) - $12/year
   - [Cloudflare](https://www.cloudflare.com/products/registrar/) - At-cost pricing

2. **Add to Vercel**:
   - Go to your project in Vercel
   - Click **"Settings"** → **"Domains"**
   - Enter your domain name
   - Follow the instructions to update DNS settings
   - Wait 5-30 minutes for DNS to propagate

3. **Done!** Your app is now at your custom domain.

---

## 🔧 Troubleshooting

### "Cannot read environment variable"
- **Fix**: Make sure you added `ANTHROPIC_API_KEY` in Vercel's environment variables
- Go to Project → Settings → Environment Variables
- Add it there (not in your code files!)
- Redeploy

### "Profile generation failed"
- **Check**: Do you have API credits left?
  - Visit https://console.anthropic.com/
  - Check your usage/credits
- **Check**: Did you copy the entire API key correctly?

### Site won't load
- **Check deployment logs**:
  - Go to your project in Vercel
  - Click "Deployments"
  - Click on the latest deployment
  - Look for any error messages
- **Try**: Redeploy by clicking "Redeploy" button

### Need to change your API key
1. Go to Vercel project → Settings → Environment Variables
2. Edit the `ANTHROPIC_API_KEY` variable
3. Click "Redeploy" on your latest deployment

---

## 📊 Monitoring Usage

**Check how many profiles have been generated**:
1. Go to https://console.anthropic.com/
2. Click "Usage" in sidebar
3. See your API usage and remaining credits

**Add more credits** (when needed):
1. In Anthropic console, click "Billing"
2. Add a payment method
3. Set a budget limit (recommended: $10-20/month)
4. Only pay for what you use!

---

## 🎉 You're Done!

Congratulations! Your Couples Therapy Assessment Tool is now:
- ✅ Live on the internet
- ✅ Free to use
- ✅ Sharable via a simple URL
- ✅ Fully functional with AI-powered insights

**Share your URL with friends and watch the magic happen!**

---

## 📞 Need Help?

- **Vercel Documentation**: https://vercel.com/docs
- **Anthropic Documentation**: https://docs.anthropic.com/
- **Next.js Documentation**: https://nextjs.org/docs

Enjoy your new app! ❤️
