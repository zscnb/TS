import Express from "express";
import { MovieService } from "../services/MovieService";
import { ResponseHelper } from "./ResponseHelper";

const router = Express.Router();

// http://localhost:3000/api/movie/ xxxxxx params
// http://localhost:3000/api/movie/xxxxxx query

// 获取单个电影id
router.get("/:id", async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await MovieService.findById(movieId);
        // 响应 :服务器的接口的响应格式，往往是一种标准格式。
        ResponseHelper.sendData(movie, res);
    }
    catch {
        ResponseHelper.sendData(null, res);
    }
});

// 获取多个电影
router.get("/", async (req, res) => {
    const result = await MovieService.find(req.query);
    ResponseHelper.sendPageData(result, res);
});

//  添加电影
router.post("/", async (req, res) => {
    const result = await MovieService.add(req.body);
    if (Array.isArray(result)) {
        ResponseHelper.sendError(result, res);
    }
    else {
        ResponseHelper.sendData(result, res);
    }
});

// 修改电影
router.put("/:id", async (req, res) => {
    try {
        const result = await MovieService.edit(req.params.id, req.body);
        if (result.length > 0) {
            ResponseHelper.sendError(result, res);
        }
        else {
            ResponseHelper.sendData(true, res);
        }
    } catch {
        ResponseHelper.sendError("id错误", res);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await MovieService.delete(req.params.id);
        ResponseHelper.sendData(true, res);
    } catch {
        ResponseHelper.sendError("id错误", res);
    }
});

export default router;
