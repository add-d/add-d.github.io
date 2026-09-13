const fs = require('fs');
const h = fs.readFileSync('_orig_home.html', 'utf8');

function findClass(name) {
  const re = new RegExp(`class=["'][^"']*\\b${name}\\b`);
  const m = re.exec(h);
  return m ? m.index : -1;
}

['ban_box', 's1', 's2', 's3', 's32', 's4', 's5', 's6', 's7', 's8', 's9', 'keyan', 's10'].forEach((n) => {
  console.log(n, findClass(n));
});

const iBan = h.indexOf('ban-wz');
console.log('ban-wz', iBan, iBan >= 0 ? h.slice(iBan - 80, iBan + 120) : '');

const iS5 = findClass('s5');
console.log('s5 snippet:\n', h.slice(iS5, iS5 + 2500));

fs.writeFileSync('_orig_s5.html', h.slice(iS5, findClass('s6') > 0 ? findClass('s6') : findClass('s678') || iS5 + 8000));
fs.writeFileSync('_orig_s4.html', h.slice(findClass('s4'), findClass('s5')));
fs.writeFileSync('_orig_s32.html', h.slice(findClass('s32'), findClass('s4')));
fs.writeFileSync('_orig_s2.html', h.slice(findClass('s2'), findClass('s3')));
fs.writeFileSync('_orig_banner.html', h.slice(h.indexOf('ban_box'), h.indexOf('s1-bg')));
fs.writeFileSync('_orig_keyan.html', h.slice(findClass('keyan'), findClass('s10')));
fs.writeFileSync('_orig_s3.html', h.slice(findClass('s3'), findClass('s32')));
console.log('wrote excerpts');
