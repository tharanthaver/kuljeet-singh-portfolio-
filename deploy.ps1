# PowerShell script to deploy to Netlify
# First, check if Netlify CLI is installed
if (!(Get-Command netlify -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Netlify CLI..."
    npm install -g netlify-cli
}

# Deploy to Netlify
Write-Host "Deploying to Netlify..."
netlify deploy --prod --dir .
