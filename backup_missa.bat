@echo off
setlocal enabledelayedexpansion

:: Caminhos de origem (ajuste conforme seu projeto)
set PROJECT_DIR=C:\Users\PG-INFO\missa
set BACKUP_DIR=C:\Users\PG-INFO\Backups\MISSA
set DUMP_DIR=%PROJECT_DIR%\dumps
set ZIP_NAME=backup_missa_%DATE:~6,4%-%DATE:~3,2%-%DATE:~0,2%_%TIME:~0,2%h%TIME:~3,2%m.zip

:: Cria diretório de backup, se não existir
if not exist "%BACKUP_DIR%" (
    mkdir "%BACKUP_DIR%"
)

:: Dump do banco MongoDB (ignora se não instalado)
echo Fazendo dump do banco de dados MongoDB...
if exist "%DUMP_DIR%" rmdir /s /q "%DUMP_DIR%"
mkdir "%DUMP_DIR%"
mongodump --out "%DUMP_DIR%" >nul 2>&1

:: Compactar tudo (requer PowerShell)
echo Compactando projeto...
powershell Compress-Archive -Path "%PROJECT_DIR%\backend", "%PROJECT_DIR%\frontend", "%PROJECT_DIR%\docs", "%DUMP_DIR%" -DestinationPath "%BACKUP_DIR%\%ZIP_NAME%"

echo.
echo ✅ Backup criado com sucesso em:
echo %BACKUP_DIR%\%ZIP_NAME%

endlocal
pause
