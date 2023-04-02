import { setupWorker, rest } from 'msw';

const MSW_MODE = false;

const BASE_URL = process.env.REACT_APP_BASE_URL;

const authHandlers = [
    // 로그인
    rest.post<{ username: string; password: string }>(
        BASE_URL + `/login`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.set('Authorization', `Bearer some_token}`),
                ctx.json({
                    memberId: 3,
                    username: 'max@gmail.com',
                    nickname: 'max',
                }),
            );
        },
    ),
    // 닉네임 일부로 유저 검색
    rest.get(
        BASE_URL + `/api/member/search/nickname`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    members: [
                        {
                            memberId: 1,
                            username: 'coderder815',
                            nickname: 'check-filter',
                        },
                        {
                            memberId: 2,
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
        BASE_URL + `/api/member/search/username`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    members: [
                        {
                            memberId: 1,
                            username: 'coderder815',
                            nickname: 'check-filter',
                        },
                        {
                            memberId: 2,
                            username: 'coderder814',
                            nickname: 'check-filter',
                        },
                    ],
                }),
            );
        },
    ),
    // 마이페이지 - 내 정보 조회
    rest.get(BASE_URL + `/api/member/mypage`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                memberId: 1,
                username: 'coderder815',
                nickname: 'check-filter',
            }),
        );
    }),
];

const teamHandlers = [
    // 그룹 생성하기
    rest.post<{ name: string }>(
        BASE_URL + `/api/team`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    teamId: 12,
                    name: 'group1',
                }),
            );
        },
    ),
    // 그룹 정보 조회하기
    rest.get(BASE_URL + `/api/team`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                teamId: 1,
                name: 'group1',
                myRole: 'LEADER',
                teamMembers: [
                    {
                        memberId: 3,
                        username: 'coderder',
                        nickname: '재연결 테스트',
                        teamRole: 'LEADER',
                    },
                    {
                        memberId: 5,
                        username: 'member',
                        nickname: '다른 팀원',
                        teamRole: 'FOLLOWER',
                    },
                ],
                invitations: [
                    {
                        invitationId: 49,
                        team: {
                            teamId: 37,
                            name: 'group1',
                        },
                        fromMember: {
                            memberId: 3,
                            username: 'coderder',
                            nickname: '재연결 테스트',
                        },
                        toMember: {
                            memberId: 2,
                            username: 'coderder814',
                            nickname: 'check-filter',
                        },
                        createdAt: '2023-01-29T04:02:06.581982',
                    },
                ],
            }),
        );
    }),
    // 그룹 수정하기
    rest.patch<{ name: string }>(
        BASE_URL + `/api/team`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    teamId: 1,
                    name: '새로운 팀 이름',
                }),
            );
        },
    ),
    // 그룹 삭제하기
    rest.delete(BASE_URL + `/api/team`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '그룹(id : 37) 삭제 완료',
            }),
        );
    }),
    // 그룹 멤버 조회하기
    rest.get(BASE_URL + `/api/team/members`, async (req, res, ctx) => {
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
    }),
    // 그룹 멤버 추가하기
    // rest.patch(BASE_URL + `/api/team/members`, async (req, res, ctx) => {
    //     return res(
    //         ctx.status(200),
    //         ctx.json({
    //             message: '그룹(teamId : 12)의 멤버로 추가 완료',
    //         }),
    //     );
    // }),
    // 그룹에서 멤버 탈퇴시키기
    rest.delete(BASE_URL + `/api/team/members`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '그룹(teamId : 13)에서 멤버 2명 탈퇴 처리 완료',
            }),
        );
    }),
    // 내 그룹 목록 가져오기
    rest.get(BASE_URL + `/api/team/myteams`, async (req, res, ctx) => {
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
    rest.delete(BASE_URL + `/api/team/myteam`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '그룹(teamId : 3)에서 탈퇴 완료',
            }),
        );
    }),
];

