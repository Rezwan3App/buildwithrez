# Push all local changes to GitHub (updates live site after Actions deploy)
Set-Location $PSScriptRoot
Write-Host "Adding all changes..." -ForegroundColor Cyan
git add -A
$status = git status --porcelain
if (-not $status) {
    Write-Host "Nothing to commit. Pushing any unpushed commits..." -ForegroundColor Yellow
} else {
    Write-Host "Committing..." -ForegroundColor Cyan
    git commit -m "Sync local to GitHub"
}
Write-Host "Pushing to origin main..." -ForegroundColor Cyan
git push origin main
if ($LASTEXITCODE -eq 0) {
    Write-Host "Done. Check Actions tab for deploy; then refresh www.buildwithrez.com" -ForegroundColor Green
} else {
    Write-Host "Push failed. Run these manually in PowerShell:" -ForegroundColor Red
    Write-Host "  cd $PSScriptRoot"
    Write-Host "  git add -A"
    Write-Host "  git commit -m 'Sync local to GitHub'"
    Write-Host "  git push origin main"
}
