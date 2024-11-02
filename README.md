# Inventory

The Inventory app is designed to simplify product management for businesses and individuals.

This app has following features:
<pre>
✔️ Display list of items in the inventory.
</pre>

<p>
  <pre><img src="https://github.com/user-attachments/assets/c1a01c32-f193-46e9-a2fb-57c45f560172" width="200" height="400" alt=""/> <img src="https://github.com/user-attachments/assets/8bfb498a-2ed3-446e-883f-d5c393e5b73b" width="200" height="400" alt=""/></pre>
</p>

***

# Technologies and Libraries Used

- [React Native 0.75.2](https://reactnative.dev/)
- [React 18.3.1](https://reactjs.org/)
- [React Native Paper 5.12.3](https://callstack.github.io/react-native-paper/)
- [React Native Vector Icons 10.1.0](https://www.npmjs.com/package/react-native-vector-icons)


***

# Getting Started

## Prerequisite

- Mobile with USB debugging enabled
- Mobile and laptop are on the same wifi.
- Logos for android's `res` folder.

## Install the app on mobile

```
yarn android
```

## Enable Wireless hot reload

- Run `adb devices` to get Mobile device name.
- Run `ipconfig` to get the IP (v4).
- Connect mobile to laptop via USB cable.
- Install the app

```
yarn android
```

- Disconnect mobile from USB. Metro bundler will be disconnected.
- Shake the mobile to open the React Native Dev menu. Select Settings. Open Debug server host & port for device.
- Enter IP v4 (from step 1) and port number (Generally 8081). Ex. `112.18.1.2:8081`
- Shake the mobile to open the React Native Dev menu .
- Select Reload. Now hot reload should work.

 ***

# Create the release build

https://github.com/night-fury-rider/react-native-template/wiki/Create-the-release-build

***

# Deploy the App on PlayStore

1. Login into [Developer Console Account](https://play.google.com/console/developers)
2. Select the app from the App list. It should open the App Dashboard.
3. Select `Production` (which is under `Release`) from the sidebar.
4. Click on `Create new release` which is on the right top. It would open `Create production release`.
5. Upload the build file and follow the instructions.

 ***

# Disclaimer

This is a foundational app with a basic setup that will serve as the starting point for building my other React Native applications.
