Screen 1 : Splash Screen
 - Added lottie file

Screen 2 : Login Screen
  - Top container with app name and language switcher
      - Handle localization of english and arabic language
  - Bottom container with email and password field and Login button
      - Added animation when screen is visible to user
      - Added filed validation hook and custom apptextfiled for email and password
      - Used Reduxtoolkit and redux persist for storing email and password
      - Button is disable untill  user enterd valid email and password. Once valid email and password is entered button will enabled
      - Once user entered valid email and password he will navigate to screen 2
      - This screen is only visible when user have not entered his email and password earlier
      - Added support to load SVG icons
   
Screen 3 : Movie list Screen
  - This screen have a grid view with logout button
  - On screen launch api for getting popular list is called with intial page and user prefered language selected on screen 1
  - Added Pagination for load number of pages of popular movies.
  - Added support to load SVG icons
  - API used for this screen is : https://api.themoviedb.org/3/movie/popular?language=en&page={page}&api_key={}



  


Android example            |  Ios Arabic example
:-------------------------:|:-------------------------:
![Video Preview](./eng-app-flow-android.gif)|![Video Preview](./arabic-app-flow-ios.gif)

Android app Video Link : https://github.com/himangipatel/ReactNativeExplorer/blob/main/eng-app-flow-android.mp4

IOS app Video Link : https://github.com/himangipatel/ReactNativeExplorer/blob/main/arabic-app-flow-ios.mp4

Android APK : https://github.com/himangipatel/ReactNativeExplorer/blob/main/android/app/release/react-native-explorer.apk




