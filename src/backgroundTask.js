import React from 'react'
import { Text } from 'react-native'
import BackgroundTask from 'react-native-background-task'

BackgroundTask.define(() => {
  console.log('Hello from a background task')
  BackgroundTask.finish()
})
BackgroundTask.schedule();
export default class MyApp extends React.Component {
  componentDidMount() {
    BackgroundTask.schedule()
  }
  
  render() {
    BackgroundTask.schedule()
    return <Text>Hello world</Text>
  }
}