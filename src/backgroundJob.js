// import BackgroundJob from 'react-native-background-job';
// import React, {Component} from 'react';
// import {View} from 'react-native';
// const backgroundJob = {
//  jobKey: "myJob2",
//  job: () => console.log("RUNNING IN BACKGROUND")
// };

// BackgroundJob.register(backgroundJob);

// var backgroundSchedule = {
//  jobKey: "myJob2",
// }

// BackgroundJob.schedule(backgroundSchedule)
//   .then(() => console.log("SUCCESS DIS"))
//   .catch(err => console.err(err));
  
//   export default class App extends Component{
//       componentDidMount(){
//         BackgroundJob.schedule(backgroundSchedule)
//         .then(() => console.log("SUCCESS COMPONENT"))
//         .catch(err => console.err(err));
//       }
//       render(){
//         BackgroundJob.schedule(backgroundSchedule)
//         .then(() => console.log("SUCCESS RENDER"))
//         .catch(err => console.err(err));
//           return(
//              <View></View>
//           );
//       }
//   }