import { Button } from '../components';
import {
    Main,
    Header,
    AlignRight,
} from '../styles/globalStyle/PageLayout';

const MySchedule = () => (
    <Main>
        <Header>
            <h1>내 스케쥴</h1>
            <AlignRight>
                <Button width="15em" height="2.5em">
                    내 스케줄 수정
                </Button>
            </AlignRight>
        </Header>
        (스케줄)
    </Main>
);

export default MySchedule;
