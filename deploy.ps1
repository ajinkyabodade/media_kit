# ─────────────────────────────────────────────────────────────
# deploy.ps1  —  Build + commit source + push dist to gh-pages
# Run automatically via: npm run build
# ─────────────────────────────────────────────────────────────

$ErrorActionPreference = "Stop"
$ROOT    = "C:\projects\media_kit"
$DIST    = "$ROOT\dist"
$TEMP    = "C:\projects\_media_kit_deploy"
$REMOTE  = "https://github.com/ajinkyabodade/media_kit.git"

Write-Host "`n[1/4] Committing source changes to main..." -ForegroundColor Cyan
Set-Location $ROOT
git add -A
$status = git status --porcelain
if ($status) {
    $msg = "chore: auto-deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    git commit -m $msg
    git push origin main
    Write-Host "      Source pushed to main." -ForegroundColor Green
} else {
    Write-Host "      No source changes to commit." -ForegroundColor Yellow
}

Write-Host "`n[2/4] Preparing deploy folder..." -ForegroundColor Cyan
if (Test-Path $TEMP) { Remove-Item -Recurse -Force $TEMP }
New-Item -ItemType Directory -Path $TEMP | Out-Null
Copy-Item -Path "$DIST\*" -Destination $TEMP -Recurse -Force
Write-Host "      Copied dist/ to temp folder." -ForegroundColor Green

Write-Host "`n[3/4] Pushing dist/ to gh-pages branch..." -ForegroundColor Cyan
Set-Location $TEMP
git init -q
git checkout -b gh-pages
git add -A
git commit -m "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')" -q
git remote add origin $REMOTE
git push origin gh-pages --force
Write-Host "      gh-pages branch updated." -ForegroundColor Green

Write-Host "`n[4/4] Cleaning up..." -ForegroundColor Cyan
Set-Location $ROOT
Remove-Item -Recurse -Force $TEMP
Write-Host "      Done.`n" -ForegroundColor Green

Write-Host "Live at: https://ajinkyabodade.github.io/media_kit/" -ForegroundColor Magenta