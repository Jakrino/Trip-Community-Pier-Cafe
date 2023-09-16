local UI = false

-- Callbacks
RegisterNUICallback("close", function(data)
    Display(source, "close")
end)

-- Open UI
RegisterCommand('crosshair', function()
    Display(source, "open")
end, false)

RegisterKeyMapping('crosshair', 'Crosshair Screen', 'keyboard', Config.Key)

-- Functions
function Display(source, method)
    if method == "open" then
        SendNUIMessage({
            type = "display",
            bool = "open"
        })
        SetNuiFocus(true, true)
        UI = true
    elseif method == "opench" then
        SendNUIMessage({
            type = "display",
            bool = "opench"
        })
        SetNuiFocus(false, false)
        UI = false
    elseif method == "close" then
        SendNUIMessage({
            type = "display",
            bool = "close"
        })
        SetNuiFocus(false, false)
        UI = false
    elseif method == "closech" then
        SendNUIMessage({
            type = "display",
            bool = "closech"
        })
        SetNuiFocus(false, false)
        UI = false
    end
end

-- Threads
CreateThread(function()
    while true do
        if IsPauseMenuActive() then
            Display(source, "closech")
        else
            if UI == false then
                Display(source, "opench")
            end
        end
        Wait(100)
    end
end)