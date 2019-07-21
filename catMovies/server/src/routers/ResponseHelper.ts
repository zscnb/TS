import { Response } from "express";
import { ISearchResult } from "../entities/CommonTypes";

export class ResponseHelper {

    /**
     * 响应一个错误
     * @param error
     * @param res
     */
    public static sendError(error: string | string[], res: Response) {
        let err: string;
        if (Array.isArray(error)) {
            err = error.join(";");
        }
        else {
            err = error;
        }
        // 完成响应
        res.send({
            err,
            data: null
        });
    }

    /**
     * 响应一个正常(普通)数据
     * @param data
     * @param res
     */
    public static sendData(data: any, res: Response) {
        res.send({
            err: "",
            data
        });
    }

    /**
     * 响应分页数据
     * @param result
     * @param res
     */
    public static sendPageData<T>(result: ISearchResult<T>, res: Response) {
        if (result.errors.length > 0) {
            // 有错误
            this.sendError(result.errors, res);
        }
        else {
            res.send({
                err: "",
                data: result.data,
                total: result.count
            });
        }
    }
}
