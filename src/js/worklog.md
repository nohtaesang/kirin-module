* 셀렉터를 만듬
* Kirin.select에 바인딩
* querySelectorAll 을 이용하여 nodeArr를 받아옴

* click 이벤트를 넣고싶음
* jquery 보니, selector로 생성한 nodelist가 사용할 여러 메소드들을 __proto__가 가리키고 있음
* functions을 만들어서 기능을 상속하게 하고싶음
* nodeList의 proto가 functions을 가리키니, 원래 가리키던 nodeList가 소실되어 length, symbol.iterator가 소실됨
* nodeArr -> functions -> nodeList 의 순서로 만들어줌

* slide toggle을 만들고싶음
* jquery을 보니 높이를 0, 기본 값을 이용하는 것 같음 + dispaly none
* animation 을 따로 만들어 node 하나가 애니메이션을 처리하도록 분리
* animate로 speed, callback, name 을 넘김
* 넘겨받은 값으로 queue에 저장
* queue 순서대로 실행하도록 