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
        objectFit: 'contain',
      }}
    />
  );
};

export default LightLogo;
