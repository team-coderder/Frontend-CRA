import { BsXCircle } from 'react-icons/bs';
import { MemberComponent, MemberName } from '../../styles/componentStyle';
import type { MemberProps } from '../../types';

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
                <MemberName deletable={deletable}>{children}</MemberName>
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
