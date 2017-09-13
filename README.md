# Scan WiFi networks on button press

## Overview

This app demonstrates how to scan for available WiFi networks. WiFi scan
is performed every 5 seconds.

You should see WiFi network list appearing on your console:

```
>> Starting scan...
scandone
mgos_wifi_dev_scan_c WiFi scan done, num_res 18
++ Scan finished, 18 results:
  {"ssid":"MyNetwork","channel":1,"rssi":-63,"authMode":3,"bssid":"12:34:56:78:90:12"}
.. 36812
```

## How to install this app

- Install and start [mos tool](https://mongoose-os.com/software.html)
- Switch to the Project page, find and import this app, build and flash it:

<p align="center">
  <img src="https://mongoose-os.com/images/app1.gif" width="75%">
</p>
