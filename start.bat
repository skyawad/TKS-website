@echo off
setlocal
cd /d "%~dp0"

if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 goto :error
)

echo Starting Vite dev server on http://localhost:5173 ...
start "" http://localhost:5173
call npm run dev
goto :eof

:error
echo.
echo npm install failed. Aborting.
exit /b 1
