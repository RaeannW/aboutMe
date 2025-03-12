import useTypeWriter from './useTypeWriter';

export default function Typewriter({ text, speed }) {
  const typeWriterText = useTypeWriter(text, speed);

  return (
    <>
    <div className="h-[300px]">
      <h1 className='p-12 text-6xl font-primary text-[#3D2C22]'>{typeWriterText}</h1>
    </div>
    </>
  );
}
