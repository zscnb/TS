export interface Callback<T, U> { (key: T, val: U): void }

export class Dictionary<K, V>{
    private keys: K[] = [];
    private vals: V[] = [];

    // 重新设置某个键对应的值，如果不存在，则添加
    set(key: K, val: V) {
        const i = this.keys.indexOf(key);
        if (i < 0) {//不存在则添加
            this.keys.push(key)
            this.vals.push(val);
        }
        else {
            this.vals[i] = val;
        }
    }

    // 循环每一个键值对
    forEach(callback: Callback<K, V>) {
        this.keys.forEach((k, i) => {
            const v = this.vals[i];
            callback(k, v)
        })
    }

    // 判断某个键是否存在
    has(key: K) {
        return this.keys.includes(key);
    }

    // 按照键，删除对应的键值对
    delete(key: K) {
        const i = this.keys.indexOf(key);
        if (i == -1) {
            return;
        }
        // 每一键对应一个值
        this.keys.splice(i, 1);
        this.vals.splice(i, 1);
    }

    //访问器 得到当前键值对的数量
    get size(){
        return this.keys.length;
    }
}