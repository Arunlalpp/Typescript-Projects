// import React, {
//   ChangeEvent,
//   KeyboardEvent,
//   MutableRefObject,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import classNames from "classnames";

// export enum InputTypes {
//   Active = "active",
//   Disabled = "disabled",
//   InActive = "inActive",
// }

// export interface InputProps {
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onClick: () => void;
//   placeholderText?: string;
//   updateOnEnter: () => void;
//   value: React.ChangeEvent<HTMLInputElement>;
//   variant?: InputTypes;
// }

// export function Input({
//   onChange,
//   onClick,
//   placeholderText,
//   updateOnEnter,
//   value,
//   variant,
// }: InputProps) {
//   const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
//   const [currentValue, setCurrentValue] = useState(value);

//   const isActive = variant === InputTypes.Active;
//   const isInActive = variant === InputTypes.InActive;
//   const EMPTY = "";
//   const ENTER_KEY = "Enter";

//   useEffect(() => {
//     if (isActive && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [variant, isActive]);

//   const handleChange = (event:ChangeEvent) => {
//     const inputComponent = event.target as HTMLInputElement;

//     const inputValue = inputComponent.value.trim();

//     setCurrentValue(inputValue);

//     const isValid = inputValue !== EMPTY;

//     if (isValid) {
//       onChange(currentValue);
//     }
//   };

//   const handleSubmitOption = (event: KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === ENTER_KEY && currentValue) {
//       updateOnEnter();
//     }
//   };

//   const inputContainerStyle = classNames(
//     "w-full h-11 border rounded-medium text-center text-callout-01 text-late-300",
//     {
//       "placeholder-slate-300 focus:outline-none focus:border focus:border-late-300":
//         isActive,
//       "placeholder-transparent bg-transparent border-lite-gainsboro focus:outline-none focus:border focus:border-red-800":
//         isInActive,
//     }
//   );

//   return (
//     <input
//       className={inputContainerStyle}
//       data-testid="input-element"
//       name="name"
//       onChange={handleChange}
//       onClick={onClick}
//       onKeyDown={handleSubmitOption}
//       placeholder={placeholderText}
//       ref={inputRef}
//       type="text"
//       value={currentValue}
//     />
//   );
// }

// Input.defaultProps = {
//   placeholderText: "",
//   variant: InputTypes.Active,
// };
