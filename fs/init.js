load('api_sys.js');
load('api_timer.js');
load('api_wifi.js');

Timer.set(5000, true, function() {
  print('>> Starting scan...');
  Wifi.scan(function(results) {
    if (results === undefined) {
      print('!! Scan error');
      return;
    } else {
      print('++ Scan finished,', results.length, 'results:');
    }
    for (let i = 0; i < results.length; i++) {
      print(' ', JSON.stringify(results[i]));
    }
    print('..', Sys.free_ram());
  });
}, null);
