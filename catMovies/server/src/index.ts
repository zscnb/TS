import "reflect-metadata";
import Express from "express";
import MovieRouter from "./routers/MovieRouter";
import UploadRoute from "./routers/UploadRoute";
import history from "connect-history-api-fallback";

const app = Express();

app.use(history());
app.use("/", Express.static("public/build"));
app.use("/upload", Express.static("public/upload"));

app.use(Express.json()); // 配置中间件，用于解析请求消息体中的json格式数据

// 使用postman进行测试
app.use("/api/movie", MovieRouter);
// 文件上传
// 通常情况下，服务器会提供一个统一的API接口，用于处理上传的文件
app.use("/api/upload", UploadRoute);

app.listen(3000);
