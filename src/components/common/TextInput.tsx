import styled from '@emotion/styled/macro';

type TextInputProps = {
    id?: string;
    type?: 'none' | 'id' | 'password';
    width?: string;
    height?: string;
    margin?: string;
    error?: boolean;
    placeholder?: string;
    value?: string | number;
    errorMessage?: string;
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = styled.input<{ height?: string; placeholder?: string }>`
    width: 100%;
    height: ${({ height }) => height ?? '2.4em'};
    border: none;
    border-bottom: ${({ theme }) => theme.font.color.sub} 1px solid;
    placeholder: ${({ placeholder }) => placeholder};
    &::placeholder {
        color: ${({ theme }) => theme.font.color.sub};
    }
    &:focus {
        outline: none;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        -webkit-box-shadow: none;
        transition: background-color 5000s ease-in-out 0s;
    }
`;

const TextInputComponent = styled.div<{ width?: string; margin?: string }>`
    width: ${({ width }) => width ?? '300px'};
    margin: ${({ margin }) => margin ?? '20px 0px'};
`;

const WarningText = styled.div`
    margin-top: 10px;
    color: ${({ theme }) => theme.font.color.warning};
    font-size: ${({ theme }) => theme.font.size.label};
`;

const TextInput = ({
    id,
    type,
    width,
    height,
    margin,
    error,
    placeholder,
    value,
    errorMessage,
    children,
    onChange,
}: TextInputProps) => {
    return (
        <TextInputComponent width={width} margin={margin}>
            <Input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                height={height}
                placeholder={placeholder}
            />
            {children}
            {error && <WarningText>{errorMessage}</WarningText>}
        </TextInputComponent>
    );
};

export default TextInput;