const scheduleHandlers = [
    // 내 일정 조회하기
    rest.get(BASE_URL + `/api/schedule/myschedule`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                schedule: [
                    {
                        id: 13,
                        start: 'MON+11:00:00',
                        end: 'MON+12:30:00',
                        memberId: 'coderder',
                        title: 'test_schedule',
                        memo: null,
                    },
                    {
                        id: 14,
                        start: 'MON+11:00:00',
                        end: 'MON+12:30:00',
                        memberId: 'coderder',
                        title: 'test_schedule',
                        memo: null,
                    },
                ],
            }),
        );
    }),
    // 내 일정 만들기
    rest.post<{ title: string; start: string; end: string }>(
        BASE_URL + `/api/schedule/myschedule`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    message: '개인 스케쥴 {이름} 추가 완료',
                }),
            );
        },
    ),
    // 내 일정 삭제하기
    rest.delete(
        BASE_URL + `/api/schedule/myschedule`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    message: 'schedule id : {id} delete complete',
                }),
            );
        },
    ),
    // 팀 모든 멤버 일정 조회
    rest.get(BASE_URL + `/api/schedule/myteam`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    username: 'coderder',
                    schedule: [
                        {
                            id: 13,
                            start: 'MON+11:00:00',
                            end: 'MON+12:30:00',
                            memberId: 'coderder',
                            title: 'test_schedule',
                            memo: null,
                        },
                        {
                            id: 14,
                            start: 'MON+11:00:00',
                            end: 'MON+12:30:00',
                            memberId: 'coderder',
                            title: 'test_schedule',
                            memo: null,
                        },
                    ],
                },
                {
                    username: 'coderder815',
                    schedule: [
                        {
                            id: 15,
                            start: 'TUE+11:00:00',
                            end: 'TUE+12:30:00',
                            memberId: 'coderder815',
                            title: 'tea time',
                            memo: null,
                        },
                    ],
                },
            ]),
        );
    }),
    // 팀 일정 조회
    rest.get(BASE_URL + `/api/schedule/teamschedule`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                schedule: [
                    {
                        id: 11,
                        start: 'MON+09:00:00',
                        end: 'MON+10:00:00',
                        title: 'team1_weekly_study',
                        memo: null,
                    },
                    {
                        id: 12,
                        start: 'MON+19:00:00',
                        end: 'MON+20:00:00',
                        title: 'team1_weekly_study',
                        memo: null,
                    },
                ],
            }),
        );
    }),
    // 팀 일정 생성하기
    rest.post<{ title: string; start: string; end: string }>(
        BASE_URL + `/api/schedule/teamschedule`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    message: 'team schedule {name} insert complete',
                }),
            );
        },
    ),
];

const recommendHandlers = [
    // 팀 시간 추천
    rest.get(
        BASE_URL + `/api/schedule/recommendations`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    start: 'FRI+10:00:00',
                    end: 'FRI+11:00:00',
                    memberNicknames: ['tom', 'sarah', 'nick'],
                }),
            );
        },
    ),
    // 가능한 시간 모두 조회
    rest.get(
        BASE_URL + `/api/schedule/emptySchedule`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    blocks: [
                        {
                            start: 'THU+06:00:00',
                            end: 'THU+23:00:00',
                        },
                        {
                            start: 'MON+10:00:00',
                            end: 'MON+11:00:00',
                        },
                    ],
                }),
            );
        },
    ),
];

const invitationHandlers = [
    // 유저에 초대장 보내기
    rest.post<{ memberIds: number[] }>(
        BASE_URL + `/api/invite`,
        async (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    message: '그룹(teamId : 12)에 멤버 2명 초대 완료',
                }),
            );
        },
    ),
    // 나에게 온 초대장 목록 확인
    rest.get(BASE_URL + `/api/invite`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                invitations: [
                    {
                        invitationId: 55,
                        team: {
                            teamId: 6,
                            name: '사이드프로젝트팀',
                        },
                        fromMember: {
                            memberId: 1,
                            username: 'coderder815',
                            nickname: 'check-filter',
                        },
                        toMember: {
                            memberId: 3,
                            username: 'coderder',
                            nickname: '재연결 테스트',
                        },
                        createdAt: null,
                    },
                    {
                        invitationId: 56,
                        team: {
                            teamId: 7,
                            name: '사이드프로젝트팀',
                        },
                        fromMember: {
                            memberId: 2,
                            username: 'coderder814',
                            nickname: 'check-filter',
                        },
                        toMember: {
                            memberId: 3,
                            username: 'coderder',
                            nickname: '재연결 테스트',
                        },
                        createdAt: null,
                    },
                ],
            }),
        );
    }),
    // 초대장 수락하기
    rest.patch(BASE_URL + `/api/invite/accept`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '그룹(teamId : 8)의 초대장 수락 완료',
            }),
        );
    }),
    // 초대장 거절하기
    rest.patch(BASE_URL + `/api/invite/refuse`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '그룹(teamId : 5)의 초대장 거절 완료',
            }),
        );
    }),
    // 초대장 회수하기
    rest.patch(BASE_URL + `/api/invite/cancel`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                message: '그룹(teamId : 6)의 초대장 회수 완료',
            }),
        );
    }),
];

const worker = MSW_MODE
    ? setupWorker(
          ...authHandlers,
          ...teamHandlers,
          ...scheduleHandlers,
          ...recommendHandlers,
          ...invitationHandlers,
      )
    : setupWorker();

export default worker;
