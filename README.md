<div align="center">

<h1>Coderder</h1>

Plan Your Group Meetings with Coderder!<br>
This web application allows you to view your group members' schedules combined<br>
and figure out the most suitable meeting time at a single glance.

<a href="http://d2bevc8l715g2k.cloudfront.net"><strong>Visit Coderder!</strong></a>

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

<br>

## Table of Contents

- [Installing](#toc1)
- [Features](#toc2)
- [Folder Structure](#toc3)
- [Tech Stack](#toc4)
- [Contributions](#toc7)
- [Discussions](#toc5)
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

- Create an account with ID, password, and nickname.

<img src="https://user-images.githubusercontent.com/65887537/220830894-77bd4d0c-7ba5-44c3-81d0-bcfd45912a85.gif" width="1000" alt="login/signup demo" />

### :: Add your schedule

- Click & Drag on the calendar to create new events. Give a title explaining the event.
  - Cannot create overlapping events.
  - Cannot create events spanning multiple days.
- Click on an existing event to delete it.

<img src="https://user-images.githubusercontent.com/65887537/220831208-562ba944-bb29-4765-b014-358f342f17bb.gif" width="1000" alt="my schedule demo" />

### :: Create your own group

- Create your own group.
- You may change the group's name or delete the group.

<img src="https://user-images.githubusercontent.com/65887537/220831215-63cb481d-8bd5-42b6-a98a-0b0eadc2a484.gif" width="1000" alt="create group demo" />

### :: Invite members to your group

- Search members with username and invite them to your group.
- You may uninvite or delete a member from the group.

<img src="https://user-images.githubusercontent.com/65887537/220831604-6db233d5-1e6b-4b50-b0b5-02a5ce8885c4.gif" width="1000" alt="invite member demo" />

- Accept or reject invitations.
- You may leave the group.

<img src="https://user-images.githubusercontent.com/65887537/220831608-9a57b169-804a-4e59-983f-7ebd9d122b1c.gif" width="1000" alt="accept invitation demo" />

### :: View your group members' schedules combined

- Each unique color represents a different member.

### :: Add your group's own schedule

- Click & Drag on the calendar to create new events. Give a title explaining the event.
- Click on an existing event to delete it.

<img src="https://user-images.githubusercontent.com/65887537/220831629-bf0015d3-0fb3-48a5-8030-2a2a8296cae6.gif" width="1000" alt="team schedule demo" />

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

> <img src="https://user-images.githubusercontent.com/65887537/216818492-377e4711-b04b-44d4-b2d4-824e8e8126a6.png" width="17px"/> This section discusses which frameworks/libraries were used and why

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

- 📌 Read [**[How we decided which tech stack to use]**](https://www.notion.so/6e4a167f94174bf1bc7e2e1daceb893d?pvs=4#105aea09d51d49c4ac4f47e10729360e) (in KR)

<br>

## Contributions<a name="toc7"></a>

> <img src="https://user-images.githubusercontent.com/65887537/216818492-377e4711-b04b-44d4-b2d4-824e8e8126a6.png" width="17px"/> This section introduces the developers who contributed to this project

<table>
  <tr>
    <th>Member</th>
    <th>Contribution</th>
  </tr>
  <tr>
    <td>권영재 (<a href="https://github.com/dwdjjj">@dwdjjj</a>)</td>
    <td>
      - Set up basic React app without CRA <br>
      - Create Button, Member, Nav, TextInput components <br>
      - Design and create Login, Singup pages <br>
      - Configure global styles and themes
    </td>
  </tr>
  <tr>
    <td>임지우 (<a href="https://github.com/lim-jiwoo">@lim-jiwoo</a>)</td>
    <td>
      - Create Modal, Navbar components <br>
      - Design and create GroupInfo, AddGroup, MySchedule, TeamSchedule pages <br>
      - Create routing with react-router-v6 <br>
      - Install SWR for state management and create SWR hooks to connect backend APIs <br>
      - Implement auth-related logic, including redirection and handling browser storage <br>
      - Implement team and invitation-related logic <br>
      - Implement member management logic <br>
      - Install calendar library and implement schedule related logic and functionalities <br>
      - Create API mock functions using Mock Service Worker <br>
      - Deploy on S3 + CloudFront
    </td>
  </tr>
</table>

<br>

## Discussions<a name="toc5"></a>

> <img src="https://user-images.githubusercontent.com/65887537/216818492-377e4711-b04b-44d4-b2d4-824e8e8126a6.png" width="17px"/> This section discusses some of the topics we studied and focused on during development

- 📌 Read [**[How I studied v6 of React-router]**](https://www.notion.so/6e4a167f94174bf1bc7e2e1daceb893d?pvs=4#7d109dc474d34f24beecfa22102095e0) (in KR)
- 📌 Read [**[How I studied best practices of Auth]**](https://www.notion.so/6e4a167f94174bf1bc7e2e1daceb893d?pvs=4#0c1b9f63df2c4edaa9c85907233e0bed) (in KR)
- 📌 Read [**[How we chose which open-source calendar library to use]**](https://www.notion.so/6e4a167f94174bf1bc7e2e1daceb893d?pvs=4#32f993ac978e4d5b868092e5804b9311) (in KR)
- 📌 Read [**[How we decided to use SWR]**](https://www.notion.so/6e4a167f94174bf1bc7e2e1daceb893d?pvs=4#66df99992f69429484efac4b8a7e5d8d) (in KR)
- 📌 Read [**[How I decided to use MSW]**](https://www.notion.so/6e4a167f94174bf1bc7e2e1daceb893d?pvs=4#6b9ab9239a9c4195abe1b60bf9b2982a) (in KR)
- 📌 Read [**[How I decided where to deploy the app]**](https://www.notion.so/6e4a167f94174bf1bc7e2e1daceb893d?pvs=4#1e0e21cbb1a645e4b7bb53c9dc224add) (in KR)

<br>

## More to come...<a name="toc6"></a>

> <img src="https://user-images.githubusercontent.com/65887537/216818492-377e4711-b04b-44d4-b2d4-824e8e8126a6.png" width="17px"/> This section discusses what future plans we have for improvements and new features

### :: DX

- [ ] Increase test coverage (Jest).
- [ ] Test on different environments (ex. different browser engines).
- [ ] CI/CD using Github Actions etc.
- [ ] Frontend performance optimization (SWR etc.)
- [ ] Make UI Mobile responsive.

### :: UX

- [ ] Show the recommended times for group meeting on the calendar.
- [ ] Show the 'density' of members' schedules for each time range, represented by color intensity.
- [ ] When user clicks on a member badge, show the member's schedule only.
- [ ] Edit my information.
- [ ] Delete my account.
- [ ] Edit schedule by dragging the edge.
