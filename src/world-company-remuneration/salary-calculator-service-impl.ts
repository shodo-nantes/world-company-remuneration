const K = "K";
/**
 * @author Jack Napier <jnapier@therealjoker.com>
 */
export function salary(a: number, b: number) {
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

