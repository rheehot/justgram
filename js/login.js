//3가지 요소가 필요함       elements:배열안으로 들어감
//getElementById : HTML에 아이디명으로 요소를 가져옴
// const idForm = document.getElementById('idForm');  //id요소
// const pwForm = document.getElementById('pwForm');  //pw요소
// const btnEvent = document.getElementById('btn');   //btn요소

//addEventListener등록
//addEventListever('', () => { 실행 }) : 익명함수, 이름없는 함수
// idForm.addEventListener('input',() => {})
// pwForm.addEventListener('input',() => {})

function onInput(){
  // 브라우저 콘솔창에 event.target : 해당이벤트를 실행한 요소가 보임
  const id = idForm.value;
  const pw = pwForm.value;

  if(id.length >= 1 && pw.length >= 1) {
    // 활성화
    console.log('활성화')
    btnEvent.style.backgroundColor = "#1e90ff";
    btnEvent.style.cursor = "pointer";
    btnEvent.disabled = false;
  }else{
    // 비활성화
    console.log('비활성화');
    btnEvent.style.backgroundColor = "#abd5ff";
    btnEvent.style.cursor = "not-allowed";
    btnEvent.disabled = true;
  }
}

idForm.addEventListener('input',onInput);
pwForm.addEventListener('input',onInput);
btnEvent.addEventListener('button', (event) => {
  event.preventDefault();
});

onInput()





// idForm.addEventListener('keyup',listener);
// pwForm.addEventListener('keyup',listener);



// function listener(){
//   //공백문자 판별할때 !를 사용
//   switch(!(idForm.value && pwForm.value)){
//     case true: btnEvent.disabled = true; break;
//     case false: btnEvent.disabled = false;break
//   }
// }
// listener()

// function listener(){
//   if((idForm.value && pwForm.value)){
//     btnEvent.disabled = false;
//   }else{
//     btnEvent.disabled = true;
//   }
// }
// listener()
//

