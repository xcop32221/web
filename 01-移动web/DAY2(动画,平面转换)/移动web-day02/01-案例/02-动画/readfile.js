const fs = require('fs');
const { opendir } = require('fs/promises');


async function readFile() {
    try {
        // 打开目录并且读取所有文件目录名
        const dir = await opendir('./');
        let fileArray = [];
        for await (const dirent of dir) {
            if (dirent.name.includes('.html') && dirent.name != 'index.html') {
                fileArray.push(dirent.name);
            }
        }

        let html = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                * {
                    padding: 0;
                    margin: 0;
                }
                li {
                    list-style: none;

                }

                body {
                    height:100vh;
                    background:'#fff'
                }

                a {
                    text-decoration: none;
                    font-family: '微软雅黑';
                    font-size: 20px;
                    line-height: 26px;
                    font-weight: 600;
                    color: #777;
                }

                li:hover a {
                    color:#ff5e52
                }
            </style>
            </head>
            <body>
                <ul>
                    ${
                        fileArray.map(item =>{
                          return `<li><a href="${item}">${item.split('.')[0]}</a></li>`  
                        }).join('')
                    }
                </ul>
            </body>
            </html>
        `;


        fs.writeFile('index.html', html, 'utf8', function (err) {
            if (err) return;
            console.log('写入成功');
        });
    } catch (err) {
        console.error(err);
    }
}
readFile();
