# react-native-firebase-app-instance-id

## Getting started

`$ npm install react-native-firebase-app-instance-id --save`

### Mostly automatic installation

`$ react-native link react-native-firebase-app-instance-id`

## Usage
```ts
import { getId as getAppInstanceId } from 'react-native-firebase-app-instance-id';

getAppInstanceId().then((appInstanceId: string) => {
  console.log('appInstanceId', appInstanceId)
});
```
