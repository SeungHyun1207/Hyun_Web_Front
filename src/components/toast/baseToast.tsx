/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : 기본 Input 컴포넌트
 */

interface IBaseToastProps {
  message: string;
  type: string; // success, warning, info, error
  duration?: number; // milliseconds
  show?: boolean;
  onClose?: () => void;
  position?: string; // top-left, top-right, bottom-left, bottom-right
  className?: string;
  style?: React.CSSProperties;
  transitionDuration?: number; // milliseconds
  transitionTimingFunction?: string; // ease, linear, ease-in, ease-out, ease-in-out
  transitionDelay?: number; // milliseconds
}

const BaseToast = ({}: IBaseToastProps) => {
  return (
    <div
    //   className={`toast toast-${props.type} ${props.className}`}
    //   style={{
    //     ...props.style,
    //     transitionDuration: props.transitionDuration,
    //     transitionTimingFunction: props.transitionTimingFunction,
    //     transitionDelay: props.transitionDelay,
    //   }}
    >
      {/* <div className="toast-message">{props.message}</div>
      {props.onClose && (
        <button
          type="button"
          className="toast-close-button"
          onClick={props.onClose}
        >
          <span>&times;</span>
        </button>
      )} */}
    </div>
  );
};

export default BaseToast;
