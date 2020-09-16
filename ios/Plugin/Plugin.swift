import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(Cookies)
public class Cookies: CAPPlugin {

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": value
        ])
    }

    @objc func clear(_ call: CAPPluginCall) {
        guard let urlString = call.getString("url") else {
            return call.reject("Must provide URL")
        }
        guard let url = URL(string: urlString) else {
            return call.reject("Invalid URL")
        }
        let jar = HTTPCookieStorage.shared
        jar.cookies(for: url)?.forEach({ (cookie) in
            jar.deleteCookie(cookie)
        })
        call.resolve()
    }
}
