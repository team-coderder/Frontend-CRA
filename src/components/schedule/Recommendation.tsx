import { useState } from 'react';
import type { RecommendationProps } from '../../types';

const Recommendation = ({ changeSpan }: RecommendationProps) => {
    const [show, setShow] = useState(false);
    const [duration, setDuration] = useState('');

    const toggleShowAll = () => {
        if (show) {
            changeSpan('NONE');
        } else {
            changeSpan('ALL');
        }
        setShow((prev) => !prev);
    };

    const submitRecommend = () => {
        changeSpan(duration);
        setShow(true);
    };

    return (
        <div>
            <h3>Recommend me a meeting time!</h3>
            <button onClick={toggleShowAll}>
                {show ? "Don't show" : 'Show available time'}
            </button>
            <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
            >
                <option value="select">Select duration</option>
                <option value="30">0:30</option>
                <option value="60">1:00</option>
                <option value="90">1:30</option>
                <option value="120">2:00</option>
                <option value="150">2:30</option>
                <option value="180">3:00</option>
                <option value="210">3:30</option>
                <option value="240">4:00</option>
                <option value="270">4:30</option>
                <option value="300">5:00</option>
                <option value="330">5:30</option>
                <option value="360">6:00</option>
            </select>
            <button onClick={submitRecommend}>
                Recommend random available time
            </button>
        </div>
    );
};

export default Recommendation;
