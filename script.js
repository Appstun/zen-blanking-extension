// On Startup
browser.runtime.onStartup.addListener(async () => {
  // Checks for user opened tabs and open blank tab if tab count is 0.
  let tabs = await browser.tabs.query({ pinned: false, hidden: false });
  if (tabs.length < 1) await browser.tabs.create({ url: "about:blank" });
});
