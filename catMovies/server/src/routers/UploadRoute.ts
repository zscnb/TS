import Express from "express";
import multer from "multer";
import path from "path";
import { ResponseHelper } from "./ResponseHelper";
const router = Express.Router();

// 文件上传
// 通常情况下，服务器会提供一个统一的API接口，用于处理上传的文件

//  文件保存的配置
const storage = multer.diskStorage({
    destination: path.resolve(__dirname, "../../public/upload"),
    filename(req, file, cb) {
        // 文件名
        const time = new Date().getTime();

        // 后缀名
        const extname = path.extname(file.originalname);

        // 设置文件的全称
        cb(null, `${time}${extname}`);
    }
});

// 设置常见图片后缀名
const allowedExtension = [".jpg", ".png", ".gif", ".bmp", ".jiff"];
const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 // 文件限制 文件最多1M
    },
    fileFilter(req, file, cb) {
        // 获取后缀名
        const ext = path.extname(file.originalname);
        if (allowedExtension.includes(ext)) {
            cb(null, true);
        }
        else {
            cb(new Error("文件后缀名类型不正确，请重新输入"), false);
        }
    }
}).single("img");

router.post("/", (req, res) => {
    upload(req, res, err => {
        if (err) {
            // 发生错误
            ResponseHelper.sendError(err.message, res);
        }
        else {
            // 一切都好
            const url = `/upload/${req.file.filename}`;
            ResponseHelper.sendData(url, res);
        }

    });
});
export default router;
