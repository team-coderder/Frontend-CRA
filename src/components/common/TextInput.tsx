import type { TextInputProps } from '../../types';
import {
    TextInputComponent,
    Input,
    WarnText,
} from '../../styles/componentStyle';

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
            {error && <WarnText>{errorMessage}</WarnText>}
        </TextInputComponent>
    );
};

export default TextInput;
