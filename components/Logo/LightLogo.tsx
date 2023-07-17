import Image from 'next/image';

const LightLogo = () => {
  return (
    <Image
      priority
      src={'/images/logo.svg'}
      alt={'logo'}
      width={175}
      height={48}
      style={{
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
      }}
    />
  );
};

export default LightLogo;
