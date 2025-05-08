document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const countrySelect = document.getElementById("countrySelect");
  const channelList = document.getElementById("channelList");
  const themeToggle = document.getElementById("themeToggle");
const data = {
Philippines: [
    { name: "A2Z", url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_5.m3u8" },
    { name: "Arirang", url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_qp.m3u8" },
    { name: "BBC News", url: "https://d2vnbkvjbims7j.cloudfront.net/containerA/LTN/playlist.m3u8" },
    { name: "BBC News Asia", url: "https://cdn4.skygo.mn/live/disk1/BBC_News/HLSv3-FTA/BBC_News-avc1_2000000=7-mp4a_208000_eng=2.m3u8" },
    { name: "Buko", url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/buko_qp.m3u8" },
    { name: "CBS News", url: "https://cbsn-us.cbsnstream.cbsnews.com/out/v1/55a8648e8f134e82a470f83d562deeca/master.m3u8" },
    { name: "CLTV 36", url: "https://live.cltv36.tv:5443/LiveApp/streams/cltvlive.m3u8" },
    { name: "CNN", url: "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8" },
    { name: "Dubai One", url: "https://dminnvllta.cdn.mgmlcdn.com/dubaione/smil:dubaione.stream.smil/chunklist.m3u8" },
    { name: "INC TV", url: "https://199211.global.ssl.fastly.net/643cc12aa824db4374021c8c/live_95f6ac80dd6511ed9d08b12be56ae55e/tracks-v2a1/mono.ts.m3u8" },
    { name: "One Sports", url: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/onesports_qp.m3u8" },
    { name: "PRIME HD", url: "http://stb.iphd.tv:80/live/jWLyE3zChH/TTt5yR4ysV/102536.m3u8" },
    { name: "STAR TELEVISION", url: "https://tv.jomarhost.xyz/cb9a5c50-41c4-4678-8322-6908a1bb9dd2_output_0.m3u8?session=mERBuiBNcDFmacHhrLcvGb" },
    { name: "TV 5", url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5.m3u8" },
    { name: "TV 5 HD", url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z_audio_1_5_init.mp4?m=1743388969" },
    { name: "TV5 MONDE", url: "https://ott.tv5monde.com/Content/HLS/Live/channel(seasie)/07.m3u8" },
    { name: "Wild Earth", url: "https://wildearth-plex.amagi.tv/master.m3u8" },
    { name: "Xplore", url: "http://xlpore-samsungus.amagi.tv/playlist.m3u8" },
    { name: "A2Z (360p)", url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5.m3u8" },
    { name: "BBC News Asia Pacific (720p)", url: "https://cdn4.skygo.mn/live/disk1/BBC_News/HLSv3-FTA/BBC_News.m3u8" },
    { name: "CLTV 36 (720p)", url: "https://live.cltv36.tv:5443/LiveApp/streams/cltvlive.m3u8" },
    { name: "EWTN Africa Asia (720p)", url: "https://cdn3.wowza.com/1/ZVBYYXFLLzE0c3NC/Qk1FMURC/hls/live/playlist.m3u8" },
    { name: "EWTN Asia-Pacific (720p)", url: "https://cdn3.wowza.com/1/QmVNUVhTNTZSS3Uz/YWQ0aHpi/hls/live/playlist.m3u8" },
    { name: "INC TV (720p)", url: "https://199211.global.ssl.fastly.net/643cc12aa824db4374021c8c/live_95f6ac80dd6511ed9d08b12be56ae55e/index.m3u8" },
    { name: "PTV (720p)", url: "https://raw.githubusercontent.com/azgaresncf/strm2hls/main/streams/PTV.m3u8" },
    { name: "TV5 Monde Asia (1080p)", url: "https://ott.tv5monde.com/Content/HLS/Live/channel(seasie)/variant.m3u8" },
    { name: "TV5Monde Pacifique (1080p)", url: "https://ott.tv5monde.com/Content/HLS/Live/channel(pacifique)/variant.m3u8" },
    { name: "TVE Internacional Asia-Oceania", url: "https://rtvelivestream.akamaized.net/rtvesec/int/tvei_asia_main.m3u8" },
    { name: "TVE Internacional Europe-Asia", url: "https://rtvelivestream.akamaized.net/rtvesec/int/tvei_eu_main.m3u8" },
    { name: "Zarok TV Sorani (720p)", url: "https://zindisorani.zaroktv.com.tr/hls/stream.m3u8" },
    { name: "Travel Channel", url: "https://dplus.gammacdn.workers.dev/videos/110.m3u8" },
    { name: "Arirang Alt", url: "https://amdlive-ch03-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8" },
    { name: "Al Jazeera", url: "https://live-hls-web-aje.getaj.net/AJE/index.m3u8" },
    { name: "TV5 MONDE Style", url: "https://ott.tv5monde.com/Content/HLS/Live/channel(style1)/variant.m3u8" },
    { name: "Bloomberg", url: "https://www.bloomberg.com/media-manifest/streams/asia.m3u8" },
    { name: "BBC World News", url: "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8" },
    { name: "CGTN News", url: "https://news.cgtn.com/resource/live/english/cgtn-news.m3u8" },
    { name: "CGTN Documentaries", url: "https://news.cgtn.com/resource/live/document/cgtn-doc.m3u8" },
    { name: "Outdoor Channel", url: "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg00718-outdoorchannela-outdoortvnz-samsungnz/playlist.m3u8" },
    { name: "Animal Planet", url: "https://dplus.gammacdn.workers.dev/videos/99.m3u8" },
    { name: "Thrillers", url: "https://amc-rushbyamc-1-us.vizio.wurl.tv/playlist.m3u8" },
    { name: "American Idol", url: "https://d2h3esqi6ab3e7.cloudfront.net/index.m3u8" },
    { name: "Baywatch", url: "https://d1ku2wsea2oun8.cloudfront.net/playlist.m3u8" },
    { name: "Bein Sports Xtra", url: "https://amg01334-beinsportsllc-beinxtra-localnow-kcy6r.amagi.tv/playlist.m3u8" },
    { name: "MovieSphere", url: "https://moviesphereuk-samsunguk.amagi.tv/playlist.m3u8" },
    { name: "TFC GUAM", url: "https://tfcguam-abscbn-ono.amagi.tv/index.m3u8" },
    { name: "3ABN Kids", url: "https://3abn.bozztv.com/3abn2/Kids_live/smil:Kids_live.smil/playlist.m3u8" },
    { name: "Blues TV", url: "https://2-fss-2.streamhoster.com/pl_138/205510-3094608-1/playlist.m3u8" },
    { name: "EnerGeek (720p)", url: "https://streaming-cl.sh1ny.space/memfs/e8a8e789-170b-4de4-a33b-90a9a475ce65.m3u8" },
    { name: "Fanpop TV", url: "https://streaming-cl.sh1ny.space/memfs/e16d2f72-70b5-4bf5-b9c5-107b6390a10f.m3u8" },
    { name: "Japanim TV (1080p)", url: "https://foxkidstv.be:3369/stream/play.m3u8" },
    { name: "Kuriakos Kids (1080p)", url: "https://w2.manasat.com/kkids/smil:kkids.smil/playlist.m3u8" },
    { name: "Magic Kids (486p)", url: "https://magicstream.ddns.net/magicstream/stream.m3u8" },
    { name: "Persiana Junior", url: "https://junhls.persiana.live/hls/stream.m3u8" },
    { name: "Retro Crush", url: "https://amg01201-cinedigmenterta-retrocrush-cineverse-nrfll.amagi.tv/playlist/amg01201-cinedigmenterta-retrocrush-cineverse/playlist.m3u8" },
    { name: "XilamTV (1080p)", url: "https://xilam-animation-1-fr.samsung.wurl.tv/playlist.m3u8" },
    { name: "30A We Love Cars", url: "https://30a-tv.com/feeds/vidaa/cars.m3u8" },
    { name: "Canal Motor (720p)", url: "https://digicom.hls.iptvdc.com/canalmotor/index.m3u8" },
    { name: "Choppertown (720p)", url: "https://linear-11.frequency.stream/dist/glewedtv/11/hls/master/playlist.m3u8" },
    { name: "Fun Roads TV (720p)", url: "https://a-cdn.klowdtv.com/live3/funroads_720p/playlist.m3u8" },
    { name: "Garage TV Latin America", url: "https://stream1.sersat.com/hls/garagetv.m3u8" },
    { name: "Retro TV (KCKS-LD9) (480p)", url: "https://cdn.igocast.com/channel9_hls/channel9_master.m3u8" },
    { name: "RPM (720p)", url: "https://origin3.afxp.telemedia.co.za/PremiumFree/rpm/playlist.m3u8" }
  ],
  Japan: [
    { name: "ABC", url: "https://server.priterytivi.com/abc/tracks-v1a1/mono.m3u8" },
    { name: "Animax", url: "https://server.priterytivi.com/Animax/tracks-v1a1/mono.m3u8" },
    { name: "AT-X", url: "https://server.priterytivi.com/AT-X/tracks-v1a1/mono.m3u8" },
    { name: "BS 11", url: "https://server.priterytivi.com/BS11/tracks-v1a1/mono.m3u8" },
    { name: "BS ASASHI", url: "https://server.priterytivi.com/bsasahi/index.m3u8" },
    { name: "BS FUJI", url: "https://server.priterytivi.com/bsfuji/tracks-v1a1/mono.m3u8" },
    { name: "BS NTV", url: "https://server.priterytivi.com/bsntv/index.m3u8" },
    { name: "BS TBS", url: "https://server.priterytivi.com/bstbs/index.m3u8" },
    { name: "BS TOKYO", url: "https://server.priterytivi.com/bstvtokyo/tracks-v1a1/mono.m3u8" },
    { name: "CGNTV", url: "https://d2p4mrcwl6ly4.cloudfront.net/out/v1/8d50f69fdbbf411a8d302743e4263716/CGNWebLiveJP.m3u8" },
    { name: "FUJI TV", url: "https://server.priterytivi.com/Fuji_TV/tracks-v1a1/mono.m3u8" },
    { name: "GSTV", url: "https://d2p4mrcwl6ly4.cloudfront.net/out/v1/8d50f69fdbbf411a8d302743e4263716/CGNWebLiveJP_2.m3u8" },
    { name: "JSPORT 1", url: "https://server.priterytivi.com/js1/tracks-v1a1/mono.m3u8" },
    { name: "JSPORT 2", url: "https://server.priterytivi.com/js2/tracks-v1a1/mono.m3u8" },
    { name: "JSPORT 3", url: "https://server.priterytivi.com/js3/tracks-v1a1/mono.m3u8" },
    { name: "JSPORT 4", url: "https://server.priterytivi.com/js4/tracks-v1a1/mono.m3u8" },
    { name: "KANSAI TV", url: "https://server.priterytivi.com/kansaitv/tracks-v1a1/mono.m3u8" },
    { name: "KBS", url: "https://server.priterytivi.com/kbs/tracks-v1a1/mono.m3u8" },
    { name: "MBS", url: "https://server.priterytivi.com/mbs/tracks-v1a1/mono.m3u8" },
    { name: "NHK BS", url: "https://server.priterytivi.com/NHK_BS/tracks-v1a1/mono.m3u8" },
    { name: "NHK BS4K", url: "https://server.priterytivi.com/bsp4k/tracks-v1a1/mono.m3u8" },
    { name: "NHK E", url: "https://server.priterytivi.com/NHK_E/tracks-v1a1/mono.m3u8" },
    { name: "NHK G", url: "https://server.priterytivi.com/NHK_G/tracks-v1a1/mono.m3u8" },
    { name: "NHK WORLD JAPAN", url: "https://nhkworld-tv.akamaized.net/hls/live/2115640/nhkworld-tv/index_1M.m3u8" },
    { name: "NHK WORLD PREMIUM", url: "https://cdn4.skygo.mn/live/disk1/NHK_World_Premium/HLSv3-FTA/NHK_World_Premium.m3u8" },
    { name: "NIPPON TV", url: "https://server.priterytivi.com/NHK_BS/tracks-v1a1/mono.m3u8" },
    { name: "PIGOO", url: "https://server.priterytivi.com/pigoo/tracks-v1a1/mono.m3u8" },
    { name: "QVC", url: "https://cdn-live1.qvc.jp/iPhone/1501/1501.m3u8" },
    { name: "SHOP CHANNEL", url: "https://stream3.shopch.jp/httporiginlivech1/ch1.stream_1280p/chunklist.m3u8" },
    { name: "SPACE SHOWER TV", url: "https://server.priterytivi.com/spaceshower/tracks-v1a1/mono.m3u8" },
    { name: "SUN TV", url: "https://server.priterytivi.com/suntv/tracks-v1/mono.m3u8" },
    { name: "TBS", url: "https://server.priterytivi.com/TBS/tracks-v1a1/mono.m3u8" },
    { name: "TBS CHANNEL 1", url: "https://server.priterytivi.com/tbsch1/tracks-v1a1/mono.m3u8" },
    { name: "TBS CHANNEL 2", url: "https://server.priterytivi.com/tbsch2/tracks-v1a1/mono.m3u8" },
    { name: "TOKYO MX1", url: "https://server.priterytivi.com/Tokyo_MX1/tracks-v1a1/mono.m3u8" },
    { name: "TOKYO MX2", url: "https://server.priterytivi.com/mx2test/tracks-v1a1/mono.m3u8" },
    { name: "TV ASAHI", url: "https://server.priterytivi.com/TV_Asahi/tracks-v1a1/mono.m3u8" },
    { name: "TV OSAKA", url: "https://server.priterytivi.com/tvo/tracks-v1a1/mono.m3u8" },
    { name: "TV TOKYO", url: "https://server.priterytivi.com/TV_Tokyo/tracks-v1a1/mono.m3u8" },
    { name: "WOWOWLIVE", url: "https://server.priterytivi.com/wprime/tracks-v1a1/mono.m3u8" },
    { name: "WOWOWCINEMA", url: "https://server.priterytivi.com/wcinema/tracks-v1a1/mono.m3u8" },
    { name: "WOWOW PRIME", url: "https://server.priterytivi.com/wprime/tracks-v1a1/mono.m3u8" },
    { name: "YTV", url: "https://server.priterytivi.com/ytv/tracks-v1a1/mono.m3u8" }
  ],
 XXX: [
  { name: "AdultIPTV.net Live Cams", url: "https://vod.mycamtv.net/1.m3u8" },
  { name: "AdultIPTV.net MILF", url: "http://live.adultiptv.net/milf.m3u8" },
  { name: "AdultIPTV.net Big Dick", url: "http://live.adultiptv.net/bigdick.m3u8" },
  { name: "AdultIPTV.net Big Tits", url: "http://live.adultiptv.net/bigtits.m3u8" },
  { name: "AdultIPTV.net Fetish", url: "http://live.adultiptv.net/fetish.m3u8" },
  { name: "AdultIPTV.net Pornstar", url: "http://live.adultiptv.net/pornstar.m3u8" },
  { name: "AdultIPTV.net Big Ass", url: "http://live.adultiptv.net/bigass.m3u8" },
  { name: "AdultIPTV.net Interracial", url: "http://live.adultiptv.net/interracial.m3u8" },
  { name: "AdultIPTV.net Latina", url: "http://live.adultiptv.net/latina.m3u8" },
  { name: "AdultIPTV.net POV", url: "http://live.adultiptv.net/pov.m3u8" },
  { name: "AdultIPTV.net Blowjob", url: "http://live.adultiptv.net/blowjob.m3u8" },
  { name: "AdultIPTV.net Teen", url: "http://live.adultiptv.net/teen.m3u8" },
  { name: "AdultIPTV.net Hardcore", url: "http://live.adultiptv.net/hardcore.m3u8" },
  { name: "AdultIPTV.net Cuckold", url: "http://live.adultiptv.net/cuckold.m3u8" },
  { name: "AdultIPTV.net Threesome", url: "http://live.adultiptv.net/threesome.m3u8" },
  { name: "AdultIPTV.net Russian", url: "http://live.adultiptv.net/russian.m3u8" }

]
};

  function loadChannel(url) {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    }
  }

  function renderChannels(country) {
    channelList.innerHTML = "";
    data[country].forEach(channel => {
      const li = document.createElement("li");
      li.textContent = channel.name;
      li.addEventListener("click", () => {
        localStorage.setItem("selectedChannel", channel.url);
        loadChannel(channel.url);
      });
      channelList.appendChild(li);
    });

    const saved = localStorage.getItem("selectedChannel");
    if (saved) loadChannel(saved);
    else if (data[country][0]) loadChannel(data[country][0].url);
  }

  renderChannels(countrySelect.value);

  countrySelect.addEventListener("change", () => {
    renderChannels(countrySelect.value);
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", () => {
    const isDark = themeToggle.checked;
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
