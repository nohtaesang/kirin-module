* 셀렉터를 만듬
* Kirin.select에 바인딩
* querySelectorAll 을 이용하여 nodeArr를 받아옴

* click 이벤트를 넣고싶음
* jquery 보니, selector로 생성한 nodelist가 사용할 여러 메소드들을 __proto__가 가리키고 있음
* functions을 만들어서 기능을 상속하게 하고싶음
* nodeList의 proto가 functions을 가리키니, 원래 가리키던 nodeList가 소실되어 length, symbol.iterator가 소실됨
* nodeArr -> functions -> nodeList 의 순서로 만들어줌

* slide
    * slideUp, slideDown, slideToggle
    * duration, ease, callback
    * 둘다 없을 경우, option만, callback만, 둘 다 있을 경우 => 분기처리
    * getOwnOrInitProperty() 함수를 만들어서, option에 property를 검사 후 있으면 그 속성을, 없으면 init을 반환하도록
    * css를 이용, transition을 설정하고 높이를 설정, visibility를 설정
    * 애니메이션 종료 후 콜백을 실행하기 위해 doCallback() 함수 만듬
    * node 하나당 animation 클로저를 하나 가짐
    * genAnim 함수로 클로저 안의 queue에 애니메이션을 추가함
    * queue에 들어온 순서대로 애니메이션 처리

* hide
    * hide, show, hideToggle
    * delay, callback

* chaining을 위해 return nodeArr를 추가
* queue에 추가되므로, 알아서 실행됨

* fade

* visibility 대신 display 사용

* delay 추가

* git ignore

* transition의 특성상, 시작 css 속성이 설정되어 있어야 한다.

* 애니메이션 방식 css 에서 script로 변경

* 20190515
nodeList 에서 nodeArr로 변경
manipulation 작업중
