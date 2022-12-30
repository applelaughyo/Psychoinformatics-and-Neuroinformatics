var express = require('express');
var cors = require('cors');
var fs = require('fs');
const app = express();
app.use(cors());
const { execSync } = require('child_process');

app.get('/', function(req, res){
    record_1 = `正確答案: same 受試者答案:${req.query.t1_response} 受試者所花時間：${req.query.t1_rt}\n`
    record_2 = `正確答案: diff 受試者答案:${req.query.t2_response} 受試者所花時間：${req.query.t2_rt}\n`
    record_3 = `正確答案: diff 受試者答案:${req.query.t3_response} 受試者所花時間：${req.query.t3_rt}\n`
    let buffer = new Buffer.from(record_1 + record_2 + record_3);
    fs.open('./record.txt', 'w', function (err,fd) {
        if(err) {
            console.log('Cant open file');
        }else {
            fs.write(fd, buffer, 0, buffer.length, 
                    null, function(err,writtenbytes) {
                if(err) {
                    console.log('Cant write to file');
                }else {
                    console.log(writtenbytes +
                        ' characters added to file');
                }
            })
        }
    });
});

const port = 4000
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})