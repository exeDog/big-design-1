// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { createStyledIcon, IconProps, PrivateIconProps } from '../base';
import { useUniqueId } from '../utils';

const Icon: React.FC<IconProps & PrivateIconProps> = ({ svgRef, title, theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      aria-hidden={ariaHidden}
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M21 2.21a.47.47 0 00-.35.15l-.79.79c-.2.2-.51.2-.71 0l-.79-.79c-.2-.2-.51-.2-.71 0l-.79.79c-.2.2-.51.2-.71 0l-.79-.79c-.2-.2-.51-.2-.71 0l-.79.79c-.2.2-.51.2-.71 0l-.79-.79c-.2-.2-.51-.2-.71 0l-.79.79c-.2.2-.51.2-.71 0l-.8-.8c-.2-.2-.51-.2-.71 0l-.79.8c-.2.2-.51.2-.71 0l-.79-.8c-.2-.2-.51-.2-.71 0l-.79.8c-.2.2-.51.2-.71 0l-.79-.8A.5.5 0 003 2.21V21.8c.13 0 .26-.05.35-.15l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.2.2.51.2.71 0l.79-.79c.2-.2.51-.2.71 0l.79.79c.1.1.23.15.35.15V2.21zM17 17H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z" />
    </svg>
  );
};

const IconWithForwardedRef = forwardRef<SVGSVGElement, IconProps>((iconProps, ref) => (
  <Icon {...iconProps} svgRef={ref} />
));

export const ReceiptIcon = memo(createStyledIcon(IconWithForwardedRef as React.FC<IconProps>));

ReceiptIcon.displayName = 'ReceiptIcon';
