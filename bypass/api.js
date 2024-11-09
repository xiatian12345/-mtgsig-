const axios = require('axios');
const baseURL = 'http://0.0.0.0:5989';

const post_searchListPage = () => {
    return new Promise(async (resolve) => {
        const url = 'https://shangoue.meituan.com/reuse/sc/product/retail/r/searchListPage';
        const body = {
            'wmPoiId': '13190104',
            'pageNum': '1',
            'pageSize': '20',
            'needTag': '0',
            'name': '',
            'brandId': '0',
            'tagId': '0',
            'searchWord': '',
            'state': '0',
            'saleStatus': '0',
            'limitSale': '0',
            'needCombinationSpu': '2',
            'noStockAutoClear': '-1'
        };
        const params = {
            'yodaReady': 'h5',
            'csecplatform': '4',
            'csecversion': '2.4.0'
        }

        const method = 'POST';

        let r = await axios.post(baseURL, { url, body, params, method })
        resolve(r.data)
    })
}

const get_count = () => {
    return new Promise(async (resolve) => {
        const url = 'https://shangoue.meituan.com/v2/order/receive/unprocessed/r/count';
        const body = {};
        const params = {
            "region_id": "1000420500",
            "region_version": "1635043681",
            "wmPoiId": "13190104",
            "acctId": "113631278",
            "token": "0V-7fBjLTIjket1D80PBBmPn4PqK4YnTmg3Osp4TkPyk*",
            "appType": "3",
            "labelInfo": "",
            "countLabelInfo": "20241107",
            "yodaReady": "h5",
            "csecplatform": "4",
            "csecversion": "3.0.0"
        }
        const method = 'GET';


        let r = await axios.post(baseURL, { url, body, params, method })
        resolve(r.data)
    })
}


const get_chargeInfo = () => {//no
    return new Promise(async (resolve) => {
        const url = 'https://shangoue.meituan.com/v2/order/receive/r/chargeInfo';
        const body = {
            'chargeInfo': [{ "wmOrderViewId": "501327081638978875", "wmPoiId": 20245227 }]
        };
        const params = {
            'ignoreSetRouterProxy': 'true',
            'yodaReady': 'h5',
            'csecplatform': '4',
            'csecversion': '3.0.0',
        }

        const method = 'POST';

        let r = await axios.post(baseURL, { url, body, params, method })
        resolve(r.data)
    })
}

const get_query = () => {
    return new Promise(async (resolve) => {
        const url = 'https://waimaieapp.meituan.com/bff/ad/poi/v1/shangou_onestop/orient/query';
        const body = {
            'acctId': '113631278',
            'wmPoiId': '13190104',
            'token': '0V-7fBjLTIjket1D80PBBmPn4PqK4YnTmg3Osp4TkPyk*',
            'platform': '0',
            'bizad_cityId': '420581',
            'bizad_second_city_id': '420500',
            'bizad_third_city_id': '420581',
            'adOrientTypeList': '[16,17,18]',
            'source': '1'
        };
        const params = {
            'yodaReady': 'h5',
            'csecplatform': '4',
            'csecversion': '2.4.0'
        }

        const method = 'POST';

        let r = await axios.post(baseURL, { url, body, params, method })
        resolve(r.data)
    })
}



const get_v3 = () => {
    return new Promise(async (resolve) => {
        const url = 'https://shangoue.meituan.com/api/retail/operation/level/pc/indicator/detail/v3';
        const body = {
            'wmPoiId': '13190104',
            'acctId': '113631278',
            'token': '0V-7fBjLTIjket1D80PBBmPn4PqK4YnTmg3Osp4TkPyk*'
        };
        const params = {
            'yodaReady': 'h5',
            'csecplatform': '4',
            'csecversion': '3.0.0',
        }

        const method = 'POST';

        let r = await axios.post(baseURL, { url, body, params, method })
        resolve(r.data)
    })
}

const post_overInfo = () => {
    return new Promise(async (resolve) => {
        const url = 'https://shangoue.meituan.com/api/retail/v3/delivery/overInfo';
        const body = [
            {
                'poiId': 19219923,
                'orderViewId': '1901328680732656648'
            }
        ];
        const params = {
            'ignoreSetRouterProxy': 'true',
            'yodaReady': 'h5',
            'csecplatform': '4',
            'csecversion': '3.0.0',
        }

        const method = 'POST';

        let r = await axios.post(baseURL, { url, body, params, method })
        resolve(r.data)
    })
}


const post_busnessInfo = () => {
    return new Promise(async (resolve) => {
        const url = 'https://shangoue.meituan.com/common/businessStatus';
        const body =
        {
            "wmPoiId": "13190104"
        }

        const params = {
            'region_id': '1000420500',
            'region_version': '1635043681',
            'yodaReady': 'h5',
            'csecplatform': '4',
            'csecversion': '3.0.0',
        }

        const method = 'POST';

        let r = await axios.post(baseURL, { url, body, params, method })
        resolve(r.data)
    })
}

const post_all = () => {
    return new Promise(async (resolve) => {
        const url = 'https://shangoue.meituan.com/api/retail/v3/order/all';
        const body =
        {
            'startTime': '20241108',
            'endTime': '20241108',
            'queryType': '-1',
            'sortType': '1',
            'tagTypeList': '[]',
            'poiId': '-1',
            'acctId': '179469014',
            'pageSize': '15',
            'pageNum': '1'
        }

        const params = {
            'ignoreSetRouterProxy': 'true',
            'yodaReady': 'h5',
            'csecplatform': '4',
            'csecversion': '3.0.0',
        }

        const method = 'POST';

        let r = await axios.post(baseURL, { url, body, params, method })
        resolve(r.data)
    })
}
const main = () => {
    // get_count().then(res => {
    //     console.log(res)
    // });
    post_searchListPage().then(res => {
        console.log(res)
        // console.log(JSON.stringify(res, null, 2))
    });
    // get_chargeInfo().then(res => {
    //     console.log(res)
    //     // console.log(JSON.stringify(res, null, 2))
    // });
    // get_query().then(res => {
    //     console.log(res)
    //     // console.log(JSON.stringify(res, null, 2))
    // });
    // get_v3().then(res => {
    //     console.log(res)
    //     // console.log(JSON.stringify(res, null, 2))
    // });
    // post_all().then(res => {
    //     console.log(res)
    //     // console.log(JSON.stringify(res, null, 2))
    // });
}

main();