import { NativeModules } from 'react-native'

const { FirebaseAppInstanceId } = NativeModules

/**
 * Get the instance ID
 * @return Promise<string>
 */
export function getId() {
  return FirebaseAppInstanceId.getId()
}

export default FirebaseAppInstanceId
