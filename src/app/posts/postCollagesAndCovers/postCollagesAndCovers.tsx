import {ExtendedPostTitle, PostImage} from '../postComponents';
import collage1 from './collage1.jpg';

export default function PostCollagesAndCovers() {
  return (
    <>
      <ExtendedPostTitle
        title="Covers and collages"
        description="Collage has always been one of my favorite creative mediums, whether working digitally or with physical materials. Collage offers endless opportunities for exploration, making it a medium where imagination can truly run wild.

Thanks to a fortuitous stack of National Geographic magazines I stumbled upon in an alley, I was able to dive into a series of collages. This series evolved into a collection of book cover designs that playfully experiment with storytelling and visual balance."
      />

      <PostImage
        src={collage1}
        description="A selection of collages and book covers created from found images."
      />
    </>
  );
}
