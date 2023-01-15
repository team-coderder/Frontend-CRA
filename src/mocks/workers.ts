import { setupWorker, rest } from 'msw';

const MSW_MODE = true;

const BASE_URL = process.env.REACT_APP_BASE_URL;

const authHandlers = [
    // 로그인
    rest.post(BASE_URL + `/login`, async (req, res, ctx) => {
        const token = 'ABC';

        return res(
            ctx.status(200),
            ctx.set('Authorization', `Bearer ${token}}`),
            ctx.json({
                data: {
                    username: 'max@gmail.com',
                    nickname: 'max',
                },
            }),
        );
    }),
    // 닉네임 일부로 유저 검색
    rest.get(
        BASE_URL + `/api/member/search/nickname?query=${'check'}`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    members: [
                        {
                            id: 1,
                            username: 'coderder815',
                            nickname: 'check-filter',
                        },
                        {
                            id: 2,
                            username: 'coderder814',
                            nickname: 'check-filter',
                        },
                    ],
                }),
            );
        },
    ),
    // 유저네임으로 유저 검색
    rest.get(
        BASE_URL + `/api/member/search/username?query=${'coderder'}`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    members: [
                        {
                            id: 1,
                            username: 'coderder815',
                            nickname: 'check-filter',
                        },
                        {
                            id: 2,
                            username: 'coderder814',
                            nickname: 'check-filter',
                        },
                    ],
                }),
            );
        },
    ),
    // 마이페이지 (username, nickname)
    rest.get(
        BASE_URL + `/api/member/mypage?memberId=${1}`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    id: 1,
                    username: 'coderder815',
                    nickname: 'check-filter',
                }),
            );
        },
    ),
];

const teamHandlers = [
    // 그룹 생성하기
    rest.post(BASE_URL + `/api/team`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                teamId: 12,
                name: 'group1',
            }),
        );
    }),
    // 그룹 정보 조회하기
    rest.get(BASE_URL + `/api/team?teamId=${1}`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                teamId: 1,
                name: 'group1',
                teamMembers: [
                    {
                        memberId: 3,
                        username: 'coderder',
                        nickname: '재연결 테스트',
                        teamRole: 'LEADER',
                    },
                ],
                invitations: [
                    {
                        invitationId: 10,
                        fromTeamId: 12,
                        fromMemberId: 3,
                        toMemberId: 1,
                        createdAt: '2023-01-03T13:18:32.216492',
                    },
                ],
            }),
        );
    }),
    // 그룹 수정하기
    rest.patch(BASE_URL + `/api/team?teamId=${1}`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                teamId: 1,
                name: '새로운 팀 이름',
            }),
        );
    }),
    // 그룹 삭제하기
    rest.delete(BASE_URL + `/api/team?teamId=${1}`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '그룹(teamId : 1) 삭제 완료',
            }),
        );
    }),
    // 그룹 멤버 조회하기
    rest.get(
        BASE_URL + `/api/team/members?teamId=${1}`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    teamMembers: [
                        {
                            memberId: 3,
                            username: 'coderder',
                            nickname: '재연결 테스트',
                            teamRole: 'LEADER',
                        },
                        {
                            memberId: 5,
                            username: 'coderder78',
                            nickname: 'check-filter',
                            teamRole: 'FOLLOWER',
                        },
                    ],
                }),
            );
        },
    ),
    // 그룹 멤버 추가하기
    rest.patch(BASE_URL + `/api/team/members`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '그룹(teamId : 12)의 멤버로 추가 완료',
            }),
        );
    }),
    // 그룹에서 멤버 탈퇴시키기
    rest.delete(BASE_URL + `/api/team/members`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '그룹(teamId : 1)에서 멤버 2명 탈퇴 처리 완료',
            }),
        );
    }),
    // 내 그룹 목록 가져오기
    rest.get(BASE_URL + `/api/team/myteams?`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                teams: [
                    {
                        teamId: 3,
                        name: '사이드프로젝트팀',
                    },
                    {
                        teamId: 4,
                        name: '사이드프로젝트팀',
                    },
                ],
            }),
        );
    }),
    // 내 그룹에서 탈퇴하기
    rest.delete(
        BASE_URL + `/api/team/myteam?teamId=${1}`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    message: '그룹(teamId : 3)에서 탈퇴 완료',
                }),
            );
        },
    ),
];

