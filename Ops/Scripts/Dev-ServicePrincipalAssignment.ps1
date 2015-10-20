Param(  
    $subscriptionName = "stephgou - External",
    $subscriptionId = "fb79eb46-411c-4097-86ba-801dca0ff5d5",
    $tenantId = "72f988bf-86f1-41af-91ab-2d7cd011db47"
    #$tenantId = "75aafb81-95a5-414a-b65c-4409e9f97036"
    )

cls
<# Trying to change default tenantID without any success
Get-AzureSubscription
$subscription = Get-AzureSubscription | where { $_.SubscriptionId -eq $subscriptionId }
$subscription.TenantId = $tenantId
Get-AzureSubscription
Select-AzureSubscription -SubscriptionName $subscriptionName
$subscription = Get-AzureSubscription | where { $_.SubscriptionId -eq $subscriptionId }
#>

New-AzureRoleAssignment -ServicePrincipalName http://vorlonjs-vso -RoleDefinitionName Contributor
