import styled from '@emotion/styled/macro';
import { BsXCircle } from 'react-icons/bs';

type MemberProps = {
    width?: string;
    height?: string;
    fontSize?: string;
    backgroundColor?: string;
    deletable?: boolean;
    children: React.ReactNode;
    memberId?: number;
    onDelete?: (id: number) => void;
};

const MemberComponent = styled.div<MemberProps>`
    position: relative;
    width: ${({ width }) => width ?? '130px'};
    height: ${({ height }) => height ?? '2.4em'};
    padding: 0 1rem;
    font-size: ${({ fontSize, theme }) => fontSize ?? theme.font.size.base};
    color: ${({ theme }) => theme.font.color.main.dark};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    transition: all 0.5s;
    &:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    }

    display: flex;
    justify-content: ${({ deletable }) => deletable && 'space-between'};
    align-items: center;
`;

const Name = styled.div<{ deletable?: boolean }>`
    max-width: ${({ deletable }) => deletable && '100px'};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const Member = ({
    width,
    height,
    fontSize,
    backgroundColor,
    deletable,
    children,
    memberId,
    onDelete,
}: MemberProps) => {
    return (
        <MemberComponent
            width={width}
            height={height}
            fontSize={fontSize}
            backgroundColor={backgroundColor}
            deletable={deletable}
        >
            <>
                <Name deletable={deletable}>{children}</Name>
                {deletable && (
                    <BsXCircle
                        style={{ cursor: 'pointer', maxWidth: '16px', flex: 1 }}
                        onClick={() =>
                            onDelete && memberId && onDelete(memberId)
                        }
                    />
                )}
            </>
        </MemberComponent>
    );
};

export default Member;
