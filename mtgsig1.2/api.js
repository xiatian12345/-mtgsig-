const axios = require("axios");
const bytenode = require('bytenode');
const { sign } = require("./mtgsig1.2.jsc");

// 美团闪购web端
(async () => {
    let cookie = '换成你的cookie';
    let url = "https://shangoue.meituan.com/api/retail/v3/delivery/overInfo";
    let params = {
        'ignoreSetRouterProxy': 'true',
        'yodaReady': 'h5',
        'csecplatform': '4',
        'csecversion': '3.0.0',
        //根据需要，mtgsig应该需要放回这里
    };
    let body = [
        {
            'poiId': 19219923,
            'orderViewId': '1901328680732656648'
        }
    ];
    let method = "POST";
    let headers = {
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'DNT': '1',
        'Origin': 'https://shangoue.meituan.com',
        'Pragma': 'no-cache',
        'Referer': 'https://shangoue.meituan.com/page/order?ignoreSetRouterProxy=true',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        Cookie: cookie,
    };

    let para = {
        url: url,
        params: params,
        method: method,
        headers: headers,
        body: body
    };
    let mtgsig = await sign(para);
    let mtgsigObj = JSON.parse(mtgsig.headers.mtgsig);
    let mtgsigStr = JSON.stringify(mtgsigObj);
    console.log("\n生成的mtgsig============>", mtgsigStr, "\n");

    try {
        console.log("开始发送请求");
        params.mtgsig = mtgsigStr;
        let printerHeaders = JSON.parse(JSON.stringify(headers));

        console.log("参数1", url);
        console.log("参数2", body);
        console.log("参数3", params);
        console.log("参数4", printerHeaders);

        const response = await axios.post(url, body, {
            params: params,
            headers: headers,
        });
        console.log("开始获取结果");
        console.log(response.data);
    } catch (e) {
        console.log(e.message);
    }
})();
