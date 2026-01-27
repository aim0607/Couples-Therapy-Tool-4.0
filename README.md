# Couples Therapy Assessment Tool

A beautiful, AI-powered relationship assessment tool that provides deep insights into your relationship patterns, attachment styles, communication dynamics, and more.

## Features

- 🎯 **6 Comprehensive Modules**: Enneagram, Attachment Theory, Communication, Conflict Patterns, Love Languages, and Relationship Vision
- 🤖 **AI-Powered Analysis**: Uses Claude AI to generate deeply personalized 10,000-word profiles
- 🎨 **Beautiful Design**: Calming, therapeutic aesthetic with smooth animations
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- 💾 **Downloadable Results**: Save your profile as a text file

## Quick Deploy to Vercel (Recommended - 5 Minutes)

### Prerequisites
1. A free [Vercel account](https://vercel.com/signup)
2. An [Anthropic API key](https://console.anthropic.com/) (they offer free trial credits!)

### Deployment Steps

#### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Download this folder** to your computer

2. **Go to [Vercel](https://vercel.com)** and sign up/log in

3. **Click "Add New Project"**

4. **Import your project**:
   - Click "Import" (not from Git, just upload)
   - Drag and drop this entire `couples-therapy-app` folder
   - Or click "Browse" and select the folder

5. **Configure your project**:
   - Give it a name (e.g., "couples-therapy" or "relationship-insights")
   - Click on "Environment Variables"
   - Add: `ANTHROPIC_API_KEY` = `your_actual_api_key_here`

6. **Click "Deploy"**

7. **Done!** ✨ 
   - Your site will be live at `your-project-name.vercel.app`
   - Share this URL with friends!

#### Option 2: Deploy via GitHub (Recommended for ongoing updates)

1. **Create a GitHub account** if you don't have one

2. **Create a new repository**:
   - Go to GitHub.com
   - Click "New repository"
   - Name it (e.g., "couples-therapy-tool")
   - Make it Public or Private (your choice)
   - Don't initialize with README

3. **Upload your code**:
   - Download GitHub Desktop or use command line
   - Upload this entire folder to your new repository

4. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Click "Add New Project"
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Add environment variable: `ANTHROPIC_API_KEY`
   - Click "Deploy"

5. **Automatic Updates**:
   - Now whenever you push changes to GitHub, Vercel will auto-deploy!

## Getting Your Anthropic API Key

1. Go to [console.anthropic.com](https://console.anthropic.com/)
2. Sign up for an account (they offer $5 free trial credits)
3. Go to "API Keys" section
4. Click "Create Key"
5. Copy your key and use it in Vercel's environment variables

**Cost Note**: Each profile generation costs roughly $0.15-0.25 with Claude Sonnet 4. The free trial gives you plenty of credits to test with friends!

## Custom Domain (Optional)

Want `mycoolapp.com` instead of `.vercel.app`?

1. **Buy a domain** from:
   - [Namecheap](https://www.namecheap.com/) (~$10/year)
   - [Google Domains](https://domains.google/)
   - [Cloudflare](https://www.cloudflare.com/products/registrar/)

2. **In Vercel**:
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain
   - Follow Vercel's instructions to point your domain to Vercel

3. **Done!** Your site is now at your custom domain 🎉

## Local Development (Optional)

Want to run it on your computer first?

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Then edit .env and add your ANTHROPIC_API_KEY

# Run development server
npm run dev

# Open http://localhost:3000
```

## Troubleshooting

### "API Key is Invalid"
- Make sure you copied the entire key from Anthropic
- Check that you added it in Vercel's environment variables (not in your code)
- Redeploy after adding environment variables

### "Profile Generation Failed"
- Check your Anthropic API credits at console.anthropic.com
- Make sure your API key has proper permissions

### Site Won't Load
- Check the Vercel deployment logs
- Make sure all files were uploaded correctly
- Try redeploying

## Support

Questions? Issues? Create an issue on GitHub or reach out!

## License

Free to use and modify for personal or commercial projects.

---

Built with ❤️ using Next.js, React, and Claude AI
