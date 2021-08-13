(async () => {'use strict';

  try {
  let urloftab = window.location.href;
  console.log(urloftab);
  var tmp = document.createElement ('a');
  tmp.href  = urloftab;
  console.log(tmp.hostname);
  var correct = tmp.hostname;
  var correct1 = "http://"+correct+"/";
  var correct2 = "http://"+correct;
  console.log(correct1);
  console.log(correct2);
  const manifest = await fetch(correct1+'ngsw.json').then(res => res.json());
  const lazyUrls = manifest.assetGroups.find(g => g.name === 'docs-lazy').urls;
  console.log(lazyUrls);
    const confirmed = confirm(`Download all ${lazyUrls.length} URLs?`);
  
    if (confirmed) {
      const start = performance.now();
      const responses = await Promise.all(lazyUrls.map(u => fetch(correct2+u)));
      const failedCount = responses.filter(r => !r.ok).length;
      const duration = Math.round((performance.now() - start) / 1000);
  
      alert(`Downloaded ${lazyUrls.length} URLs in ${duration}s. (${failedCount} failed.)`);
    }
    alert("Done Successfully");
  } catch (err) {
    console.error(err);
    alert(`An error occurred:\n\n${err.stack}`);
  }
  
  })();