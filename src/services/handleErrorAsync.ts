import { NextFunction } from 'express';

const handleErrorAsync = function handleErrorAsync(func: any) {
  // func 先將 async fun 帶入參數儲存
  // middleware 先接住 router 資料
  return function (req: Request, res: Response, next: NextFunction) {
    //再執行函式，並增加 catch 條件去捕捉
    // async 本身就是 promise，所以可用 catch 去捕捉
    func(req, res, next).catch(function (error: any) {
      return next(error);
    });
  };
};

module.exports = handleErrorAsync;
