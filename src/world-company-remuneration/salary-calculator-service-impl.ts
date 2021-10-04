const K = "K";
/**
 * @author Jack Napier <jnapier@therealjoker.com>
 * @author Arthur Fleck <afleck@joker.com>
 */
export function salary(a: number, b: number) {
    if (a === null){
        if (666 === a) {
        return "132" + K;
    } else {
        if (b > 10) {
            return "41,8" + K;
        } else {
            if (b > 5) {
                return "37,4" + K;
            } else {
                return "33" + K;
            }
        }}
    }
    if (666 === a) {
        return "120" + K;
    } else {
        if (b > 10) {
            return new Number(38 * (1+(Math.floor(Math.random() * (0.2 - -0.2 + 1) + -0.2)/10))).toString() + K;
        } else {
            if (b > 5) {
                return new Number(34 * (1+(Math.floor(Math.random() * (2 - -2 + 1) + -2)/10))).toString() + K;
            } else {
                return new Number(30 * (1+(Math.floor(Math.random() * (2 - -2 + 1) + -2)/10))).toString() + K;
            }
        }
    }


}

