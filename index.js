function mouseAni() {
  document.addEventListener("mousemove", (e) => {
    const dotCursor = document.getElementById("dotCursor");
    const x = e.clientX - dotCursor.clientWidth / 2;
    const y = e.clientY - dotCursor.clientHeight / 2;

    dotCursor.style.left = `${x}px`;
    dotCursor.style.top = `${y}px`;

    // Reset the dot position after 2 seconds of inactivity
    clearTimeout(dotCursor.timeoutId);
    dotCursor.timeoutId = setTimeout(() => {
      dotCursor.style.display = "none";
    }, 2000);
  });

  // Show the dot when the mouse is moved
  document.addEventListener("mouseenter", () => {
    const dotCursor = document.getElementById("dotCursor");
    dotCursor.style.display = "block";
  });

  // Show the dot initially
  document.addEventListener("DOMContentLoaded", () => {
    const dotCursor = document.getElementById("dotCursor");
    dotCursor.style.display = "block";
  });

  // Hide the dot when the mouse leaves the screen
  document.addEventListener("mouseleave", () => {
    const dotCursor = document.getElementById("dotCursor");
    dotCursor.style.display = "none";
  });
}
mouseAni();
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
showSidebar();
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
hideSidebar();
