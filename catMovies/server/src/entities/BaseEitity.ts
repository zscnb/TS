import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";

export abstract class BaseEitity {
    /**
     * 验证当前电影对象
     */
    public async validateThis(slipMissing = false): Promise<string[]> {
        const errors = await validate(this, {
            // 跳过未设置的属性
            skipMissingProperties: slipMissing
        });
        const temp = errors.map(e => Object.values(e.constraints));
        // 扁平化数组
        const result: string[] = [];
        temp.forEach(t => {
            result.push(...t);
        });
        return result;
    }

    /**
     * 将一个平面对象转换为Movie类的对象
     * @param plainObject 平面对象
     */
    protected static baseTransform<T>(cls: ClassType<T>, plainObject: object): T {
        if (plainObject instanceof cls) {
            return plainObject;
        }
        return plainToClass(cls, plainObject);
    }
}
