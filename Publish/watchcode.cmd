@echo off
:loop
xcopy /e /d /y /i ..\deployment\bin\screeps\*.js copy
xcopy /e /d /y /i ..\deployment\bin\screeps\*.js dist
:: strip iffy's
findstr /r /c:"^[ ]" copy\FunScreeps.js > dist\FunScreeps.js
call grunt screeps
echo  
watch ..\deployment\bin\screeps\*.js
goto loop;
