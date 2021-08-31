window.addEventListener('load', function () {
    
    document.getElementsByTagName('button')[0].addEventListener('click', function () {
        var lottoNumbers = [];
        while (lottoNumbers.length < 7) {
            var tmpnumber = Math.floor(Math.random() * 45) + 1;
            if (lottoNumbers.indexOf(tmpnumber) === -1) {
                lottoNumbers.push(tmpnumber);
            }
        }
        const numberArea = document.getElementById('number');
        numberArea.innerHTML = '추첨번호 : ';
        
        for (i = 0; i < 5; i++){
            numberArea.innerHTML += lottoNumbers[i];
            numberArea.innerHTML += ", ";
        }
        numberArea.innerHTML += lottoNumbers[5];

        const b_area = document.getElementById('bonus');
        b_area.innerHTML = '보너스 번호 : ';
        b_area.innerHTML += lottoNumbers[6];
    });
  
  });
  
