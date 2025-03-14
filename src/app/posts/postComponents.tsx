import LightBox from "@/components/Lightbox";
import { ToolData } from "@/components/tools/toolsData";
import ToolsList from "@/components/tools/ToolsList";
import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";

export function Heading1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactNode {
  return <h1 className={`text-5xl font-bold mb-1 ${className}`}>{children}</h1>;
}

export function Heading2({ children }: { children: React.ReactNode }): React.ReactNode {
  return <h2 className="text-2xl font-bold mb-1">{children}</h2>;
}

export function Heading3({ children }: { children: React.ReactNode }): React.ReactNode {
  return <h3 className="text-xl font-bold mb-1">{children}</h3>;
}

export function Double({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactNode {
  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
}

export function Triple({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-5 items-center justify-center min-h-52">
      {children}
    </section>
  );
}

export function PostImage({
  src,
  description,
}: {
  src: string | StaticImageData;
  description: string;
}): React.ReactNode {
  return (
    <figure className="flex flex-col justify-start h-full">
      <div className="relative h-auto max-w-full max-h-full mx-auto">
        <LightBox>
          <ExportedImage
            className="object-contain max-h-full"
            src={src}
            alt={description}
            sizes="100vw"
          />
        </LightBox>
      </div>
      <figcaption className="italic text-md mt-2 flex-none h-36 lg:h-16">{description}</figcaption>
    </figure>
  );
}

export function ExtendedPostTitle({
  title,
  description,
  roles,
  results,
  toolsData,
}: {
  title: string;
  description?: React.ReactNode;
  roles?: React.ReactNode[];
  results?: React.ReactNode[];
  toolsData?: ToolData[];
}): React.ReactNode {
  return (
    <div className="flex flex-col justify-center gap-5 pb-10 my-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-5 pb-3">
        <Heading1 className="w-full lg:w-2/5">{title}</Heading1>
        <div className="w-full lg:w-3/5 lg:ml-5">
          {!!description && <p>{description}</p>}
          <Double className="w-full lg:w-3/5">
            {roles && (
              <section className="h-full">
                <>
                  <Heading2>Responsibilities</Heading2>
                  <ul className="mt-5 list-disc pl-6">
                    {roles.map((role, i) => (
                      <li key={i}>{role}</li>
                    ))}
                  </ul>
                </>
              </section>
            )}
            {results && (
              <section className="h-full">
                <Heading2>Results</Heading2>
                <ul className="mt-5 list-disc pl-6">
                  {results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
              </section>
            )}
          </Double>
          {toolsData && (
            <>
              <Heading2>Primary Tools</Heading2>
              <ToolsList toolsData={toolsData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
