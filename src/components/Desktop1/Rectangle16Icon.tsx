import { memo, SVGProps } from 'react';

const Rectangle16Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1920 102' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1920V102H0V0Z' fill='white' />
  </svg>
);
const Memo = memo(Rectangle16Icon);
export { Memo as Rectangle16Icon };
