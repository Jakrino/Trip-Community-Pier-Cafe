$(document).ready(function(){
    $("#applyButton").click(function() {
        var inputText = document.getElementById("textInput").value;
        var crossImage = document.getElementById('imageURL');
        var boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.classList.remove('clicked');
        });
        crossImage.src = inputText;
        $.post("https://trip-crosshair/close");
    });

    $("#1").click(function() {
        var crossImage = document.getElementById('imageURL');
        var boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.classList.remove('clicked');
        });
        crossImage.src = "https://cdn.discordapp.com/attachments/1145899001531617330/1152589252840927242/ch_1.png";
        $.post("https://trip-crosshair/close");
    });

    $("#2").click(function() {
        var crossImage = document.getElementById('imageURL');
        var boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.classList.remove('clicked');
        });
        crossImage.src = "https://cdn.discordapp.com/attachments/1145899001531617330/1152592934210912307/ch_2.png";
        $.post("https://trip-crosshair/close");
    });

    $("#3").click(function() {
        var crossImage = document.getElementById('imageURL');
        var boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.classList.remove('clicked');
        });
        crossImage.src = "https://cdn.discordapp.com/attachments/1145899001531617330/1152595291699159120/ch_3.png";
        $.post("https://trip-crosshair/close");
    });

    $("#4").click(function() {
        var crossImage = document.getElementById('imageURL');
        var boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.classList.remove('clicked');
        });
        crossImage.src = "https://cdn.discordapp.com/attachments/1145899001531617330/1152600670168416397/ch_4.png";
        $.post("https://trip-crosshair/close");
    });
});

window.addEventListener('message', (event) => {
    var item = event.data;
    if (item.type === 'display') {
        if (item.bool === 'open') {
            $(".background").css("display", "flex")
            $(".container").css("display", "flex")
            $(".onscreen").css("display", "none")
        } else if (item.bool === 'opench') {
            $(".background").css("display", "none")
            $(".container").css("display", "none")
            $(".onscreen").css("display", "flex")
        } else if (item.bool === 'close') {
            $(".background").css("display", "none")
            $(".container").css("display", "none")
            $(".onscreen").css("display", "flex")
        } else if (item.bool === 'closech') {
            $(".background").css("display", "none")
            $(".container").css("display", "none")
            $(".onscreen").css("display", "none")
        }
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        $.post("https://trip-crosshair/close");
    } else if (event.key === 'F5') {
        $.post("https://trip-crosshair/close");
    }
});

function handleButtonClick(button) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.classList.remove('clicked');
    });

    const box = button.closest('.box');
    box.classList.add('clicked');
}
