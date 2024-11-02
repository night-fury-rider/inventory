# React Native Base

This is a template for the new React Native apps. Every new React Native app should follow this template.

This app has following:
<pre>
✔️ Project Structure
✔️ Bottom Tab Navigation
✔️ State Management
✔️ Module Resolution
✔️ Styling (Theming)
</pre>


<p>
  <pre><img src="https://github.com/user-attachments/assets/c1a01c32-f193-46e9-a2fb-57c45f560172" width="200" height="400" alt=""/> <img src="https://github.com/user-attachments/assets/8bfb498a-2ed3-446e-883f-d5c393e5b73b" width="200" height="400" alt=""/></pre>
</p>


<br/><br/>

# Technologies and Libraries Used

- [React Native 0.75.2](https://reactnative.dev/)
- [React 18.3.1](https://reactjs.org/)
- [React Native Paper 5.12.3](https://callstack.github.io/react-native-paper/)
- [React Native Vector Icons 10.1.0](https://www.npmjs.com/package/react-native-vector-icons)
- [React Native MMKV 2.10.2](https://github.com/mrousavy/react-native-mmkv)
- [Babel Module Resolver 5.0.0](https://www.npmjs.com/package/babel-plugin-module-resolver)

  <br/><br/>

# Getting Started

## Create a Logo
- Visit [Adobe Express](https://new.express.adobe.com/)
- Click `Logo` option to open the templates.
- Search the templates from left sidebar.
- Select the appropriate template.
- Rename the file with a proper name.
- Remove unncessary elements from the logo. Try to keep only one image/element.
- The Template may have multiple elements. Select all elements using `Ctrl+A`.
- Press the `Group` option to group the elements of logo.
- Use the Edges of the group to enlarge the image.
- Keep around 10% area as margin from boundary.
- Press `Align` option from top header. Select `Middle` and `Center`. It will make sure our logo is at exact center.
- Press `Download` button to download the logo.

## Create Android Launcher Images
- Visit [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html)
- Select `Image` option from left sidebar.
- Select the logo image.
- Keep `0` padding.
- Press `Download`. It will download a zip file which has all android images.


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

  <br/><br/>

# Create the release build

https://github.com/night-fury-rider/react-native-template/wiki/Create-the-release-build

<br/><br/>

# Deploy the App on PlayStore

1. Login into [Developer Console Account](https://play.google.com/console/developers)
2. Select the app from the App list. It should open the App Dashboard.
3. Select `Production` (which is under `Release`) from the sidebar.
4. Click on `Create new release` which is on the right top. It would open `Create production release`.
5. Upload the build file and follow the instructions.
   <br/><br/>

# Disclaimer

This is a foundational app with a basic setup that will serve as the starting point for building my other React Native applications.
