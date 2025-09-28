// キャッシュクリア用
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (let reg of registrations) {
      reg.unregister();
    }
  });
  navigator.serviceWorker.register('service-worker.js?v=7');
}
