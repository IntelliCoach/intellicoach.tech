const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const videoID = urlParams.get("v");
if (videoID) {
    document.getElementById("title").innerText = `How Do I ${videos.find(v => v.video === videoID).title}?`
    document.getElementById("supportVideo").src = `https://drive.google.com/file/d/${videoID}/preview`;
} else {
    window.location = "/";
}
