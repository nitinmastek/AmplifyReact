import { memo, SVGProps } from 'react';

const Ellipse13Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={11} cy={11} r={11} fill='#009BA8' stroke='white' strokeWidth={2} />
  </svg>
);
const Memo = memo(Ellipse13Icon);
export { Memo as Ellipse13Icon };
