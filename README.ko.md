<div align="center">

<h1>📢 Coderder을 개발하며</h1>

해당 README엔 개발 관련 내용과 개발자로서 서비스를 만들며 했던 생각 등을 적어두었습니다.  
서비스의 실제 기능과 사용 방법은 [메인 README](https://github.com/team-coderder/Frontend-CRA/blob/main/README.md) 에서 확인하실 수 있습니다.

</div>

<br>

## 회고

#### **1. 컨벤션 및 기술 스택을 정하는 데 생각보다 많은 시간을 투자해야 한다**  
  
  - 좋은 코드를 많이 참고하자. 특히 폴더 구조. [Jira_clone/client](https://github.com/oldboyxx/jira_clone/tree/master/client), [RIDI](https://github.com/ridi/react-viewer), [Sendbird](https://github.com/sendbird/sendbird-supportchat-sample-react).  
  - **POC의 중요성**  — 주간 캘린더 라이브러리를 도입하며 시행착오를 겪었다 ([#19](https://github.com/team-coderder/Frontend-CRA/issues/19)). 가능한 한 필요 기능을 구체적으로 기술하고, 깃헙 스타 개수, npm trends, 문서화 정도를 확인한 후, POC로 입증하자. 🙆
  
#### **2. 초면이지만 좋았다, SWR**  

- 사용해보니 뜨는 이유를 알 것 같다. Redux보다 코드가 훨씬 깔끔하며 서버 동기화에 확실히 유리하다.  
  👉 블로그 정리: [왜 Redux가 아닌 SWR인가](https://tech-jiwoo.tistory.com/73)

#### **3. DX를 위한 MSW**

- 효율적인 개발을 위해 고민했는데, MSW가 눈에 띄었다. 빠르고 독립적인 프론트엔드 개발이 가능했지만, 백엔드 API 명세서가 정확해야 한다.   
  👉 블로그 정리: [MSW(Mock Service Worker) 도입하기](https://tech-jiwoo.tistory.com/63)

#### **4. 막상 해보니 배포는 매우 쉽다**

- AWS S3와 CloudFront로 배포하며 최신 AWS 권장사항을 지키려고 노력했다.
- Github Actions도 별게 아니었다. 무서워하지 말자 😎   
  👉 블로그 정리: [프론드엔드 배포를 위한 참고자료 총정리](https://tech-jiwoo.tistory.com/81)

#### **5. Emotion은 나쁘지 않은 정도**

- 개인적으로 일반 CSS 클래스를 사용하는 방법이 더 깔끔하다고 생각한다.
- Transient props가 지원되지 않는 이슈 등이 있었다.


<br>

## 개발자 기여도

#### 🧍 임지우 (<a href="https://github.com/lim-jiwoo">@lim-jiwoo</a>)

  - Figma로 UI를 디자인하고, 컴포넌트(Modal, Dialog, Navbar, Schedule)와 페이지를 반응형으로 구현   
  - `SWR` 훅으로 **모든 상태 관리 및 로직** 구현 (스케쥴, 팀, 멤버 CRUD)  
  - `JWT`를 사용한 **로그인/회원가입** 구현. 이를 위한 리다이렉션과 웹스토리지 관리 class 생성  
  - DX 향상을 위해 `Mock Service Worker` 도입  
  - `AWS S3`와 `CloudFront`로 배포하고, `Github Actions`로 CI/CD 파이프라인 구축  
  - 주요 라이브러리 PoC 검증 후 도입 (예: `FullCalendar` `randomcolor`)  
  - **알고리즘 지식을 활용해** 효율적인 코드 작성 (예: 이진 탐색으로 겹치는 일정 감지)  
  - `Git`의 `Issue` 및 `PR`을 적극적으로 사용해 협업하고, 코드리뷰에 열정적으로 참여함.  
  
#### 🧍 권영재 (<a href="https://github.com/dwdjjj">@dwdjjj</a>)

  - CRA 없이 리액트 앱 구축
  - 컴포넌트(버튼, 멤버, Nav, 인풋) 구현
  - 로그인과 회원가입 페이지 디자인 및 구현    
  - `Git`의 `Issue` 및 `PR`을 적극적으로 사용해 협업하고, 코드리뷰에 열정적으로 참여함.  

<br>

## 앞으로의 계획

- [ ] 받은 사용자 피드백 적용하기
- [ ] Jest로 테스트 코드 짜기.
- [ ] Auth best practice 적용 (예: refresh token)
- [ ] SWR 요청 개수를 줄이는 등 (예: `useSWRImmutable`로 교체) 성능 최적화
- [x] Github Actions로 CI/CD 구축.
- [x] 반응형으로 만들기
- [ ] 미팅 시간 추천 등 기능 추가하기
