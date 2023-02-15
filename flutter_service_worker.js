'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fefa625967899bad8cfb91f1baf65945",
"assets/assets/css/page.css": "91eceeb7c0ac3ccbf3038c269cf07b0c",
"assets/assets/images/facebook_negative.png": "eadd56a872eecffb88198f59997deb8b",
"assets/assets/images/gear.svg": "180c51c025870f710a0c22fb60749c2a",
"assets/assets/images/google_logo.png": "395cf25e724341508fc17e2bda1f302b",
"assets/assets/images/gra_dot.png": "4339ee9a6ce9149f9f6154d207630397",
"assets/assets/images/home_dp.png": "9a8599134a17890f90d41a198b72675d",
"assets/assets/images/home_dp_bw.png": "67539e2915f79a5d16c7b1e45f57948c",
"assets/assets/images/info_btn.png": "68e95877a44e26f6f00ae736e2abe056",
"assets/assets/images/instagram_negative.png": "900fa9b3d391eaecbc7f14cc59dc8fe9",
"assets/assets/images/lightning_light.png": "fbb40463e9115a63ae82bcb53bd8fe73",
"assets/assets/images/logo_text.png": "ac3d74c199c9f5a36e8fb8a54f3c8d43",
"assets/assets/images/music.png": "fdc3826cdcd8254cdd363fa5c1586ed0",
"assets/assets/images/music_off.png": "2bfae81770f39953352cf7ec0834fde6",
"assets/assets/images/noise-dark.png": "aa85683ba0b2444a60caedd048eb5dd4",
"assets/assets/images/noise-light.png": "6b6cc1b2a117dcc780eacfc39d22b540",
"assets/assets/images/p11.png": "a5488fbee4a87bbba4f31ecf26bfac09",
"assets/assets/images/p12.png": "d2858be4a6e0a0996e90a51ef41fffc5",
"assets/assets/images/p21.png": "64eabf61475fdc1493c5ebd01e3b9a80",
"assets/assets/images/p22.png": "78206723aa870cd92389065b1f9653f8",
"assets/assets/images/p31.png": "06098559076a511dd7e7cc7bcbabf2a3",
"assets/assets/images/p32.png": "6a8f2314efbed51cd0f8504972e37675",
"assets/assets/images/qr_scan_black.png": "38bb5e4be6fe43d6bcdde027f069b219",
"assets/assets/images/resize.svg": "a3d14009da85f88853ca81487909533d",
"assets/assets/images/sound.png": "b750c96b50dad0875e71a3350e4d6df9",
"assets/assets/images/sound_off.png": "7c5b1e899b5bcdbad1ffd18d13c0fe37",
"assets/assets/images/tick.png": "4d68a8ad9cf597d5aa3be7b57fca5630",
"assets/assets/images/tiktok_negative.png": "a9b793052b32aa6ee19c94ae5cdb154d",
"assets/assets/images/whatsapp.png": "b934df6fac80d9fd4f8cc6d5180c690b",
"assets/assets/images/white_globe_icon.png": "5632385c12b451663a4fb1a5d3d4bdb2",
"assets/assets/images/x_mark.png": "19d3ec10b3c8b93b59c2b2aa79ee4a06",
"assets/assets/index.html": "4eba1585348554d9a07c0575fe407d0d",
"/": "c8beabb7b6a331fbec003f73f02607de",
"assets/assets/resources/cat.jpg": "edfdf01dabbbb18a99929cc6ad8171f5",
"assets/assets/resources/cat_original.jpg": "846dd6b9ff6c3bdbfddec1c2654ca9eb",
"assets/assets/script/main.js": "6cf8b3050c748197e8c77e47c93d6bf8",
"assets/assets/script/main.min.js": "a70dda7342adced84585f546045d1058",
"assets/assets/script/main.min.js.map": "6ca94715159a881ac82b2a399ff061e9",
"assets/assets/script/page.js": "ee7d5cd337732a82af9462fa506fd2e0",
"assets/assets/script/page.min.js": "6d2b881a28ea12d6048eae1fba2b7800",
"assets/assets/test.html": "c3ba884f25eb87899680702271cdfde3",
"assets/assets/tt.html": "c5d9d8ebd638785219ed4e8057663670",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "cc479a3ae2c661baa938fa8c399d5dae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c8beabb7b6a331fbec003f73f02607de",
"main.dart.js": "2363b6c4d928b793c50f3525b6ea89ce",
"manifest.json": "e3aa0c510c5d1184033fbfb7dd788480",
"version.json": "f5897cc0a68de4d0ea1880aaa2d960f5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
