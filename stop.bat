@echo off
setlocal

echo Stopping Vite dev server on port 5173...

set "FOUND="
for /f "tokens=5" %%P in ('netstat -ano ^| findstr /R /C:":5173[ ]*.*LISTENING"') do (
  set "FOUND=1"
  echo Killing PID %%P
  taskkill /F /PID %%P >nul 2>&1
)

if not defined FOUND (
  echo No process is listening on port 5173.
)

endlocal
