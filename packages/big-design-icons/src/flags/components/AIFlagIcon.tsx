// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';

import { PrivateIconProps } from '../../base';
import { useUniqueId } from '../../utils';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({ svgRef, title = 'AI flag', theme, ...props }) => {
  const uniqueTitleId = useUniqueId('icon');
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg viewBox="0 0 640 480" aria-hidden={ariaHidden} ref={svgRef} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path fill="#49497d" d="M484.3 180.4l2 2z" />
      <path fill="#0e0e6e" d="M486.3 180.4l2 2z" />
      <path fill="#262678" d="M480.2 182.4l2 2z" />
      <path fill="#808067" d="M482.3 182.4l2 2z" />
      <path fill="#58587b" d="M488.3 182.4l2 2z" />
      <path fill="#0e0e6e" d="M413.2 184.5l2 2z" />
      <path fill="#1b1b74" d="M476.2 184.5l2 2z" />
      <path fill="#6e6c70" d="M478.2 184.5l2 2z" />
      <path
        fill="#cc3"
        d="M416.8 188c0 52.6-6 111.7 33 152.8 8 8.4 23.4 27.7 36.5 27 13.7-.8 31.4-21.1 39.2-31 34-44.8 28.7-98.2 29.8-150.2-15.3 6.9-23 9.2-36.4 9-10 1-25.3-5.5-34.5-10-6 4-14.7 8.9-30.4 9.4-18 .8-23.8-2.3-37.2-7z"
      />
      <path fill="#99994e" d="M490.4 184.5l2 2z" />
      <path fill="#49497d" d="M492.4 184.5l2 2z" />
      <path fill="#0e0e6e" d="M555.3 184.5l2 2z" />
      <path fill="#a4a43d" d="M415.3 186.5l2 2z" />
      <path fill="#6e6c70" d="M417.3 186.5l2 2z" />
      <path fill="#3a3a7c" d="M419.3 186.5l2 2z" />
      <path fill="#1b1b74" d="M472 186.5l2 2z" />
      <path fill="#6e6c70" d="M474 186.5l2 2z" />
      <path fill="#a4a43d" d="M476.2 186.5l2 2z" />
      <path fill="#d0d045" d="M484.3 186.5l2 2z" />
      <path fill="#a4a43d" d="M492.4 186.5l2 2z" />
      <path fill="#8d8d5b" d="M494.4 186.5l2 2z" />
      <path fill="#3a3a7c" d="M496.5 186.5l2 2z" />
      <path fill="#262678" d="M549.2 186.5l2 2z" />
      <path fill="#53527c" d="M551.3 186.5l2 2z" />
      <path fill="#8d8d5b" d="M553.3 186.5l2 2z" />
      <path fill="#737370" d="M423.4 188.6l2 2z" />
      <path fill="#53527c" d="M425.4 188.6l2 2z" />
      <path fill="#1b1b74" d="M427.4 188.6l2 2z" />
      <path fill="#262678" d="M468 188.6l2 2z" />
      <path fill="#6e6c70" d="M470 188.6l2 2z" />
      <path fill="#a4a43d" d="M472 188.6l2 2z" />
      <path fill="#e5e59d" d="M482.3 188.6l2 2z" />
      <path
        fill="#fff"
        d="M420.9 193.8c-1 27.6-.2 58.6 4 88 4.9 15.5 4.2 24 11.3 33.2l99-.8c6-9.7 10.5-24.4 11-30.3 5.6-29.7 5.7-62.6 5.9-92a62 62 0 01-35.7 7.4 69 69 0 01-30.5-9.2c-9.5 5.6-12.8 8.2-28.4 8.9-12.2.6-22 1.6-36.6-5.2z"
      />
      <path fill="#f2f1d7" d="M486.3 188.6l2 2z" />
      <path fill="#d9d868" d="M488.3 188.6l2 2z" />
      <path fill="#a4a43d" d="M496.5 188.6l2 2z" />
      <path fill="#99994e" d="M498.5 188.6l2 2z" />
      <path fill="#49497d" d="M500.5 188.6l2 2z" />
      <path fill="#0e0e6e" d="M502.5 188.6l2 2z" />
      <path fill="#3a3a7c" d="M543.2 188.6l2 2z" />
      <path fill="#667" d="M545.2 188.6l2 2z" />
      <path fill="#99994e" d="M547.2 188.6l2 2z" />
      <path fill="#a4a43d" d="M549.2 188.6l2 2-2-2m-121.8 2l2 2z" />
      <path fill="#99994e" d="M429.5 190.6l2 2z" />
      <path fill="#6e6c70" d="M431.5 190.6l2 2z" />
      <path fill="#49497d" d="M433.5 190.6l2 2z" />
      <path fill="#1b1b74" d="M435.5 190.6l2 2-2-2m26.4 0l2 2z" />
      <path fill="#53527c" d="M463.9 190.6l2 2-2-2z" />
      <path fill="#8d8d5b" d="M466 190.6l2 2z" />
      <path fill="#a4a43d" d="M468 190.6l2 2z" />
      <path fill="#e5e59d" d="M478.2 190.6l2 2z" />
      <path fill="#fbfaf2" d="M480.2 190.6l2 2z" />
      <path fill="#f2f1d2" d="M490.4 190.6l2 2z" />
      <path fill="#d9d868" d="M492.4 190.6l2 2z" />
      <path fill="#a4a43d" d="M502.5 190.6l2 2z" />
      <path fill="#6e6c70" d="M504.6 190.6l2 2z" />
      <path fill="#3a3a7c" d="M506.6 190.6l2 2z" />
      <path fill="#0e0e6e" d="M533 190.6l2 2z" />
      <path fill="#32327b" d="M535 190.6l2 2z" />
      <path fill="#58587b" d="M537 190.6l2 2z" />
      <path fill="#808067" d="M539 190.6l2 2z" />
      <path fill="#a4a43d" d="M542.5 191.2l1.3.7z" />
      <path fill="#dddc7a" d="M419.3 192.6l2 2z" />
      <path fill="#d0d045" d="M421.3 192.6l2 2z" />
      <path fill="#a4a43d" d="M436.9 193.2l1.4.7z" />
      <path fill="#808067" d="M439.6 192.6l2 2z" />
      <path fill="#667" d="M441.6 192.6l2 2z" />
      <path fill="#58587b" d="M443.7 192.6l2 2z" />
      <path fill="#49497d" d="M445.7 192.6l2 2z" />
      <path fill="#737370" d="M457.9 192.6l2 2z" />
      <path fill="#99994e" d="M459.9 192.6l2 2z" />
      <path fill="#a4a43d" d="M461.9 192.6l2 2z" />
      <path fill="#e5e59d" d="M474 192.6l2 2z" />
      <path fill="#fbfaf2" d="M476.2 192.6l2 2z" />
      <path fill="#f2f1d2" d="M494.4 192.6l2 2z" />
      <path fill="#d9d868" d="M496.5 192.6l2 2z" />
      <path fill="#a4a43d" d="M507.9 193.2l1.4.7-1.3-.7z" />
      <path fill="#808067" d="M510.7 192.6l2 2z" />
      <path fill="#667" d="M512.7 192.6l2 2z" />
      <path fill="#58587b" d="M514.7 192.6l2 2z" />
      <path fill="#3a3a7c" d="M516.8 192.6l2 2z" />
      <path fill="#58587b" d="M526.2 193.2l1.4.7z" />
      <path fill="#737370" d="M528.9 192.6l2 2z" />
      <path fill="#99994e" d="M530.9 192.6l2 2-2-2z" />
      <path fill="#a4a43d" d="M533 192.6l2 2z" />
      <path fill="#dddc7a" d="M549.2 192.6l2 2z" />
      <path fill="#d0d045" d="M551.3 192.6l2 2z" />
      <path fill="#f2f1d7" d="M423.4 194.6l2 2z" />
      <path fill="#e0dea1" d="M425.4 194.6l2 2z" />
      <path fill="#dddc7a" d="M427.4 194.6l2 2z" />
      <path fill="#d9d868" d="M468 194.6l2 2z" />
      <path fill="#e5e3af" d="M470 194.6l2 2z" />
      <path fill="#f6f6e4" d="M498.5 194.6l2 2z" />
      <path fill="#e1e18c" d="M500.5 194.6l2 2z" />
      <path fill="#d4d456" d="M541 194.6l2 2z" />
      <path fill="#e1e18c" d="M543.2 194.6l2 2z" />
      <path fill="#eeedc1" d="M545.2 194.6l2 2z" />
      <path fill="#f2f1d2" d="M431.5 196.6l2 2z" />
      <path fill="#e0dea1" d="M433.5 196.6l2 2z" />
      <path fill="#dddc7a" d="M435.5 196.6l2 2z" />
      <path fill="#d0d045" d="M437.6 196.6l2 2z" />
      <path fill="#dddc7a" d="M461.9 196.6l2 2z" />
      <path fill="#e5e3af" d="M463.9 196.6l2 2-2-2z" />
      <path fill="#f6f6e4" d="M466 196.6l2 2z" />
      <path fill="#eeedc1" d="M504.6 196.6l2 2z" />
      <path fill="#e1e18c" d="M506.6 196.6l2 2z" />
      <path fill="#d4d456" d="M508.6 196.6l2 2z" />
      <path fill="#d9d868" d="M533 196.6l2 2z" />
      <path fill="#e1e18c" d="M535 196.6l2 2z" />
      <path fill="#eeedc1" d="M537 196.6l2 2z" />
      <path fill="#f6f6e4" d="M539 196.6l2 2z" />
      <path fill="#f2f1d7" d="M441.6 198.6l2 2-2-2z" />
      <path fill="#f2f1d2" d="M443.7 198.6l2 2-2-2z" />
      <path fill="#eeedc1" d="M445.7 198.6l2 2-2-2z" />
      <path fill="#f2f1d2" d="M455.2 199.3l1.3.7z" />
      <path fill="#fbfaf2" d="M457.9 198.6l2 2-2-2z" />
      <path fill="#fef8f1" d="M468 198.6l4 4v-4h-4z" />
      <path fill="#f2f1d7" d="M512.7 198.6l2 2-2-2z" />
      <path fill="#f2f1d2" d="M514.7 198.6l2 2-2-2z" />
      <path fill="#e5e3af" d="M516.8 198.6l2 2-2-2z" />
      <path fill="#e5e59d" d="M520.2 199.3l1.3.7-1.4-.7z" />
      <path fill="#e0dea1" d="M522.9 198.6l2 2-2-2z" />
      <path fill="#f2f1d2" d="M526.2 199.3l1.4.7z" />
      <path fill="#fbfaf2" d="M528.9 198.6l2 2-2-2z" />
      <path fill="#fef8f1" d="M463.9 200.7l2 2-2-2z" />
      <path fill="#fbbe66" d="M466 200.7l2 2z" />
      <path fill="#fbc477" d="M463.9 202.7l2 2-2-2z" />
      <path fill="#fcb144" d="M468 202.7l2 2z" />
      <path fill="#fe9f11" d="M463.9 204.8l2 2-2-2z" />
      <path fill="#fea522" d="M468 204.8l2 2z" />
      <path fill="#fae3c9" d="M461.9 206.8l2 2-2-2m8.2 0l2 2z" />
      <path fill="#fbead6" d="M480.2 206.8l2 2z" />
      <path fill="#f9d6aa" d="M482.3 206.8l2 2z" />
      <path fill="#fae3c9" d="M490.4 206.8l2 2z" />
      <path fill="#fef8f1" d="M492.4 206.8l2 2z" />
      <path fill="#f9d099" d="M461.9 208.8l2 2z" />
      <path fill="#fdab33" d="M470 208.8l2 2z" />
      <path fill="#fcf1e4" d="M474 208.8l2 2z" />
      <path fill="#fbc477" d="M476.2 208.8l2 2z" />
      <path fill="#fea522" d="M478.2 208.8l2 2z" />
      <path fill="#fcb755" d="M494.4 208.8l2 2z" />
      <path fill="#f9d6aa" d="M496.5 208.8l2 2z" />
      <path fill="#faca88" d="M461.9 210.9l2 2z" />
      <path fill="#fea522" d="M472 210.9l2 2-2-2m26.5 0l2 2z" />
      <path fill="#f8dcbb" d="M500.5 210.9l2 2z" />
      <path fill="#f6f6e4" d="M419.3 212.9l2 2z" />
      <path fill="#fbc477" d="M461.9 212.9l2 2z" />
      <path fill="#fbbe66" d="M502.5 212.9l2 2z" />
      <path fill="#f8dcbb" d="M504.6 212.9l2 2z" />
      <path fill="#faca88" d="M461.9 214.9l2 2z" />
      <path fill="#fcb755" d="M508.6 214.9l2 2z" />
      <path fill="#f8dcbb" d="M510.7 214.9l2 2z" />
      <path fill="#fef8f1" d="M459.9 217l2 2z" />
      <path fill="#fe9f11" d="M461.9 217l2 2z" />
      <path fill="#fdab33" d="M518.8 217l2 2z" />
      <path fill="#fcb144" d="M520.9 217l2 2z" />
      <path fill="#fbc477" d="M522.9 217l2 2z" />
      <path fill="#f9d6aa" d="M524.9 217l4 4z" />
      <path fill="#fef8f1" d="M526.9 217l2 2z" />
      <path fill="#fcb144" d="M459.9 219l2 2z" />
      <path fill="#fdab33" d="M488.3 219l2 2z" />
      <path fill="#fbc477" d="M490.4 219l2 2zm8 0l2 2-2-2z" />
      <path fill="#fea522" d="M500.5 219l2 2z" />
      <path fill="#fae3c9" d="M457.9 221l2 2z" />
      <path fill="#fcb144" d="M484.3 221l2 2z" />
      <path fill="#fae3c9" d="M486.3 221l2 2z" />
      <path fill="#f8dcbb" d="M502.5 221l2 2z" />
      <path fill="#fdab33" d="M504.6 221l2 2z" />
      <path fill="#fe9f11" d="M516.8 221l2 2z" />
      <path fill="#fcb755" d="M518.8 221l2 2z" />
      <path fill="#f9d099" d="M520.9 221l2 2z" />
      <path fill="#fbead6" d="M522.9 221l2 2z" />
      <path fill="#fcb144" d="M457.9 223l2 2z" />
      <path fill="#fbbe66" d="M482.3 223l2 2z" />
      <path fill="#f9d099" d="M506.6 223l2 2z" />
      <path fill="#fbead6" d="M514.7 223l2 2z" />
      <path fill="#fcf1e4" d="M455.9 225l2 2z" />
      <path fill="#fbbe66" d="M480.2 225l2 2z" />
      <path fill="#f9d099" d="M508.6 225l2 2z" />
      <path fill="#fae3c9" d="M514.7 225l2 2z" />
      <path fill="#fbc477" d="M455.9 227l2 2z" />
      <path fill="#fcb144" d="M478.2 227l2 2-2-2m32.5 0l2 2z" />
      <path fill="#fbbe66" d="M514.7 227l2 2z" />
      <path fill="#f6f6e4" d="M419.3 229l2 2z" />
      <path fill="#fea522" d="M455.9 229l2 2z" />
      <path fill="#fbead6" d="M478.2 229l2 2z" />
      <path fill="#fcf1e4" d="M510.7 229l2 2z" />
      <path fill="#fef8f1" d="M516.8 229l2 2z" />
      <path fill="#fcf1e4" d="M453.9 231.2l2 2z" />
      <path fill="#fbbe66" d="M476.2 231.2l2 2z" />
      <path fill="#faca88" d="M512.7 231.2l2 2z" />
      <path fill="#f9d099" d="M516.8 231.2l2 2z" />
      <path fill="#f9d6aa" d="M453.9 233.2l2 2z" />
      <path fill="#fcf1e4" d="M476.2 233.2l2 2z" />
      <path fill="#fae3c9" d="M486.3 233.2l2 2z" />
      <path fill="#fea522" d="M488.3 233.2l2 2z" />
      <path fill="#fcb144" d="M490.4 233.2l2 2z" />
      <path fill="#f9d6aa" d="M492.4 233.2l2 2z" />
      <path fill="#fef8f1" d="M512.7 233.2l2 2z" />
      <path fill="#fea522" d="M514.7 233.2l2 2z" />
      <path fill="#fdab33" d="M516.8 233.2l2 2z" />
      <path fill="#faca88" d="M453.9 235.2l-2.1 6 2-6z" />
      <path fill="#fea522" d="M474 235.2l2 2z" />
      <path fill="#fef8f1" d="M476.2 235.2l2 2z" />
      <path fill="#f9d099" d="M486.3 235.2l2 2z" />
      <path fill="#fdab33" d="M494.4 235.2l2 2z" />
      <path fill="#fae3c9" d="M496.5 235.2l2 2z" />
      <path fill="#f8dcbb" d="M514.7 235.2l2 2z" />
      <path fill="#f90" d="M516.8 235.2l2 2z" />
      <path fill="#fbead6" d="M519.5 236.6l.6 1.3z" />
      <path fill="#fea522" d="M478.2 237.2l2 2z" />
      <path fill="#fbbe66" d="M480.2 237.2l2 2z" />
      <path fill="#faca88" d="M482.3 237.2l2 2z" />
      <path fill="#fcb144" d="M484.3 237.2l2 2z" />
      <path fill="#fae3c9" d="M486.3 237.2l2 2z" />
      <path fill="#fe9f11" d="M488.3 237.2l2 2z" />
      <path fill="#fdab33" d="M498.5 237.2l2 2z" />
      <path fill="#fbc477" d="M500.5 237.2l2 2z" />
      <path fill="#faca88" d="M502.5 237.2l2 2z" />
      <path fill="#f9d6aa" d="M504.6 237.2l2 2z" />
      <path fill="#fae3c9" d="M507.9 237.9l1.4.7-1.3-.7z" />
      <path fill="#fef8f1" d="M510.7 237.2l2 2z" />
      <path fill="#fbc477" d="M516.8 237.2l2 2z" />
      <path fill="#fef8f1" d="M429.5 239.3l2 2z" />
      <path fill="#fcf1e4" d="M431.5 239.3l2 2z" />
      <path fill="#fcb755" d="M484.3 239.3l2 2z" />
      <path fill="#fbead6" d="M488.3 239.3l2 2z" />
      <path fill="#fea522" d="M490.4 239.3l2 2z" />
      <path fill="#fe9f11" d="M506.6 239.3l2 2z" />
      <path fill="#fcb144" d="M508.6 239.3l-2 4z" />
      <path fill="#fe9f11" d="M512.7 239.3l2 2z" />
      <path fill="#fbbe66" d="M514.7 239.3l2 2z" />
      <path fill="#fcf1e4" d="M516.8 239.3l2 2z" />
      <path fill="#fae3c9" d="M429.5 241.3l2 2z" />
      <path fill="#fe9f11" d="M431.5 241.3l4 4z" />
      <path fill="#fbead6" d="M433.5 241.3l2 2zm18.3 0l2 2z" />
      <path fill="#fae3c9" d="M453.9 241.3l2 2z" />
      <path fill="#fe9f11" d="M472 241.3l2 2z" />
      <path fill="#fbc477" d="M474 241.3l2 2z" />
      <path fill="#fea522" d="M476.2 241.3l2 2z" />
      <path fill="#fbc477" d="M482.3 241.3l2 2z" />
      <path fill="#fef8f1" d="M484.3 241.3l2 2z" />
      <path fill="#fbc477" d="M492.4 241.3l2 2z" />
      <path fill="#fff" d="M508.6 241.3l2 2z" />
      <path fill="#fdab33" d="M510.7 241.3l2 2z" />
      <path fill="#fbc477" d="M518.8 241.3l2 2z" />
      <path fill="#fef8f1" d="M429.5 243.3l2 2z" />
      <path fill="#fbead6" d="M435.5 243.3l2 2z" />
      <path fill="#f9d6aa" d="M445.7 243.3l2 2z" />
      <path fill="#fe9f11" d="M455.9 243.3l2 2z" />
      <path fill="#f9d6aa" d="M459.2 244l1.4.7z" />
      <path fill="#f8dcbb" d="M472 243.3l2 2z" />
      <path fill="#fcf1e4" d="M478.2 243.3l2 2z" />
      <path fill="#f9d6aa" d="M494.4 243.3l2 2z" />
      <path fill="#fdab33" d="M508.6 243.3l2 2z" />
      <path fill="#fcb755" d="M520.9 243.3l2 2z" />
      <path fill="#fef8f1" d="M522.9 243.3l2 2z" />
      <path fill="#53527c" d="M413.2 245.4l2 2z" />
      <path fill="#fcb755" d="M431.5 245.4l2 2z" />
      <path fill="#fea522" d="M435.5 245.4l2 2z" />
      <path fill="#fbead6" d="M443.7 245.4l2 2z" />
      <path fill="#fe9f11" d="M447.7 245.4l2 2z" />
      <path fill="#fcf1e4" d="M449.8 245.4l2 2z" />
      <path fill="#fbbe66" d="M455.9 245.4l2 2z" />
      <path fill="#fbc477" d="M457.9 245.4l2 2z" />
      <path fill="#fbbe66" d="M459.9 245.4l2 2z" />
      <path fill="#fea522" d="M470 245.4l2 2z" />
      <path fill="#f9d6aa" d="M496.5 245.4l2 2z" />
      <path fill="#fcb144" d="M522.9 245.4l2 2z" />
      <path fill="#8d8d5b" d="M555.3 245.4l2 2z" />
      <path fill="#e5e3af" d="M419.3 247.4l2 2z" />
      <path fill="#f8dcbb" d="M431.5 247.4l2 2z" />
      <path fill="#fdab33" d="M437.6 247.4l2 2z" />
      <path fill="#fe9f11" d="M443.7 247.4l2 2z" />
      <path fill="#faca88" d="M447.7 247.4l2 2z" />
      <path fill="#fcf1e4" d="M455.9 247.4l2 2z" />
      <path fill="#f9d099" d="M470 247.4l2 2-2-2m28.5 0l2 2z" />
      <path fill="#fbbe66" d="M524.9 247.4l2 2z" />
      <path fill="#fea522" d="M433.5 249.4l2 2z" />
      <path fill="#fdab33" d="M439.6 249.4l2 2z" />
      <path fill="#fea522" d="M441.6 249.4l2 2z" />
      <path fill="#fe9f11" d="M445.7 249.4l2 2z" />
      <path fill="#fef8f1" d="M447.7 249.4l2 2z" />
      <path fill="#fbbe66" d="M457.9 249.4l2 2z" />
      <path fill="#fef8f1" d="M470 249.4l2 2z" />
      <path fill="#fbbe66" d="M500.5 249.4l2 2z" />
      <path fill="#f9d099" d="M526.9 249.4l2 2z" />
      <path fill="#f9d6aa" d="M433.5 251.5l2 2z" />
      <path fill="#f9d099" d="M445.7 251.5l2 2z" />
      <path fill="#fcf1e4" d="M457.9 251.5l2 2z" />
      <path fill="#fdab33" d="M468 251.5l2 2-2-2m34.5 0l2 2z" />
      <path fill="#fbead6" d="M528.9 251.5l2 2z" />
      <path fill="#fea522" d="M435.5 253.5l2 2z" />
      <path fill="#fe9f11" d="M443.7 253.5l2 2z" />
      <path fill="#fcb144" d="M459.9 253.5l2 2z" />
      <path fill="#faca88" d="M468 253.5l2 2z" />
      <path fill="#f8dcbb" d="M502.5 253.5l2 2z" />
      <path fill="#fcb144" d="M528.9 253.5l2 2z" />
      <path fill="#d3d079" d="M419.3 255.6l2 2z" />
      <path fill="#faca88" d="M435.5 255.6l2 2zm24.4 0l2 2z" />
      <path fill="#fae3c9" d="M468 255.6l2 2-2-2m34.5 0l2 2z" />
      <path fill="#f8dcbb" d="M530.9 255.6l2 2-2-2z" />
      <path fill="#f2f1d7" d="M549.2 255.6l2 2z" />
      <path fill="#58587b" d="M556 256.9l.7 1.3z" />
      <path fill="#d9d868" d="M419.9 258.9l.8 1.4-.7-1.4z" />
      <path fill="#f8dcbb" d="M435.5 257.6l2 2z" />
      <path fill="#f9d6aa" d="M500.5 257.6l2 2z" />
      <path fill="#fe9f11" d="M502.5 257.6l2 2z" />
      <path fill="#fcb144" d="M530.9 257.6l2 2-2-2z" />
      <path fill="#f2f1d2" d="M549.9 258.9l.7 1.4z" />
      <path fill="#fcf1e4" d="M435.5 259.6l2 2z" />
      <path fill="#fef8f1" d="M498.5 259.6l2 2z" />
      <path fill="#fe9f11" d="M500.5 259.6l2 2z" />
      <path fill="#fdab33" d="M506.6 259.6l-2 4z" />
      <path fill="#fcb755" d="M508.6 259.6l2 2z" />
      <path fill="#fea522" d="M533 259.6l2 2z" />
      <path fill="#f9d099" d="M535 259.6l2 2z" />
      <path fill="#53527c" d="M555.3 259.6l2 2z" />
      <path fill="#808067" d="M415.9 263l.7 1.3z" />
      <path fill="#fea522" d="M437.6 261.6l2 2-2-2m6 0l2 2-2-2z" />
      <path fill="#fe9f11" d="M466 261.6l2 2z" />
      <path fill="#fae3c9" d="M498.5 261.6l2 2z" />
      <path fill="#fef8f1" d="M506.6 261.6l2 2z" />
      <path fill="#fcb144" d="M510.7 261.6l2 2z" />
      <path fill="#fcb755" d="M537 261.6l2 2z" />
      <path fill="#fef8f1" d="M539 261.6l4 4z" />
      <path fill="#e5e59d" d="M549.9 263l.7 1.3z" />
      <path fill="#32327b" d="M556 263l.7 1.3z" />
      <path fill="#fcb755" d="M438.3 265l.6 1.4z" />
      <path fill="#fef8f1" d="M445.7 263.6l2 2z" />
      <path fill="#fbbe66" d="M466 263.6l2 2z" />
      <path fill="#fbead6" d="M498.5 263.6l2 2z" />
      <path fill="#fe9f11" d="M502.5 263.6l2 2z" />
      <path fill="#fcf1e4" d="M504.6 263.6l2 2z" />
      <path fill="#fbead6" d="M510.7 263.6l2 2z" />
      <path fill="#fdab33" d="M539 263.6l2 2z" />
      <path fill="#667" d="M415.3 265.6l2 2-2-2z" />
      <path fill="#f6f6e4" d="M421.3 265.6l2 2-2-2z" />
      <path fill="#f9d6aa" d="M445.7 265.6l2 2-2-2z" />
      <path fill="#fdab33" d="M461.9 265.6l2 2-2-2z" />
      <path fill="#fe9f11" d="M463.9 265.6l2 2-2-2z" />
      <path fill="#fcf1e4" d="M466 265.6l2 2-2-2z" />
      <path fill="#fea522" d="M500.5 265.6l2 2-2-2z" />
      <path fill="#faca88" d="M502.5 265.6l2 2-2-2m10.2 0l2 2z" />
      <path fill="#fcb144" d="M541 265.6l2 2-2-2z" />
      <path fill="#dddc7a" d="M549.2 265.6l2 2-2-2z" />
      <path fill="#58587b" d="M415.3 267.7l2 2z" />
      <path fill="#f2f1d2" d="M421.3 267.7l2 2z" />
      <path fill="#fcb144" d="M438.3 269l.6 1.4z" />
      <path fill="#fea522" d="M445.7 267.7l2 2z" />
      <path fill="#fef8f1" d="M466 267.7l2 2z" />
      <path fill="#fea522" d="M468 267.7l2 2z" />
      <path fill="#fcb144" d="M472 267.7l2 2z" />
      <path fill="#fbead6" d="M474 267.7l2 2z" />
      <path fill="#f8dcbb" d="M500.5 267.7l2 2z" />
      <path fill="#fcf1e4" d="M502.5 267.7l2 2z" />
      <path fill="#fef8f1" d="M512.7 267.7l2 2z" />
      <path fill="#fe9f11" d="M514.7 267.7l2 2z" />
      <path fill="#fbead6" d="M543.2 267.7l2 2z" />
      <path fill="#d9d868" d="M549.2 267.7l2 2z" />
      <path fill="#3a3a7c" d="M415.3 269.7l2 2z" />
      <path fill="#e5e3af" d="M421.3 269.7l2 2z" />
      <path fill="#faca88" d="M447.7 269.7l2 2z" />
      <path fill="#fbead6" d="M468 269.7l2 2z" />
      <path fill="#fe9f11" d="M474 269.7l2 2z" />
      <path fill="#fcf1e4" d="M476.2 269.7l2 2z" />
      <path fill="#fbead6" d="M498.5 269.7l2 2z" />
      <path fill="#fae3c9" d="M500.5 269.7l2 2z" />
      <path fill="#fbead6" d="M502.5 269.7l2 2z" />
      <path fill="#fbbe66" d="M514.7 269.7l2 2-2-2m16.3 0l2 2z" />
      <path fill="#fcf1e4" d="M533 269.7l2 2z" />
      <path fill="#fef8f1" d="M535 269.7l2 2z" />
      <path fill="#f8dcbb" d="M537 269.7l2 2z" />
      <path fill="#fcb755" d="M539 269.7l2 2z" />
      <path fill="#fae3c9" d="M543.2 269.7l2 2z" />
      <path fill="#808067" d="M553.3 269.7l2 2z" />
      <path fill="#32327b" d="M415.3 271.8l2 2z" />
      <path fill="#a4a43d" d="M417.9 273l.7 1.5-.6-1.4z" />
      <path fill="#e5e59d" d="M421.3 271.8l2 2z" />
      <path fill="#fbc477" d="M437.6 271.8l2 2z" />
      <path fill="#f9d6aa" d="M449.8 271.8l2 2z" />
      <path fill="#fbbe66" d="M470 271.8l2 2z" />
      <path fill="#f9d099" d="M476.2 271.8l2 2z" />
      <path fill="#fae3c9" d="M494.4 271.8l2 2z" />
      <path fill="#fcb144" d="M496.5 271.8l2 2z" />
      <path fill="#fae3c9" d="M504.6 271.8l2 2z" />
      <path fill="#f8dcbb" d="M514.7 271.8l2 2z" />
      <path fill="#f9d099" d="M530.9 271.8l2 2-2-2z" />
      <path fill="#fbc477" d="M541 271.8l2 2z" />
      <path fill="#fbead6" d="M543.2 271.8l2 2z" />
      <path fill="#737370" d="M553.3 271.8l2 2z" />
      <path fill="#d9d868" d="M421.3 273.8l2 2z" />
      <path fill="#f9d099" d="M437.6 273.8l2 2z" />
      <path fill="#f9d6aa" d="M451.8 273.8l2 2-2-2m18.3 0l2 2z" />
      <path fill="#fbc477" d="M476.2 273.8l2 2z" />
      <path fill="#fef8f1" d="M486.3 273.8l2 2z" />
      <path fill="#f8dcbb" d="M488.3 273.8l2 2z" />
      <path fill="#fbc477" d="M490.4 273.8l2 2z" />
      <path fill="#fea522" d="M492.4 273.8l2 2z" />
      <path fill="#fbead6" d="M504.6 273.8l2 2z" />
      <path fill="#f2f1d2" d="M547.2 273.8l2 2z" />
      <path fill="#58587b" d="M553.3 273.8l2 2z" />
      <path fill="#99994e" d="M417.3 275.8l2 2z" />
      <path fill="#d0d045" d="M421.3 275.8l2 2z" />
      <path fill="#fcb144" d="M453.9 275.8l2 2z" />
      <path fill="#fae3c9" d="M455.9 275.8l2 2z" />
      <path fill="#fef8f1" d="M470 275.8l2 2z" />
      <path fill="#fcb755" d="M478.2 275.8l2 2z" />
      <path fill="#fbc477" d="M480.2 275.8l2 2z" />
      <path fill="#fcb144" d="M482.3 275.8l2 2z" />
      <path fill="#fea522" d="M484.3 275.8l2 2z" />
      <path fill="#fe9f11" d="M500.5 275.8l2 2z" />
      <path fill="#f9d6aa" d="M502.5 275.8l2 2z" />
      <path fill="#fef8f1" d="M530.9 275.8l2 2-2-2z" />
      <path fill="#e0dea1" d="M547.2 275.8l2 2z" />
      <path fill="#3a3a7c" d="M553.3 275.8l2 2z" />
      <path fill="#737370" d="M417.3 277.9l2 2z" />
      <path fill="#fbfaf2" d="M423.4 277.9l2 2z" />
      <path fill="#fea522" d="M439.6 277.9l2 2z" />
      <path fill="#fe9f11" d="M457.9 277.9l2 2z" />
      <path fill="#fcb144" d="M459.9 277.9l2 2z" />
      <path fill="#fbc477" d="M461.9 277.9l2 2z" />
      <path fill="#faca88" d="M463.9 277.9l2 2-2-2z" />
      <path fill="#fbc477" d="M466 277.9l2 2z" />
      <path fill="#fcb144" d="M468 277.9l2 2z" />
      <path fill="#fdab33" d="M470 277.9l2 2z" />
      <path fill="#fbc477" d="M498.5 277.9l2 2z" />
      <path fill="#fef8f1" d="M500.5 277.9l2 2z" />
      <path fill="#fdab33" d="M528.9 277.9l2 2z" />
      <path fill="#e1e18c" d="M547.2 277.9l2 2z" />
      <path fill="#a4a43d" d="M551.9 279.2l.7 1.4z" />
      <path fill="#262678" d="M553.3 277.9l2 2z" />
      <path fill="#58587b" d="M417.3 279.9l2 2z" />
      <path fill="#f2f1d2" d="M423.4 279.9l2 2z" />
      <path fill="#faca88" d="M439.6 279.9l2 2z" />
      <path fill="#fe9f11" d="M494.4 279.9l2 2z" />
      <path fill="#fbead6" d="M496.5 279.9l2 2z" />
      <path fill="#fbc477" d="M514.7 279.9l2 2z" />
      <path fill="#faca88" d="M528.9 279.9l2 2z" />
      <path fill="#d4d456" d="M547.2 279.9l2 2z" />
      <path fill="#32327b" d="M417.3 281.9l2 2z" />
      <path fill="#e5e59d" d="M423.4 281.9l2 2z" />
      <path fill="#fef8f1" d="M439.6 281.9l2 2z" />
      <path fill="#fe9f11" d="M441.6 281.9l2 2z" />
      <path fill="#fbead6" d="M494.4 281.9l2 2z" />
      <path fill="#fea522" d="M514.7 281.9l2 2z" />
      <path fill="#fcf1e4" d="M528.9 281.9l2 2z" />
      <path fill="#808067" d="M551.3 281.9l2 2z" />
      <path fill="#0e0e6e" d="M417.3 283.9l2 2z" />
      <path fill="#a4a43d" d="M419.3 283.9l2 2z" />
      <path fill="#d9d868" d="M423.4 283.9l2 2z" />
      <path fill="#f8dcbb" d="M441.6 283.9l2 2z" />
      <path fill="#f9d6aa" d="M512.7 283.9l2 2z" />
      <path fill="#faca88" d="M526.9 283.9l2 2z" />
      <path fill="#f2f1d2" d="M545.2 283.9l2 2z" />
      <path fill="#58587b" d="M551.3 283.9l2 2z" />
      <path fill="#8d8d5b" d="M419.3 286l2 2z" />
      <path fill="#f9d6aa" d="M443.7 286l2 2z" />
      <path fill="#fdab33" d="M484.3 286l2 2z" />
      <path fill="#fff" d="M486.3 286l2 2z" />
      <path fill="#fcb144" d="M489.7 286.6l1.4.7z" />
      <path fill="#fef8f1" d="M510.7 286l-2 4z" />
      <path fill="#fe9f11" d="M512.7 286l2 2z" />
      <path fill="#fdab33" d="M524.9 286l-2 4z" />
      <path fill="#e5e59d" d="M545.2 286l2 2z" />
      <path fill="#3a3a7c" d="M551.3 286l2 2z" />
      <path fill="#667" d="M419.3 288l2 2z" />
      <path fill="#f2f1d2" d="M425.4 288l2 2z" />
      <path fill="#f9d6aa" d="M445.7 288l2 2z" />
      <path fill="#fe9f11" d="M484.3 288l2 2z" />
      <path fill="#faca88" d="M486.3 288l2 2z" />
      <path fill="#fea522" d="M488.3 288l2 2z" />
      <path fill="#fcf1e4" d="M490.4 288l2 2z" />
      <path fill="#fdab33" d="M510.7 288l2 2z" />
      <path fill="#fef8f1" d="M524.9 288l2 2z" />
      <path fill="#d9d868" d="M545.2 288l2 2z" />
      <path fill="#a4a43d" d="M549.2 288l2 2z" />
      <path fill="#0e0e6e" d="M551.3 288l2 2z" />
      <path fill="#3a3a7c" d="M419.3 290l2 2z" />
      <path fill="#e5e59d" d="M425.4 290l2 2z" />
      <path fill="#fae3c9" d="M447.7 290l4 4z" />
      <path fill="#fe9f11" d="M449.8 290l2 2z" />
      <path fill="#f8dcbb" d="M488.3 290l2 2z" />
      <path fill="#fcf1e4" d="M506.6 290l2 2z" />
      <path fill="#fdab33" d="M508.6 290l2 2z" />
      <path fill="#fcb144" d="M520.9 290l2 2z" />
      <path fill="#fef8f1" d="M522.9 290l2 2z" />
      <path fill="#fbfaf2" d="M543.2 290l2 2z" />
      <path fill="#8d8d5b" d="M549.2 290l2 2z" />
      <path fill="#0e0e6e" d="M419.3 292l2 2z" />
      <path fill="#a4a43d" d="M421.3 292l2 2z" />
      <path fill="#d4d456" d="M425.4 292l2 2z" />
      <path fill="#f9d6aa" d="M486.3 292l2 2z" />
      <path fill="#f9d099" d="M504.6 292l2 2z" />
      <path fill="#fe9f11" d="M506.6 292l2 2z" />
      <path fill="#faca88" d="M518.8 292l2 2z" />
      <path fill="#eeedc1" d="M543.2 292l2 2z" />
      <path fill="#58587b" d="M549.2 292l2 2z" />
      <path fill="#737370" d="M421.3 294l2 2z" />
      <path fill="#f6f6e4" d="M427.4 294l2 2z" />
      <path fill="#fbbe66" d="M449.8 294l2 2z" />
      <path fill="#fcb144" d="M482.3 294l2 2z" />
      <path fill="#f8dcbb" d="M484.9 295.5l.7 1.3z" />
      <path fill="#fbbe66" d="M500.5 294l2 2z" />
      <path fill="#fe9f11" d="M502.5 294l2 2z" />
      <path fill="#fbc477" d="M514.7 294l2 2z" />
      <path fill="#fcf1e4" d="M516.8 294l2 2z" />
      <path fill="#d3d079" d="M543.2 294l2 2z" />
      <path fill="#a4a43d" d="M547.2 294l2 2z" />
      <path fill="#262678" d="M549.2 294l2 2z" />
      <path fill="#49497d" d="M421.3 296l2 2z" />
      <path fill="#e0dea1" d="M427.4 296l2 2z" />
      <path fill="#fae3c9" d="M447.7 296l2 2z" />
      <path fill="#fdab33" d="M476.2 296l2 2z" />
      <path fill="#fbc477" d="M478.2 296l2 2z" />
      <path fill="#fbead6" d="M480.2 296l2 2z" />
      <path fill="#fcb144" d="M486.3 296l2 2z" />
      <path fill="#f9d6aa" d="M512.7 296l2 2z" />
      <path fill="#99994e" d="M547.2 296l2 2z" />
      <path fill="#0e0e6e" d="M421.3 298.2l2 2z" />
      <path fill="#a4a43d" d="M423.4 298.2l2 2z" />
      <path fill="#d4d456" d="M427.4 298.2l2 2z" />
      <path fill="#f9d099" d="M445.7 298.2l2 2z" />
      <path fill="#fe9f11" d="M447.7 298.2l2 2-2-2m10.2 0l2 2z" />
      <path fill="#f9d6aa" d="M459.9 298.2l2 2z" />
      <path fill="#f9d099" d="M461.9 298.2l2 2z" />
      <path fill="#f9d6aa" d="M470 298.2l2 2z" />
      <path fill="#fae3c9" d="M472 298.2l2 2z" />
      <path fill="#fef8f1" d="M474 298.2l2 2z" />
      <path fill="#fbead6" d="M490.4 298.2l2 2z" />
      <path fill="#fae3c9" d="M492.4 298.2l2 2z" />
      <path fill="#faca88" d="M494.4 298.2l2 2z" />
      <path fill="#fbc477" d="M496.5 298.2l2 2z" />
      <path fill="#fdab33" d="M498.5 298.2l2 2z" />
      <path fill="#fe9f11" d="M508.6 298.2l2 2z" />
      <path fill="#f9d6aa" d="M510.7 298.2l2 2z" />
      <path fill="#e5e3af" d="M541 298.2l2 2z" />
      <path fill="#667" d="M547.2 298.2l2 2z" />
      <path fill="#737370" d="M423.4 300.2l2 2z" />
      <path fill="#f2f1d7" d="M429.5 300.2l2 2z" />
      <path fill="#fea522" d="M443.7 300.2l2 2z" />
      <path fill="#fe9f11" d="M453.9 300.2l2 2z" />
      <path fill="#fbbe66" d="M455.9 300.2l2 2z" />
      <path fill="#fcf1e4" d="M457.9 300.2l2 2z" />
      <path fill="#fea522" d="M506.6 300.2l2 2z" />
      <path fill="#fbead6" d="M508.6 300.2l2 2z" />
      <path fill="#dddc7a" d="M541 300.2l2 2z" />
      <path fill="#a4a43d" d="M545.2 300.2l2 2z" />
      <path fill="#262678" d="M547.2 300.2l2 2z" />
      <path fill="#49497d" d="M423.4 302.2l2 2z" />
      <path fill="#a4a43d" d="M426 303.6l.8 1.3z" />
      <path fill="#d3d079" d="M429.5 302.2l2 2z" />
      <path fill="#f9d099" d="M445.7 302.2l2 2z" />
      <path fill="#fcb144" d="M447.7 302.2l2 2z" />
      <path fill="#faca88" d="M449.8 302.2l2 2z" />
      <path fill="#f8dcbb" d="M451.8 302.2l2 2z" />
      <path fill="#fef8f1" d="M453.9 302.2l2 2z" />
      <path fill="#f8dcbb" d="M498.5 302.2l2 2z" />
      <path fill="#fcf1e4" d="M506.6 302.2l2 2z" />
      <path fill="#f6f6e4" d="M539 302.2l2 2z" />
      <path fill="#8d8d5b" d="M545.2 302.2l2 2z" />
      <path fill="#fbfaf2" d="M431.5 304.2l2 2z" />
      <path fill="#fbbe66" d="M498.5 304.2l2 2z" />
      <path fill="#faca88" d="M504.6 304.2l2 2z" />
      <path fill="#e1e18c" d="M539 304.2l2 2z" />
      <path fill="#49497d" d="M545.2 304.2l2 2z" />
      <path fill="#58587b" d="M425.4 306.3l2 2z" />
      <path fill="#e5e59d" d="M431.5 306.3l2 2z" />
      <path fill="#fe9f11" d="M498.5 306.3l2 2z" />
      <path fill="#fdab33" d="M502.5 306.3l2 2z" />
      <path fill="#fbfaf2" d="M537 306.3l2 2z" />
      <path fill="#a4a43d" d="M543.2 306.3l2 2z" />
      <path fill="#0e0e6e" d="M545.2 306.3l2 2z" />
      <path fill="#1b1b74" d="M425.4 308.3l2 2z" />
      <path fill="#a4a43d" d="M427.4 308.3l2 2z" />
      <path fill="#d0d045" d="M431.5 308.3l2 2z" />
      <path fill="#fbead6" d="M496.5 308.3l2 2z" />
      <path fill="#fe9f11" d="M500.5 308.3l2 2z" />
      <path fill="#fbead6" d="M502.5 308.3l2 2z" />
      <path fill="#e5e59d" d="M537 308.3l2 2z" />
      <path fill="#667" d="M543.2 308.3l2 2z" />
      <path fill="#6e6c70" d="M427.4 310.3l2 2z" />
      <path fill="#e5e3af" d="M433.5 310.3l2 2z" />
      <path fill="#faca88" d="M497 311.7l.8 1.4z" />
      <path fill="#fae3c9" d="M500.5 310.3l2 2z" />
      <path fill="#fbfaf2" d="M535 310.3l2 2z" />
      <path fill="#a4a43d" d="M541 310.3l2 2z" />
      <path fill="#1b1b74" d="M543.2 310.3l2 2-2-2m-115.8 2l2 2z" />
      <path fill="#a4a43d" d="M429.5 312.4l2 2z" />
      <path fill="#d0d045" d="M433.5 312.4l2 2z" />
      <path fill="#fbfaf2" d="M435.5 312.4l2 2z" />
      <path fill="#f9d6aa" d="M498.5 312.4l2 2z" />
      <path fill="#e5e59d" d="M535 312.4l2 2z" />
      <path fill="#6e6c70" d="M541 312.4l2 2-2-2m-111.5 2l2 2z" />
      <path fill="#8cbf84" d="M435.5 314.4l2 2z" />
      <path fill="#0cf" d="M436.4 314.4c7 14.8 32 49.8 51 49.2 18.6-.7 39.5-35 47.6-49.2z" />
      <path fill="#a4a43d" d="M539 314.4l2 2z" />
      <path fill="#1b1b74" d="M541 314.4l2 2-2-2m-111.5 2l2 2z" />
      <path fill="#a4a43d" d="M431.5 316.4l2 2z" />
      <path fill="#adb333" d="M435.5 316.4l2 2z" />
      <path fill="#1ac5b5" d="M437.6 316.4l2 2z" />
      <path fill="#68b070" d="M533 316.4l2 2z" />
      <path fill="#667" d="M539 316.4l2 2z" />
      <path fill="#58587b" d="M431.5 318.5l2 2z" />
      <path fill="#7fb15c" d="M437.6 318.5l2 2z" />
      <path fill="#27c2aa" d="M530.9 318.5l2 2-2-2z" />
      <path fill="#a4a43d" d="M537 318.5l-2 4z" />
      <path fill="#0e0e6e" d="M539 318.5l2 2-2-2m-107.5 2l2 2z" />
      <path fill="#a4a43d" d="M433.5 320.5l4 4z" />
      <path fill="#34be9e" d="M439.6 320.5l2 2z" />
      <path fill="#96b247" d="M530.9 320.5l2 2-2-2z" />
      <path fill="#53527c" d="M537 320.5l2 2z" />
      <path fill="#3a3a7c" d="M433.5 322.6l2 2z" />
      <path fill="#a2b23d" d="M439.6 322.6l2 2z" />
      <path fill="#0dc9c1" d="M441.6 322.6l2 2z" />
      <path fill="#5bb47c" d="M528.9 322.6l2 2z" />
      <path fill="#8d8d5b" d="M535 322.6l2 2z" />
      <path fill="#737370" d="M435.5 324.6l2 2z" />
      <path fill="#74b166" d="M441.6 324.6l2 2z" />
      <path fill="#27c2aa" d="M526.9 324.6l2 2z" />
      <path fill="#a4a43d" d="M533 324.6l-2 4z" />
      <path fill="#262678" d="M535 324.6l2 2z" />
      <path fill="#0e0e6e" d="M435.5 326.6l2 2z" />
      <path fill="#a4a43d" d="M437.6 326.6l4 4z" />
      <path fill="#42bb92" d="M443.7 326.6l2 2z" />
      <path fill="#0dc9c1" d="M524.9 326.6l2 2z" />
      <path fill="#96b247" d="M526.9 326.6l2 2z" />
      <path fill="#58587b" d="M533 326.6l2 2z" />
      <path fill="#3a3a7c" d="M437.6 328.6l2 2z" />
      <path fill="#adb333" d="M443.7 328.6l2 2z" />
      <path fill="#27c2aa" d="M445.7 328.6l2 2z" />
      <path fill="#74b166" d="M524.9 328.6l2 2z" />
      <path fill="#8d8d5b" d="M530.9 328.6l2 2-2-2z" />
      <path fill="#6e6c70" d="M439.6 330.6l2 2z" />
      <path fill="#96b247" d="M445.7 330.6l2 2z" />
      <path fill="#0dc9c1" d="M447.7 330.6l2 2z" />
      <path fill="#42bb92" d="M522.9 330.6l2 2z" />
      <path fill="#a4a43d" d="M528.9 330.6l-4 6 4-6z" />
      <path fill="#1b1b74" d="M530.9 330.6l2 2-2-2z" />
      <path fill="#0e0e6e" d="M439.6 332.6l2 2-2-2z" />
      <path fill="#8d8d5b" d="M441.6 332.6l2 2-2-2z" />
      <path fill="#7fb15c" d="M447.7 332.6l2 2-2-2z" />
      <path fill="#34be9e" d="M520.9 332.6l2 2-2-2z" />
      <path fill="#3a3a7c" d="M528.9 332.6l2 2-2-2z" />
      <path fill="#1b1b74" d="M441.6 334.7l2 2z" />
      <path fill="#a4a43d" d="M443.7 334.7L466 357z" />
      <path fill="#74b166" d="M449.8 334.7l2 2z" />
      <path fill="#27c2aa" d="M518.8 334.7l2 2z" />
      <path fill="#adb333" d="M520.9 334.7l2 2z" />
      <path fill="#667" d="M526.9 334.7l2 2z" />
      <path fill="#32327b" d="M443.7 336.7l2 2z" />
      <path fill="#42bb92" d="M451.8 336.7l2 2z" />
      <path fill="#0dc9c1" d="M516.8 336.7l-8.2 10.2 8.3-10.3z" />
      <path fill="#adb333" d="M518.8 336.7l2 2z" />
      <path fill="#737370" d="M524.9 336.7l2 2z" />
      <path fill="#49497d" d="M445.7 338.8l2 2z" />
      <path fill="#42bb92" d="M453.9 338.8l2 2z" />
      <path fill="#96b247" d="M516.8 338.8l2 2z" />
      <path fill="#8d8d5b" d="M522.9 338.8l-2 4z" />
      <path fill="#0e0e6e" d="M524.9 338.8l2 2z" />
      <path fill="#53527c" d="M447.7 340.8l2 2z" />
      <path fill="#42bb92" d="M455.9 340.8l2 2z" />
      <path fill="#96b247" d="M514.7 340.8l2 2z" />
      <path fill="#0e0e6e" d="M522.9 340.8l2 2z" />
      <path fill="#6e6c70" d="M449.8 342.8l2 2z" />
      <path fill="#42bb92" d="M457.9 342.8l2 2z" />
      <path fill="#96b247" d="M512.7 342.8l2 2z" />
      <path fill="#a4a43d" d="M518.8 342.8l-4 6 4-6z" />
      <path fill="#262678" d="M520.9 342.8l2 2z" />
      <path fill="#6e6c70" d="M451.8 344.9l2 2z" />
      <path fill="#42bb92" d="M459.9 344.9l2 2z" />
      <path fill="#96b247" d="M510.7 344.9l2 2z" />
      <path fill="#262678" d="M518.8 344.9l2 2z" />
      <path fill="#6e6c70" d="M453.9 346.9l2 2z" />
      <path fill="#68b070" d="M461.9 346.9l2 2z" />
      <path fill="#27c2aa" d="M506.6 346.9l2 2z" />
      <path fill="#adb333" d="M508.6 346.9l2 2z" />
      <path fill="#262678" d="M516.8 346.9l2 2z" />
      <path fill="#667" d="M455.9 348.9l2 2z" />
      <path fill="#74b166" d="M463.9 348.9l2 2-2-2z" />
      <path fill="#34be9e" d="M504.6 348.9l2 2z" />
      <path fill="#adb333" d="M506.6 348.9l2 2z" />
      <path fill="#8d8d5b" d="M512.7 348.9l-2 4z" />
      <path fill="#262678" d="M514.7 348.9l2 2z" />
      <path fill="#49497d" d="M457.9 350.9l2 2z" />
      <path fill="#96b247" d="M466 350.9l2 2z" />
      <path fill="#0dc9c1" d="M468 350.9l2 2z" />
      <path fill="#42bb92" d="M502.5 350.9l2 2z" />
      <path fill="#0e0e6e" d="M512.7 350.9l2 2z" />
      <path fill="#49497d" d="M459.9 353l2 2z" />
      <path fill="#a2b23d" d="M468 353l2 2z" />
      <path fill="#27c2aa" d="M470 353l2 2z" />
      <path fill="#74b166" d="M500.5 353l2 2z" />
      <path fill="#a4a43d" d="M506.6 353l-6 8z" />
      <path fill="#808067" d="M508.6 353l2 2z" />
      <path fill="#0e0e6e" d="M510.7 353l2 2z" />
      <path fill="#262678" d="M461.9 355l2 2z" />
      <path fill="#adb333" d="M470 355l2 2z" />
      <path fill="#42bb92" d="M472 355l2 2z" />
      <path fill="#0dc9c1" d="M496.5 355l2 2z" />
      <path fill="#96b247" d="M498.5 355l2 2z" />
      <path fill="#6e6c70" d="M506.6 355l2 2z" />
      <path fill="#1b1b74" d="M463.9 357l2 2-2-2z" />
      <path fill="#8d8d5b" d="M466 357l2 2z" />
      <path fill="#74b166" d="M474 357l2 2z" />
      <path fill="#0dc9c1" d="M476.2 357l2 2z" />
      <path fill="#34be9e" d="M494.4 357l2 2z" />
      <path fill="#adb333" d="M496.5 357l2 2z" />
      <path fill="#49497d" d="M504.6 357l2 2z" />
      <path fill="#0e0e6e" d="M466 359l2 2z" />
      <path fill="#6e6c70" d="M468 359l2 2z" />
      <path fill="#a4a43d" d="M470 359l4 4z" />
      <path fill="#96b247" d="M476.2 359l2 2z" />
      <path fill="#27c2aa" d="M478.2 359l2 2z" />
      <path fill="#68b070" d="M492.4 359l2 2z" />
      <path fill="#32327b" d="M502.5 359l2 2z" />
      <path fill="#49497d" d="M470 361l2 2z" />
      <path fill="#5bb47c" d="M480.2 361l2 2z" />
      <path fill="#27c2aa" d="M488.3 361l2 2z" />
      <path fill="#96b247" d="M490.4 361l2 2z" />
      <path fill="#a4a43d" d="M496.5 361l-2 4z" />
      <path fill="#808067" d="M498.5 361l2 2z" />
      <path fill="#0e0e6e" d="M500.5 361l2 2z" />
      <path fill="#262678" d="M472 363l2 2z" />
      <path fill="#8d8d5b" d="M474 363l2 2z" />
      <path fill="#8bb252" d="M482.3 363l2 2z" />
      <path fill="#1ac5b5" d="M484.3 363l2 2z" />
      <path fill="#5bb47c" d="M486.3 363l2 2z" />
      <path fill="#58587b" d="M496.5 363l2 2z" />
      <path fill="#0e0e6e" d="M474 365.2l2 2z" />
      <path fill="#667" d="M476.2 365.2l2 2z" />
      <path fill="#a4a43d" d="M478.2 365.2l2 2z" />
      <path fill="#99994e" d="M492.4 365.2l2 2z" />
      <path fill="#32327b" d="M494.4 365.2l2 2-2-2m-16.2 2l2 2z" />
      <path fill="#99994e" d="M480.2 367.2l2 2z" />
      <path fill="#a4a43d" d="M488.3 367.2l2 2z" />
      <path fill="#667" d="M490.4 367.2l2 2z" />
      <path fill="#0e0e6e" d="M492.4 367.2l2 2-2-2m-12.2 2l2 2z" />
      <path fill="#667" d="M482.3 369.2l2 2z" />
      <path fill="#a4a43d" d="M484.3 369.2l2 2z" />
      <path fill="#99994e" d="M486.3 369.2l2 2z" />
      <path fill="#32327b" d="M488.3 369.2l2 2z" />
      <path fill="#262678" d="M484.3 371.2l2 2z" />
      <path fill="#0e0e6e" d="M486.3 371.2l2 2z" />
      <path
        fill="#f90"
        d="M488.3 235.2c3.2 7.4 13.2 15.5 16 19.5-3.5 4-4.2 3.6-3.8 11 6-6.4 6.2-7 10.2-6.1 8.6 8.6 1.5 27-5.6 31-7.1 4.3-5.8-.1-16.5 5.2 4.9 4.2 10.6-.6 15.2.7 2.5 3-1.2 8.4.7 13.6 4-.4 3.6-8.7 4.6-11.7 3-11 21-18.6 21.9-28.7 3.8-1.7 7.5-.5 12 2-2.2-9.4-9.7-9.3-11.8-12.2-4.8-7.4-9.1-15.8-19.4-18-8-1.7-7.3.5-12.3-3-3.2-2.4-12.7-7-11.2-3.3z"
      />
      <path fill="#fff" fillRule="evenodd" d="M510.9 243.6a1.6 1.6 0 11-3.3 0 1.6 1.6 0 013.3 0z" />
      <path
        fill="#f90"
        d="M463.2 266.5c5-6.2 7.6-19 9.8-23.2 5.2 1.2 5 2 11.5-1.8-8.5-2.4-9.2-2.2-10.2-6.1 3.6-11.7 23.2-14 30-9.6 7.2 4.3 2.7 5.2 12.4 12 1.4-6.2-5.5-9-6.5-13.6 1.5-3.7 8-3 11.6-7-2.2-3.5-9.3.8-12.4 1.4-11 2.5-26.3-9.8-35.6-6-3.3-2.5-4-6.4-4-11.7-7.1 6.5-3.5 13-5.2 16.3-4.2 7.7-9.7 15.5-6.8 25.6 2.2 7.8 3.8 6.2 3.2 12.3-.7 3.9-.4 14.5 2.2 11.4z"
      />
      <path fill="#fff" fillRule="evenodd" d="M460 242.6c.9-.4 1.9-.1 2.3.7a1.6 1.6 0 11-2.2-.7z" />
      <path
        fill="#f90"
        d="M504.3 270.8c-8-1-20.1 3.3-25 3.7-1.5-5.1-.8-5.5-7.4-9 2.3 8.6 2.8 9 0 12-11.8 2.9-24-12.7-23.8-20.8 0-8.3 3.2-5 4-17-6 2-4.8 9.5-8.3 12.8-4 .6-6.6-5.3-12-6.3-1.8 3.7 5.5 7.5 7.6 9.9 7.9 8.2 5.2 27.5 13.3 33.5-.4 4.2-3.4 6.8-8 9.4 9.3 2.9 13-3.7 16.7-4 8.8-.2 18.3.4 25.5-7.3 5.4-6 3.3-6.5 8.8-9 3.7-1.4 12.6-7.2 8.6-8z"
      />
      <path fill="#fff" fillRule="evenodd" d="M485.5 285.9a1.6 1.6 0 111.7-2.8 1.6 1.6 0 01-1.7 2.8z" />
      <path fill="#012169" d="M0 0h320v240H0z" />
      <path
        fill="#fff"
        d="M37.5 0l122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
      />
      <path
        fill="#c8102e"
        d="M212 140.5L320 220v20l-135.5-99.5zm-92 10l3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
      />
      <path fill="#fff" d="M120.5 0v240h80V0zM0 80v80h320V80z" />
      <path fill="#c8102e" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z" />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const AIFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef as React.FC<FlagIconProps>));

AIFlagIcon.displayName = 'AIFlagIcon';
