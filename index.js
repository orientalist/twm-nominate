const fs = require('fs');
const path = require('path');

const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
};

exports.handler = async (event) => {

    const filePath = path.join(__dirname, 'employee.json');
    const rawdata = fs.readFileSync(filePath);
    const data = JSON.parse(rawdata);

    const requestBody = JSON.parse(event.body);
    let surceyValue = '';
    surceyValue = requestBody.value;

    if (!surceyValue) {
        return {
            statusCode: 400,
            headers: headers,
            body: JSON.stringify({
                msg: '您尚未輸入資料喔!'
            })
        };
    }

    let id=surceyValue.split('-')[0];
    let name=surceyValue.split('-')[1];

    let validated=data.employee.some(e=>e.id===id&&e.name===name);
    
    if (!validated) {
        return {
            statusCode: 400,
            headers: headers,
            body: JSON.stringify({
                msg: '資料錯誤'
            })
        };
    }

    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
            msg: '已通過驗證'
        })
    };
};

//exports.handler({body:`{"value":"A12345-Victor"}`});