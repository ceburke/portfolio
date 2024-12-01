import {StaticImport} from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export function Heading1({children}: {children: React.ReactNode}): React.ReactNode {
  return <h1 className="text-4xl font-bold">{children}</h1>;
}

export function Heading2({children}: {children: React.ReactNode}): React.ReactNode {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

export function Heading3({children}: {children: React.ReactNode}): React.ReactNode {
  return <h3 className="text-xl font-bold">{children}</h3>;
}

export function Double({children}: {children: React.ReactNode}): React.ReactNode {
  return (
    <section className="grid grid-cols-2 gap-5 items-center justify-center min-h-52">
      {children}
    </section>
  );
}

export function Triple({children}: {children: React.ReactNode}): React.ReactNode {
  return (
    <section className="grid grid-cols-3 gap-5 items-center justify-center min-h-52">
      {children}
    </section>
  );
}

export function PostImage({
  src,
  description,
}: {
  src: string | StaticImport;
  description: string;
}): React.ReactNode {
  return (
    <figure className="flex flex-col justify-end h-full">
      <Image className="mx-auto" src={src} alt={description} />
      <figcaption className="italic text-md mt-2 flex-none h-28 lg:h-14 ">{description}</figcaption>
    </figure>
  );
}
