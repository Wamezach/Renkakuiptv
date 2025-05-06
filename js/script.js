document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const m3u8List = document.getElementById("m3u8List");
  const themeToggle = document.getElementById("themeToggle");
  const dropdown = document.querySelector(".dropdown-wrapper");

  const streams = [
    { name: "Animax", url: "https://server.priterytivi.com/Animax/tracks-v1a1/mono.m3u8" },
    { name: "AT-X", url: "https://server.priterytivi.com/AT-X/tracks-v1a1/mono.m3u8" },
    { name: "WOWWOWCINEMA", url: "https://server.priterytivi.com/wcinema/tracks-v1a1/mono.m3u8" },
    { name: "BBC News", url: "https://live.bbc.co.uk/news/live.m3u8" },
    { name: "CNN", url: "https://cnn.com/live.m3u8" },
    { name: "Discovery Channel", url: "https://discovery.com/live.m3u8" },
    { name: "National Geographic", url: "https://natgeo.com/live.m3u8" },
    { name: "HBO", url: "https://hbo.com/live.m3u8" },
    { name: "Fox Sports", url: "https://foxsports.com/live.m3u8" },
    { name: "ESPN", url: "https://espn.go.com/live.m3u8" },
    { name: "MTV", url: "https://mtv.com/live.m3u8" },
    { name: "Comedy Central", url: "https://comedycentral.com/live.m3u8" },
    { name: "Cartoon Network", url: "https://cartoonnetwork.com/live.m3u8" },
    { name: "TBS", url: "https://tbs.com/live.m3u8" },
    { name: "AMC", url: "https://amctv.com/live.m3u8" },
    { name: "Syfy", url: "https://syfy.com/live.m3u8" },
    { name: "Bravo", url: "https://bravo.com/live.m3u8" },
    { name: "The Food Network", url: "https://foodnetwork.com/live.m3u8" },
    { name: "Lifetime", url: "https://lifetime.com/live.m3u8" },
    { name: "Oxygen", url: "https://oxygen.com/live.m3u8" },
    { name: "E!", url: "https://eonline.com/live.m3u8" },
    { name: "NFL Network", url: "https://nflnetwork.com/live.m3u8" },
    { name: "NBA TV", url: "https://nbatv.com/live.m3u8" },
    { name: "NHL Network", url: "https://nhlnetwork.com/live.m3u8" },
    { name: "PBS", url: "https://pbs.org/live.m3u8" },
    { name: "History Channel", url: "https://history.com/live.m3u8" },
    { name: "A&E", url: "https://aetv.com/live.m3u8" },
    { name: "VH1", url: "https://vh1.com/live.m3u8" },
    { name: "Nickelodeon", url: "https://nickelodeon.com/live.m3u8" },
    { name: "Disney Channel", url: "https://disneychannel.com/live.m3u8" },
    { name: "Starz", url: "https://starz.com/live.m3u8" },
    { name: "Showtime", url: "https://showtime.com/live.m3u8" },
    { name: "Paramount Network", url: "https://paramountnetwork.com/live.m3u8" },
    { name: "CMT", url: "https://cmt.com/live.m3u8" },
    { name: "BBC America", url: "https://bbcamerica.com/live.m3u8" },
    { name: "IFC", url: "https://ifc.com/live.m3u8" },
    { name: "WE tv", url: "https://wetv.com/live.m3u8" },
    { name: "SundanceTV", url: "https://sundance.tv/live.m3u8" },
    { name: "Justice Central", url: "https://justicecentral.com/live.m3u8" },
    { name: "Rising", url: "https://rising.com/live.m3u8" },
    { name: "MSNBC", url: "https://msnbc.com/live.m3u8" },
    { name: "Bloomberg", url: "https://bloomberg.com/live.m3u8" },
    { name: "Reuters", url: "https://reuters.com/live.m3u8" },
    { name: "Al Jazeera", url: "https://aljazeera.com/live.m3u8" },
    { name: "Sky News", url: "https://skynews.com/live.m3u8" },
    { name: "RT", url: "https://rt.com/live.m3u8" },
    { name: "Press TV", url: "https://presstv.com/live.m3u8" },
    { name: "France 24", url: "https://france24.com/live.m3u8" },
    { name: "CNBC", url: "https://cnbc.com/live.m3u8" },
  ];

  // Populate stream list
  streams.forEach(stream => {
    const option = document.createElement("option");
    option.value = stream.url;
    option.textContent = stream.name;
    m3u8List.appendChild(option);
  });

  // Load stream
  function loadStream(url) {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    }
  }

  // Auto load first stream
  if (m3u8List.value) {
    loadStream(m3u8List.value);
  }

  m3u8List.addEventListener("change", function () {
    loadStream(this.value);
  });

  // Dropdown animation
  if (dropdown) {
    dropdown.style.opacity = 0;
    dropdown.style.transform = "translateY(20px)";
    setTimeout(() => {
      dropdown.style.transition = "all 0.6s ease";
      dropdown.style.opacity = 1;
      dropdown.style.transform = "translateY(0)";
    }, 200);
  }

  // Theme toggle handling
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) themeToggle.checked = true;
  }

  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    });
  }
});
