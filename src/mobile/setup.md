# Development

1. Install `react-native` by following platform and os specific instructions [here](https://reactnative.dev/docs/environment-setup). We are using React Native CLI.
2. You can confirm that you have setup the devlopment environment correctly, e.g (Android SDK, JDK) by creating a brand new project and running it.
3. Clone this repo and install dependencies.

```sh
$ git clone https://github.com/crimson-dev/crimson.git
$ cd crimson/src/mobile
$ yarn # or npm install
$ npx react-native run-android # this will pick up any default created emulators.
```

If it stays stuck on `Starting JS Server...`, then most likely port 8081 is busy.
In this case

1. Free the port by `sudo fuser -k 8081/tcp`, assuming you want to do.
2. open a new shell in the same directory, and do `npx react-native start`.

# Build

For building the application.

### Build Android

```sh
$ yarn build:android # or npm run build:android
```

### Build iOS

Not sure yet. (TODO)

# Test

Not sure yet. (TODO)
