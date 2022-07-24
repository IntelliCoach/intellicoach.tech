let supportList = document.getElementById("supportList");
for (let v of videos) {
    let newVideo = document.createElement("li");
	newVideo.innerHTML = `<a href="support?v=${v.video}">${v.title.toLowerCase()}</a>`;
	supportList.appendChild(newVideo);
}
