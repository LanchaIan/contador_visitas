let cookie = document.cookie;
alert(cookie);
let visitas = document.cookie.replace(/(?:(?:^|.*;\s*)visitas\s*\=\s*([^;]*).*$)|^.*$/, "$1");
visitas = parseInt(visitas) || 0;
visitas ++;
alert(visitas);
document.cookie = 'visitas=' + visitas + '; max-age=10';