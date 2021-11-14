    var input = prompt('var 키워드의 비동기 함수 문제\n' + 
                    '1. 비동기 함수와 var 키워드를 사용할 때\n'  + 
                    '2. 비동기 함수와 var 키워드를 사용할 때의 문제 해결\n'  + 
                    '3. let 키워드를 사용한 문제 해결\n'  + 
                        '번호를 입력해주세요');


    switch (input){
        case "1":
            for(var i = 0;i < 3; i++){
                // 1초(1000밀리 초) * i초 후에 i를 출력
                setTimeout(() => {
                    alert(i);
                }, 1000 * i);
            }
            break;
        case "2":
            for(var i = 0;i < 3; i++){
                // 1초(1000밀리 초) * i초 후에 i를 출력
                ((i) => {
                        setTimeout(() => {
                            alert(i);
                        }, 1000 * i);
                })(i);
            }
            break;

        case "3":
            for(let i = 0;i < 3; i++) {
                // 1초(1000밀리 초) * i초 후에 i를 출력
                setTimeout(() => {
                    alert(i);
                }, 1000 * i);
            }
            break;
        default:
            alert("잘못입력했습니다.");
    }