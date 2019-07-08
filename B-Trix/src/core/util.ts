/**
 *根据最小值和最大值得到该范围内随机数，(无法取到最大值)
 *
 * @export
 * @param {number} min
 * @param {number} max
 * @returns
 */
export function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}