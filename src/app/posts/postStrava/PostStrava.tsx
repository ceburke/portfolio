import {ToolData, toolsData} from '@/components/tools/toolsData';
import large from './large.png';
import small from './small.png';
import tallNarrow from './tall-narrow.png';
import wideShort from './wide-short.png';
import Link from 'next/link';
import {ExtendedPostTitle, Heading2, PostImage, Double, Triple, Heading3} from '../postComponents';

export default function PostTemplate() {
  return (
    <>
      <ExtendedPostTitle
        title="h1 Heading 2 (36px, bold)"
        description="Brief description in paragraph text, 3-4 sentences (16 px, regular). Lorem ipsum dolor sit amet consectetur. Turpis lacus augue faucibus nibh ac. Volutpat sit egestas neque et. Turpis lacus augue faucibus nibh ac. Turpis lacus augue faucibus nibh ac."
        roles={[
          'Information architecture, prototyping, UI design',
          'Content strategy, art direction',
          'Production',
        ]}
        results={[
          '2x increase of unique sessions',
          'Simplified update flow',
          'Increased discoverability of items XYZ',
          <>
            Result with a{' '}
            <Link className="underline" href="/posts/the-old-fort">
              link to somewhere.
            </Link>
          </>,
        ]}
        toolsData={
          ['Figma', 'Bootstrap']
            .map((toolName) => toolsData.find((tool) => tool.label === toolName))
            .filter(Boolean) as ToolData[]
        }
      />
      <Heading2>Links</Heading2>
      <ul className="list-disc pl-5">
        <li>
          <Link className="underline" href="/posts/the-old-fort">
            Link to another post
          </Link>
        </li>
        <li>
          <Link className="underline" href="/about">
            Link to about page
          </Link>
        </li>
      </ul>
      <p>Links don‘t include “/portfolio“ because they are relative to next.config.ts#basePath</p>

      <Heading2>h2 Overview or step #</Heading2>
      <p>
        Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two paragraphs
        per h2, but trying to keep it concise.{' '}
      </p>
      <PostImage
        src={large}
        description="Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences"
      />
      <PostImage
        src={small}
        description="Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences Descriptive caption, 1-2 sentences"
      />

      <Heading2>h2 Overview or step #</Heading2>
      <p>
        Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two paragraphs
        per h2, but trying to keep it concise.
      </p>
      <Double>
        <PostImage src={small} description="Descriptive caption, 1-2 sentences" />
        <PostImage src={tallNarrow} description="Descriptive caption, 1-2 sentences" />
      </Double>
      <Heading2>h2 Overview or step #</Heading2>
      <p>
        Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two paragraphs
        per h2, but trying to keep it concise.
      </p>
      <Triple>
        <PostImage src={large} description="Descriptive caption, 1-2 sentences" />
        <PostImage src={large} description="Descriptive caption, 1-2 sentences" />
        <PostImage src={large} description="Descriptive caption, 1-2 sentences" />
      </Triple>
      <Heading2>h2 Overview or step #</Heading2>
      <p>
        Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two paragraphs
        per h2, but trying to keep it concise.
      </p>
      <Triple>
        <PostImage src={wideShort} description="Descriptive caption, 1-2 sentences" />
        <PostImage src={large} description="Descriptive caption, 1-2 sentences" />
        <PostImage src={small} description="Descriptive caption, 1-2 sentences" />
      </Triple>
      <Double>
        <section>
          <Heading2>h2 Overview or step #</Heading2>
          <p>
            Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two
            paragraphs per h2, but trying to keep it concise.
          </p>
        </section>
        <PostImage src={wideShort} description="Descriptive caption, 1-2 sentences" />
      </Double>
      <Double>
        <PostImage src={large} description="Descriptive caption, 1-2 sentences" />
        <section>
          <Heading2>h2 Overview or step #</Heading2>
          <p>
            Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two
            paragraphs per h2, but trying to keep it concise.
          </p>
        </section>
      </Double>
      <Heading2>h2 Overview or step #</Heading2>
      <Double>
        <section className="h-full">
          <Heading3>h3</Heading3>
          <p>
            Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two
            paragraphs per h2, but trying to keep it concise.
          </p>
        </section>
        <section className="h-full">
          <Heading3>h3</Heading3>
          <p>
            Brief description in paragraph text, 3-4 sentences (16 px, regular). Possibly two
            paragraphs per h2, but trying to keep it concise.
          </p>
        </section>
      </Double>
    </>
  );
}
