function isMobile() {
    return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function () {
    if (isMobile()) {
        document.body.innerHTML = ""; // Clear page content
        document.body.innerHTML = `
                    <center>
                    <div class="error-container">
                        <h1>❌ Error: Mobile devices are not supported.</h1>
                        <p>Please access this site from a desktop.</p>
                        <img src="https://media.tenor.com/84KrdLGU9AUAAAAj/emoji-disintegrating.gif" alt="Error GIF">
                    </div>
                    </center>
                `;
    }
});