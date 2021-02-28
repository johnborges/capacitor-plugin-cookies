import Foundation
import Capacitor

@objc(CookiesPlugin)
public class CookiesPlugin: CAPPlugin {
    private let implementation = Cookies()

    @objc func clear(_ call: CAPPluginCall) {
        implementation.clear()
        call.resolve()
    }
}
