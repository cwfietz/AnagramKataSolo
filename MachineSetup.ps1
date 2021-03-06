# How to run this file:
#  PS> iwr -useb https://raw.githubusercontent.com/cwfietz/AnagramKata/cwfietz/AnagramKata/MachineSetup.ps1 | iex

iwr -useb https://raw.githubusercontent.com/JayBazuzi/machine-setup/main/windows.ps1 | iex
iwr -useb https://raw.githubusercontent.com/JayBazuzi/machine-setup/main/javascript-webstorm.ps1 | iex

# Clone repo
& "C:\Program Files\Git\cmd\git.exe" clone https://github.com/cwfietz/AnagramKata.git C:\Code\AnagramKata
cd C:\Code\AnagramKata
npm install 
npm run test 