const scheduleHandlers = [
    // 일정 조회하기
    rest.get(
        BASE_URL + `/api/schedule/calendar?userId=${1}`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        userId: 'coderder815',
                        name: 'test_schedule',
                        weekday: 'MON',
                        startTime: '11:00',
                        finishTime: '12:30',
                        memo: null,
                        groupId: null,
                    },
                    {
                        userId: 'coderder815',
                        name: 'test_schedule12',
                        weekday: 'TUE',
                        startTime: '13:00',
                        finishTime: '14:30',
                        memo: null,
                        groupId: null,
                    },
                ]),
            );
        },
    ),
    // 내 일정 만들기
    rest.patch(BASE_URL + `/api/schedule/myschedule`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '개인 스케쥴 test_schedule추가 완료',
            }),
        );
    }),
    // 팀원 전체 일정 조회
    rest.get(
        BASE_URL + `/api/schedule/myteam?teamId=${1}`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        userId: 'coderder815',
                        name: 'test_schedule',
                        weekday: 'MON',
                        startTime: '11:00',
                        finishTime: '12:30',
                        memo: null,
                        groupId: null,
                    },
                    {
                        userId: 'coderder815',
                        name: 'test_schedule',
                        weekday: 'MON',
                        startTime: '11:00',
                        finishTime: '12:30',
                        memo: null,
                        groupId: null,
                    },
                ]),
            );
        },
    ),
    // 팀 일정 생성하기
    rest.post(
        BASE_URL + `/api/schedule/teamschedule`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    message: '팀 스케쥴 team1_weekly_study 추가 완료',
                }),
            );
        },
    ),
    // 팀 일정 조회
    rest.get(
        BASE_URL + `/api/schedule/teamschedule?teamId=${1}`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        name: 'team1_weekly_study',
                        weekday: 'mon',
                        startTime: '09:00:00',
                        finishTime: '10:00:00',
                        memo: null,
                    },
                    {
                        name: 'team1_weekly_study',
                        weekday: 'mon',
                        startTime: '09:00:00',
                        finishTime: '10:00:00',
                        memo: null,
                    },
                ]),
            );
        },
    ),
    // 팀 시간 추천
    rest.get(
        BASE_URL + `/api/schedule/recommendations`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        weekday: 'mon',
                        start_time: '00:00:00',
                        finish_time: '00:30:00',
                    },
                    {
                        weekday: 'mon',
                        start_time: '00:30:00',
                        finish_time: '01:00:00',
                    },
                ]),
            );
        },
    ),
];

const invitationHandlers = [
    // 유저에 초대장 보내기
    rest.post(BASE_URL + `/api/invite`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '그룹(teamId : 12)에 멤버 2명 초대 완료',
            }),
        );
    }),
    // 나에게 온 초대장 목록 확인
    rest.get(BASE_URL + `/api/invite`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                invitations: [
                    {
                        invitationId: 13,
                        fromTeamId: 8,
                        fromMemberId: 3,
                        toMemberId: 3,
                        createdAt: '2023-01-14T06:55:52.472984',
                    },
                ],
            }),
        );
    }),
    // 초대장 수락하기
    rest.patch(
        BASE_URL + `/api/invite/accept?invitationId=${1}`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    message: '그룹(teamId : 8)의 초대장 수락 완료',
                }),
            );
        },
    ),
    // 초대장 거절하기
    rest.patch(
        BASE_URL + `/api/invite/refuse?invitationId=${1}`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    message: '그룹(teamId : 5)의 초대장 거절 완료',
                }),
            );
        },
    ),
    // 초대장 회수하기
    rest.patch(
        BASE_URL + `/api/invite/cancel?invitationId=${1}`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    message: '그룹(teamId : 6)의 초대장 회수 완료',
                }),
            );
        },
    ),
];

const worker = MSW_MODE
    ? setupWorker(
          ...authHandlers,
          ...teamHandlers,
          ...scheduleHandlers,
          ...invitationHandlers,
      )
    : setupWorker();

export default worker;
