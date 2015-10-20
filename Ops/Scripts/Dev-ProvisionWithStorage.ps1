#https://github.com/meulta/Vorlonjs/blob/development-0.0.16/azuredeploy.json

Param(  
    #Paramètres du Azure Ressource Group
    $resourceGroupeName = "Vorlonjs",
    $resourceGroupeDeploymentName = "VorlonjsDeployed",
    $resourceLocation = "West Us",
    $storageAccountName = "vorlonjsstorage",
    $publishSettingsFile = (Resolve-Path "C:\DEMOS\21 - CLOUD\AZURE\Azure Keys\stephgou - External.publishsettings"),
    $subscriptionName = "stephgou - External",
    $templateFile = "azuredeploy.json",
    $templateParameterFile = "azuredeploy-parameters.json",
    $templateFolder = "..\templates",
    $tagName = "Vorlonjs_RG",
    $tagValue = "Dev"
    )

#region init
Set-PSDebug -Strict

cls
$d = get-date
Write-Host "Starting Deployment $d"

$scriptFolder = Split-Path -Parent $MyInvocation.MyCommand.Definition
Write-Host "scriptFolder" $scriptFolder

set-location $scriptFolder
#endregion init

#region Souscription
#Remove-AzureAccount 
#Add-AzureAccount
Get-AzureAccount
Select-AzureSubscription -SubscriptionName $subscriptionName
#endregion Souscription
Get-AzureSubscription
Switch-AzureMode -Name AzureResourceManager

# Création d'un resource groupe
New-AzureResourceGroup `
	-Name $resourceGroupeName `
	-Location $resourceLocation `
    -Tag @{Name=$tagName;Value=$tagValue} `
    -Verbose

<#

$storageAccount = Get-AzureStorageAccount –StorageAccountName $storageAccountName
if (!$storageAccount)
{   
    $storageAccount = New-AzureStorageAccount -StorageAccountName $storageAccountName `
                            -Location $resourceLocation -Verbose -ResourceGroupName $resourceGroupeName `
                            -Type Standard_LRS
    if ($storageAccount)
    {
        Write-Verbose "[Finish] creating $storageAccountName storage account in $resourceLocation location"
    }
    else
    {
        throw "Failed to create a Windows Azure storage account. Failure in Dev-Provision.ps1"
    }
}

#>

# Déploiement du resource group
New-AzureResourceGroupDeployment `
    -Name $resourceGroupeDeploymentName `
	-ResourceGroupName $resourceGroupeName `
	-TemplateFile "$scriptFolder\$templatefolder\$templateFile" `
	-TemplateParameterFile "$scriptFolder\$templatefolder\$templateParameterFile" `
    -Verbose `
    #-StorageAccountName $storageAccountName `


$d = get-date
Write-Host "Stopping Deployment $d"