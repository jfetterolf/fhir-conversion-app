# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# HL7 Conversion

## Supported HL7 Message Types

- ADT_A01 - Patient Administration: Admit/Visit Notification
- ADT_A03 - Patient Administration: Discharge/End Visit
- ADT_A04 - Patient Administration: Register a Patient
- ADT_A08 - Patient Administration: Update Patient Information
- ADT_A28 - Patient Administration: Add Person or Patient Information
- ADT_A31 - Patient Administration: Update Person Information
- ADT_A34 - Patient Administration: Merge Patient Information - Patient ID Only
- ADT_A40 - Patient Administration: Merge Patient - Patient Identifier List
- DFT_P03 - Post Detail Financial Transaction (does not convert FT1)
- MDM_T02 - Original Document Notifcication and Content
- MDM_T06 - Document Addendum Notification and Content
- OMP_O09 - Pharmacy/Treatment Order
- ORM_O01 - General Order Message
- ORU_R01 - Observation Reporting: Observation and Result Transmission (Laboratory)
- PPR_PC1 - Patient Problem: Add Problem
- RDE_O11 - Pharmacy/Treatment Encoded Order
- RDE_O25 - Pharmacy/Treatment Refill Authorization Request
- VXU_V04 - Vaccination: Update Vaccination Record

## Supported HL7 Message Segments

- AL1 - Patient Allergy Information
- DG1 - Diagnosis
- EVN - Event Type
- IN1 - Insurance
- IN2 - Insurance Additional Information
- MRG - Merge Patient Information
- MSH - Message Header
- NTE - Notes and Comments
- OBR - Observation Request
- OBX - Observation/Result
- ORC - Common Order
- PD1 - Patient Additional Demographic
- PID - Patient Identification
- PRB - Problem Details
- PV1 - Patient Visit
- PV2 - Patient Visit - Additional Information
- RXA - Pharmacy/Treatment Administration
- RXC - Pharmacy/Treatment Component Order
- RXE - Pharmacy/Treatment Encoded Order
- RXO - Pharmacy/Treatment Order (Ignored for RDE messages; RXE used instead)
- RXR - Pharmacy/Treatment Route
- SPM - Specimen
- TXA - Transcription Document Header