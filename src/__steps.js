/**
 *                      --------------------
 *                         INITIAL SETUP INSTALLATRION
 *                      ---------------------
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4.install firebase: npm install firebase
 * 5. add config to your project
 * 6. DANGER: Do not publish or make firebase config to public by poshing those to github
 *                        -------------------
 *                            INTEGRATION
 *                        -------------------
 * 7. Visit: Go to Docs > Build > Authentication > web > Get > Started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 *                        -------------------
 *                          PROVIDER SETUP
 *                        -------------------
 * 11. import googleAuthProvider and create a new provider
 * 12. use signInWithPopup and pass auth and provider
 * 13. activate sigh-in mathod (google, facebook, github, eat.)
 * 14. [vite]: change 127.0.1 to localhost
 *                          -------------------
 *                           More Auth Provider
 *                          -------------------
 * 1. activate the auth provider (create app, provide redirect url, client id, client secret)
 */