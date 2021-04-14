/**
 * @author 徐小群
 */


/**
     * 试根次数
     */
let trytime: number = 0;

function main() {
    const test = kaifang(101995.0, 5, 3);
    console.log(test);
    console.log(trytime);
    trytime = 0;
    console.log(kaifang(2.0, 2, 10));
    console.log(trytime);
}

/**
 * 求a的n次幂
 *
 * @param a 底数
 * @param n 指数
 * @return
 */
function mypow(a: number, n: number): number {
    let res: number = 1.0;
    if (n < 0) {
        a = 1 / a;
        n = -n;
    }
    for (let i = 0; i < n; i++) {
        res *= a;
    }
    return res;
}

/**
 * 求bkfs的cf次方正数根，并计算到xsw位小数
 *
 * @param bkfs 被开方数
 * @param cf   次方数
 * @param xsw  保留小数位
 * @return
 */
function kaifang(bkfs: number, cf: number, xsw: number): number {
    let lg: number = 0;
    let tmep: number = bkfs;
    if (bkfs < 1) {
        while (tmep < 1) {
            tmep *= 10;
            lg--;
        }
    } else if (bkfs > 1) {
        while (tmep / 10 > 1) {
            tmep /= 10;
            lg++;
        }
    }
    if (lg < 0) {
        lg = lg - cf + 1;
    }
    lg = lg / cf;
    return rooting(bkfs, 0.0, cf, -xsw, lg, 1);
}

/**
 * 试根，求bkfs的cf次方正数根，并计算到xsw位小数
 *
 * @param bkfs 被开方数
 * @param zjz  过程值
 * @param cf   次方
 * @param xsw  计算到的小数位
 * @param i    位数指针
 * @param j    位数值
 * @return
 */
function rooting(bkfs: number, zjz: number, cf: number, xsw: number, i: number, j: number): number {
    trytime++;
    if (i < xsw) {
        return zjz;
    }
    const y: number = zjz + j * mypow(10.0, i);
    if (mypow(y, cf) < bkfs) {
        return rooting(bkfs, zjz, cf, xsw, i, j + 1);
    } else if (mypow(y, cf) > bkfs) {
        return rooting(bkfs, y - mypow(10.0, i), cf, xsw, i - 1, 1);
    }
    return y;
}

main()