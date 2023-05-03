🚩 **개발자 README는 [여기](https://github.com/team-coderder/Frontend-CRA/blob/main/README.ko.md)서 확인해주세요!**

<br>

<div align="center">

<h1>Coderder</h1>

Plan Your Group Meetings with Coderder!<br>
This web application allows you to view your group members' schedules combined<br>
and figure out the most suitable meeting time at a single glance.<br>

팀원들의 시간표를 모아서 보여주는 웹서비스.<br>
최적의 모임 시간을 한눈에 찾을 수 있습니다!

<a href="http://d2bevc8l715g2k.cloudfront.net"><strong>Visit Coderder</strong></a>

```
---Try with the following account/다음 임시 계정을 사용하세요---

🧑 username: gildong
💨 password: asdfasdf!
```

<br>

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
![SWR](https://user-images.githubusercontent.com/65887537/216818261-3b574a09-d479-46e3-82d0-183f662e3ab3.png)
<img src="https://img.shields.io/badge/emotion-e695d4?style=for-the-badge&logo=emotion&logoColor=white">
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) <br>
![FullCalendar](https://user-images.githubusercontent.com/65887537/220838090-6d56dab4-e432-4763-a5e5-3fe8349bde87.png)
![MSW](https://user-images.githubusercontent.com/65887537/216818328-0e1cd6eb-7745-4ac9-9e61-30c87ae68b1a.png)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
<img src="https://img.shields.io/badge/amazons3-5A29E4?style=for-the-badge&logo=amazons3&logoColor=white">
<img src="https://img.shields.io/badge/cloudfront-FF9900?style=for-the-badge&logo=cloudfront&logoColor=white">

</div>

<br><br><br>

## Table of Contents

- [Installing](#toc1)
- [Features](#toc2)
- [Folder Structure](#toc3)
- [Tech Stack](#toc4)
- [Contributors](#toc7)
- [More to come...](#toc6)

<br>

## Installing<a name="toc1"></a>

To run locally, clone the repository and run `npm i && npm start`.

```shell
$ npm install
$ npm start
```

You also need to create an `.env` file in the root directory and set following environment variables. See `.env.example` 

```shell
# .env
REACT_APP_BASE_URL={server IP address}
```

<br>

## Features<a name="toc2"></a>

### :: Create Account

- Create an account with username, password, and nickname.

<img src="https://user-images.githubusercontent.com/65887537/235870694-0ba9c41f-e4b0-4222-9852-cda17c92d13d.gif" width="1000" alt="login/signup demo" />

### :: Add your schedule

- Click & Drag on the calendar to create new events. Give a title explaining the event.
- Click on an existing event to delete it.

<img src="https://user-images.githubusercontent.com/65887537/235876641-481a5970-0063-45f9-a809-adfdac05fa0b.gif" width="1000" alt="my schedule demo" />

### :: Create your own group

- Create your own group.
- You may change the group's name or delete the group.

<img src="https://user-images.githubusercontent.com/65887537/235876689-06b7c451-a001-49f7-b4c0-caa724b7781f.gif" width="1000" alt="create group demo" />

### :: Invite members to your group

- Search members with username and invite them to your group.
- You may uninvite or delete a member from the group.

<img src="https://user-images.githubusercontent.com/65887537/235876693-e0584529-f13c-4707-a486-ad4343b53941.gif" width="1000" alt="invite member demo" />

- Accept or reject invitations.
- You may leave the group.

<img src="https://user-images.githubusercontent.com/65887537/235876709-2cc53a4f-7945-49ca-855b-284284da2c70.gif" width="1000" alt="accept invitation demo" />

### :: Add group schedules

- Each unique color represents a different member.
- Click & Drag on the calendar to create new events. Give a title explaining the event.
- Click on an existing event to delete it.

<img src="https://user-images.githubusercontent.com/65887537/235876729-6034e8a3-9bc3-4abe-a028-cc61a497a1ae.gif" width="1000" alt="team schedule demo" />

<br>

## Folder Structure<a name="toc3"></a>

```
src
├── api             // functions calling backend APIs
├── assets
├── components      // components categorized by usage
│   ├── common      // componets used in common (ex. button, input)
│   ├── layouts     // layouts used in router
│   ├── members
│   ├── navbar
│   └── schedule
├── constant        // string values as constants
├── hooks           // SWR hooks and other react hooks are separated
│   ├── common
│   └── swr
|       ├── invitation
|       ├── member
|       ├── schedule
|       └── team
├── lib             // collection of helper functions (ex. browser storage actions)
│   └── storage
├── mocks           // MSW mock functions
├── routes          // router
├── styles
│   ├── componentStyle   // styled-components and css
│   ├── globalStyle      // styles applied globally
│   └── theme            // hex color codes, etc.
├── types           // type declaration
├── utils           // utility functions
│   ├── common      // utility functions used in common
│   ├── schedule
│   └── team
└── views           // pages provided to the router
```

<br>

## Tech Stack<a name="toc4"></a>

|Category|Tech|
| :-: |:- |
|Language|![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)|
|Framework|![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)|
|Data/State Management|<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> ![SWR](https://user-images.githubusercontent.com/65887537/216818261-3b574a09-d479-46e3-82d0-183f662e3ab3.png)|
|Style|<img src="https://img.shields.io/badge/emotion-e695d4?style=for-the-badge&logo=emotion&logoColor=white"> ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)|
|Design|![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)|
|Other third-party libraries|![FullCalendar](https://user-images.githubusercontent.com/65887537/220838090-6d56dab4-e432-4763-a5e5-3fe8349bde87.png)|
|DX|![MSW](https://user-images.githubusercontent.com/65887537/216818328-0e1cd6eb-7745-4ac9-9e61-30c87ae68b1a.png) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) ![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)|
|Server|<img src="https://img.shields.io/badge/amazons3-5A29E4?style=for-the-badge&logo=amazons3&logoColor=white"> <img src="https://img.shields.io/badge/cloudfront-FF9900?style=for-the-badge&logo=cloudfront&logoColor=white">|
|Collaboration|![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white) ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)|

<br>

## Contributors<a name="toc7"></a>

- 🧍 임지우 (<a href="https://github.com/lim-jiwoo">@lim-jiwoo</a>)
- 🧍 권영재 (<a href="https://github.com/dwdjjj">@dwdjjj</a>)

<br>

## More to come...<a name="toc6"></a>

> <img src="https://user-images.githubusercontent.com/65887537/216818492-377e4711-b04b-44d4-b2d4-824e8e8126a6.png" width="17px"/> What future plans we have for improvements and new features?

- [ ] Show the recommended times for group meeting on the calendar.
- [ ] Show the 'density' of members' schedules for each time range, represented by color intensity.
- [ ] When user clicks on a member badge, show the member's schedule only.
- [ ] Edit my information.
- [ ] Delete my account.
- [ ] Edit schedule by dragging the edge.
