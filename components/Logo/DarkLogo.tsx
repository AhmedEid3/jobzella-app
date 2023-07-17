import Image from 'next/image';

const DarkLogo = () => {
  return (
    <Image
      priority
      src={'/images/logo-dark.svg'}
      alt={'logo'}
      width={165}
      height={48}
      style={{ margin: 'auto', objectFit: 'contain' }}
    />
  );
};

export default DarkLogo;
