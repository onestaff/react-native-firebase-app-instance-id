const path = require('path')

module.exports = {
  dependency: {
    platforms: {
      android: {
        packageImportPath: 'import com.rnfirebaseappinstanceid.FirebaseAppInstanceIdPackage;',
        packageInstance: 'new FirebaseAppInstanceIdPackage()'
      }
    }
  }
}
