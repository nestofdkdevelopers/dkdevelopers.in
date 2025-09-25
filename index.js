// sercurity
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable F12 and Ctrl+Shift+I (DevTools shortcuts)
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'p')) {
        e.preventDefault();
    }
});

// Disable Ctrl+U (View Source)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
});

// Disable right click
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable copy
document.addEventListener("copy", (e) => e.preventDefault());

// Disable cut
document.addEventListener("cut", (e) => e.preventDefault());

// Disable paste
document.addEventListener("paste", (e) => e.preventDefault());

// Disable image dragging
document.addEventListener("dragstart", (e) => e.preventDefault());

document.addEventListener("keyup", function(e) {
    if (e.key === "PrintScreen") {
        navigator.clipboard.writeText(""); 
    }
});