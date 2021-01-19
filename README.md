# Important Notice

Please fork this repo and work off of the fork.

# ReactNativeDigilockAssignment

This is a React-Native project testing candidate's ability to create a cross-platform mobile application using React Native with its native cli and implement the following:

1. Create a navigation bar using [React Navigation](https://reactnavigation.org/) that can navigate to any of the 3 pages (described below) on all screens. Note that using React Navigation is a requirement as our team uses it and it is a good test of implementing 3rd party libraries into React-Native. React Navigation is already included in the package.json and it is v5

2. Implement 3 pages:

- 1st page: animate a visible box moving from left to right over 5 seconds. This doesn't have to be fancy and can use any library (React-Native's own library or a 3rd party). The purpose of this is to just see an animation being implemented. The box itself doesn't have to be special either, it can be a blue View container, we will not give a better score if the box itself is prettier.

- 2nd page: render a LARGE set of data from /data/largeDataFromDb.json as a list. Each data object should be represented in a box of its own and should occupy its own row, the styling doesn't matter but as an example, it can be shown as such:

id: "<INSERT JSON ID HERE>"
name: "<INSERT NAME HERE>"
email: "<INSERT JSON ID HERE>"
phone: "<INSERT JSON ID HERE>"

====================

id: "<INSERT JSON ID HERE>"
name: "<INSERT NAME HERE>"
email: "<INSERT JSON ID HERE>"
phone: "<INSERT JSON ID HERE>"

===================

id: "<INSERT JSON ID HERE>"
name: "<INSERT NAME HERE>"
email: "<INSERT JSON ID HERE>"
phone: "<INSERT JSON ID HERE>"

The page should allow the user to scroll down to view more data. For a standard phone view port, 2-5 data objects can be visible at a given time (this is not a hard requirement, more of a suggestion and to state that all 500 data objects should not be viewable on 1 view port since that would be way too much). Please focus on PERFORMANCE.

- 3rd page: Incorporate a form that has 3 inputs, respectively name, email, and phone number as well as a submit button. Emphasis should be placed on using React state correctly and utilizing the correct keyboard layouts. The submit button can just log the responses to the form. For styling, please focus on layout as form elements should be properly spaced away from each other and should not break if using this in either landscape or portrait mode.

These are the minimum requirements. It should take 4-5 hours. Also, please document your code! We feel documentation is extremely important. Below are the steps to initialize the project on an emulator/physical device.

After you are done, please link us your repo and allow us to pull it down. If we have difficulty running your code, we will let you know. We understand that versioning can be tricky so do not worry if we do contact you about running it.

## Prerequisites

Must have the following installed locally to develop this app

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/)
- [React-Native Native setup (Non-Expo)](https://reactnative.dev/docs/environment-setup)

## Installing and running

0. Check version of Node you are using. In the terminal, run

```
node -v
```

It should be version >= 12.16.3 as that is the LTS

1. To install npm dependencies, run

```
npm install

```

2. To install cocoapods

```
sudo gem install cocoapods
```

3. Navigate to the ios folder, run

```
pod install
```

4. To run project, navigate back to the root folder and either use "npm run android" or "npm run ios" for either platform.

## Running Flipper for debugging

Starting with React Native v.62, Facebook recommends using [Flipper](https://fbflipper.com/) for debugging apps. For the candidate, using this is totally optional.

To use Flipper:

1. Download the latest version of Flipper

2. Start the React Native application on a device/emulator

3. (If using a physical device), run in the terminal

```
adb reverse tcp:8097 tcp:8097
```

This is required due to this issue: https://github.com/facebook/flipper/issues/1000
