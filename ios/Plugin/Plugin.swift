import Foundation
import Capacitor

@objc(Cookies)
public class CookiesPlugin: CAPPlugin {

    @objc func clear(_ call: CAPPluginCall) {
        let jar = HTTPCookieStorage.shared
        jar.cookies?.forEach({ (cookie) in
            jar.deleteCookie(cookie)
        })
        call.resolve()
    }
}
