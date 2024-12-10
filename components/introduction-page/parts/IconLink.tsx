import Link from 'next/link';
import { Icon } from '@iconify/react';

const IconLink: React.FC<{ className: string; href: string; icon: string }> = (props) => {
  return (
    <Link href={props.href} target="_blank" rel="noreferrer">
      <Icon icon={props.icon} className={props.className} />
    </Link>
  );
};

export default IconLink;
