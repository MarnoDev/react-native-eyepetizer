/**
 * Created by marno on 2017/3/6
 * Function:
 * Desc:
 */
export default class LogUtil {
    static i(tag, hint) {
        console.log(tag + "==> " + new Date().valueOf() + " " + hint)
    }
}