/**
 * 执行Generator函数
 * @param {any} thisObj 
 * @param {any} gen Generator函数
 * @param {any[]} parameter 执行 参数
 */
function run(thisObj: any , gen: Function, ...parameter: any[]): void {
    const g: any = gen.apply(thisObj, parameter);
    g.next();
    setTimeout(()=>{g.next(g)}, 5000);
}

export default {
    run,
};