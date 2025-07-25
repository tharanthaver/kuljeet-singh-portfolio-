# Portfolio Deployment Script for Netlify
# This script automates the deployment process

Write-Host "🚀 Starting Portfolio Deployment Process..." -ForegroundColor Green

# Step 1: Check if we're in a Git repository
Write-Host "📂 Checking Git repository status..." -ForegroundColor Yellow
if (-not (Test-Path ".git")) {
    Write-Host "❌ Not a Git repository. Initializing..." -ForegroundColor Red
    git init
    git config user.email "portfolio@example.com"
    git config user.name "Portfolio Owner"
}

# Step 2: Add and commit changes
Write-Host "📝 Adding and committing changes..." -ForegroundColor Yellow
git add .
git status

$commitMessage = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

git commit -m "$commitMessage"

# Step 3: Display deployment options
Write-Host "`n🎯 Choose your deployment method:" -ForegroundColor Cyan
Write-Host "1. 📤 Manual deployment (Drag & Drop to Netlify)" -ForegroundColor White
Write-Host "2. 🔗 Git-based deployment (Connect to GitHub/GitLab)" -ForegroundColor White
Write-Host "3. 🌐 Netlify CLI deployment" -ForegroundColor White

$choice = Read-Host "Enter your choice (1, 2, or 3)"

switch ($choice) {
    "1" {
        Write-Host "`n📦 MANUAL DEPLOYMENT INSTRUCTIONS:" -ForegroundColor Green
        Write-Host "1. Open https://netlify.com in your browser" -ForegroundColor White
        Write-Host "2. Sign up/Login to your account" -ForegroundColor White
        Write-Host "3. Click 'Add new site' → 'Deploy manually'" -ForegroundColor White
        Write-Host "4. Drag and drop this entire folder to Netlify" -ForegroundColor White
        Write-Host "5. Your site will be live instantly!" -ForegroundColor White
        
        # Open file explorer to the current directory
        Write-Host "`n📁 Opening current directory..." -ForegroundColor Yellow
        Invoke-Item .
        
        # Open Netlify in browser
        Write-Host "🌐 Opening Netlify in browser..." -ForegroundColor Yellow
        Start-Process "https://app.netlify.com/drop"
    }
    
    "2" {
        Write-Host "`n🔗 GIT-BASED DEPLOYMENT INSTRUCTIONS:" -ForegroundColor Green
        Write-Host "1. Create a repository on GitHub/GitLab/Bitbucket" -ForegroundColor White
        Write-Host "2. Copy the repository URL" -ForegroundColor White
        
        $repoUrl = Read-Host "Enter your repository URL (e.g., https://github.com/username/portfolio.git)"
        
        if (![string]::IsNullOrWhiteSpace($repoUrl)) {
            Write-Host "📤 Adding remote and pushing to repository..." -ForegroundColor Yellow
            git remote add origin $repoUrl
            git branch -M main
            git push -u origin main
            
            Write-Host "`n3. Go to https://netlify.com and login" -ForegroundColor White
            Write-Host "4. Click 'Add new site' → 'Import from Git'" -ForegroundColor White
            Write-Host "5. Connect your Git provider and select your repository" -ForegroundColor White
            Write-Host "6. Deploy settings:" -ForegroundColor White
            Write-Host "   - Build command: (leave empty)" -ForegroundColor Gray
            Write-Host "   - Publish directory: ." -ForegroundColor Gray
            Write-Host "7. Click 'Deploy site'" -ForegroundColor White
            
            # Open Netlify
            Start-Process "https://app.netlify.com/start"
        }
    }
    
    "3" {
        Write-Host "`n🛠️ NETLIFY CLI DEPLOYMENT:" -ForegroundColor Green
        Write-Host "Checking if Netlify CLI is installed..." -ForegroundColor Yellow
        
        try {
            $cliVersion = netlify --version
            Write-Host "✅ Netlify CLI found: $cliVersion" -ForegroundColor Green
            
            Write-Host "🔐 Please login to Netlify..." -ForegroundColor Yellow
            netlify login
            
            Write-Host "🚀 Deploying to Netlify..." -ForegroundColor Yellow
            netlify deploy --prod --dir=.
            
        } catch {
            Write-Host "❌ Netlify CLI not found. Installing..." -ForegroundColor Red
            Write-Host "Please install Node.js first, then run: npm install -g netlify-cli" -ForegroundColor Yellow
            Write-Host "Or use option 1 or 2 above." -ForegroundColor Yellow
        }
    }
    
    default {
        Write-Host "❌ Invalid choice. Please run the script again." -ForegroundColor Red
    }
}

Write-Host "`n✨ Deployment process completed!" -ForegroundColor Green
Write-Host "📄 Your netlify.toml configuration file has been created for optimized deployment." -ForegroundColor Cyan

# Show final tips
Write-Host "`n💡 TIPS:" -ForegroundColor Cyan
Write-Host "• Your site URL will be: https://random-name.netlify.app (you can customize this)" -ForegroundColor White
Write-Host "• Enable automatic deployments for continuous updates" -ForegroundColor White
Write-Host "• Add a custom domain in Netlify dashboard if needed" -ForegroundColor White
Write-Host "• Check Netlify Analytics for visitor insights" -ForegroundColor White

Read-Host "`nPress Enter to exit"
