local showMenu = false

RegisterCommand('menu', function()
    Wait(50)
    if not showMenu then
        TriggerEvent("hud:client:playOpenMenuSounds")
        SetNuiFocus(true, true)
        SendNUIMessage({ action = "open"}) 
        showMenu = true
end
end)

RegisterNUICallback('closeMenu', function()
    Wait(50)
    showMenu = false
    SetNuiFocus(false, false)
end) 

RegisterKeyMapping('menu', 'Open Menu', 'keyboard', Config.OpenKey)