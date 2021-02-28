import Foundation

@objc public class Cookies: NSObject {
    @objc public func clear() {
        let jar = HTTPCookieStorage.shared
        jar.cookies?.forEach({ (cookie) in
            jar.deleteCookie(cookie)
        })
    }
}
